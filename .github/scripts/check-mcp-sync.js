const fs = require('fs');
const path = require('path');

// Categories to scan in the design-system-docs repo
const CATEGORIES = {
  'branding': 'Brand identity and visual elements',
  'content-style-guide': 'Content and writing guidelines',
  'accessibility': 'Accessibility guidelines and checklists',
  'layouts': 'Page-level layout templates',
  'patterns': 'Reusable design patterns',
  'components': 'Individual UI components'
};

/**
 * Parse markdown content to extract title and description
 */
function parseMarkdownContent(content) {
  const lines = content.split('\n');
  let title = '';
  let description = '';
  
  // Find first H1
  for (const line of lines) {
    if (line.startsWith('# ')) {
      title = line.substring(2).trim();
      break;
    }
  }
  
  // Find first paragraph after title (skip empty lines and other headers)
  let foundTitle = false;
  for (const line of lines) {
    if (line.startsWith('# ') && !foundTitle) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim() && !line.startsWith('#') && !line.startsWith('---')) {
      description = line.trim();
      break;
    }
  }
  
  return { title, description };
}

/**
 * Generate title from filename as fallback
 */
function generateTitleFromFilename(filename) {
  return filename
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

/**
 * Scan the current repository structure
 */
function scanCurrentRepo() {
  const structure = {};
  
  Object.keys(CATEGORIES).forEach(category => {
    const categoryPath = path.join(process.cwd(), category);
    
    if (fs.existsSync(categoryPath)) {
      structure[category] = {};
      
      const files = fs.readdirSync(categoryPath);
      files.forEach(file => {
        if (file.endsWith('.md')) {
          const filePath = path.join(categoryPath, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const { title, description } = parseMarkdownContent(content);
          
          const key = path.basename(file, '.md');
          structure[category][key] = {
            title: title || generateTitleFromFilename(key),
            body: description || `${CATEGORIES[category]} guidance.`,
            filePath: `${category}/${file}`
          };
        }
      });
    }
  });
  
  return structure;
}

/**
 * Parse TypeScript file content to extract designSystemData object
 */
function parseTypeScriptMetadata(content) {
  try {
    // Find the designSystemData export
    const dataMatch = content.match(/export const designSystemData[\s\S]*?= ([\s\S]*?);\s*$/m);
    if (!dataMatch) {
      throw new Error('Could not find designSystemData export in TypeScript file');
    }
    
    let dataString = dataMatch[1];
    
    // Clean up the TypeScript syntax to make it valid JSON
    // Remove TypeScript type annotations and trailing commas
    dataString = dataString
      .replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)(\s*):/g, '"$1":') // Quote property names
      .replace(/'/g, '"') // Convert single quotes to double quotes
      .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
      .replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
    
    // Parse as JSON
    const parsedData = JSON.parse(dataString);
    return parsedData;
  } catch (error) {
    console.error('Error parsing TypeScript metadata:', error);
    throw new Error(`Failed to parse MCP server metadata: ${error.message}`);
  }
}

/**
 * Fetch current MCP server metadata from GitHub API
 */
async function fetchMCPMetadata() {
  try {
    console.log('📡 Fetching MCP server metadata from GitHub API...');
    
    const response = await fetch(
      'https://api.github.com/repos/pglevy/design-system-server/contents/src/design-system-data.ts',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'design-system-sync-checker'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.type !== 'file') {
      throw new Error('Expected file but got: ' + data.type);
    }
    
    // Decode base64 content
    const content = Buffer.from(data.content, 'base64').toString('utf8');
    console.log('✅ Successfully fetched MCP server file');
    
    // Parse the TypeScript file to extract the designSystemData object
    const metadata = parseTypeScriptMetadata(content);
    console.log(`✅ Parsed metadata with ${Object.keys(metadata).length} categories`);
    
    return metadata;
  } catch (error) {
    console.error('❌ Failed to fetch MCP metadata:', error.message);
    
    // Provide helpful error context
    if (error.message.includes('404')) {
      console.error('   Make sure the file path is correct: src/design-system-data.ts');
    } else if (error.message.includes('403')) {
      console.error('   This might be a rate limiting or permissions issue');
    }
    
    throw error;
  }
}

/**
 * Compare current repo structure with MCP metadata
 */
function compareStructures(current, mcp) {
  const discrepancies = {
    toAdd: [],
    toUpdate: [],
    toRemove: []
  };
  
  // Check for files to add or update
  Object.keys(current).forEach(category => {
    if (!mcp[category]) {
      // Entire category is missing
      Object.keys(current[category]).forEach(key => {
        discrepancies.toAdd.push({
          category,
          key,
          item: current[category][key]
        });
      });
    } else {
      Object.keys(current[category]).forEach(key => {
        if (!mcp[category][key]) {
          // File is missing from MCP
          discrepancies.toAdd.push({
            category,
            key,
            item: current[category][key]
          });
        } else {
          // Check if content differs
          const currentItem = current[category][key];
          const mcpItem = mcp[category][key];
          
          if (currentItem.title !== mcpItem.title || 
              currentItem.body !== mcpItem.body) {
            discrepancies.toUpdate.push({
              category,
              key,
              current: currentItem,
              mcp: mcpItem
            });
          }
        }
      });
    }
  });
  
  // Check for files to remove
  Object.keys(mcp).forEach(category => {
    if (mcp[category] && current[category]) {
      Object.keys(mcp[category]).forEach(key => {
        if (!current[category][key]) {
          discrepancies.toRemove.push({
            category,
            key,
            item: mcp[category][key]
          });
        }
      });
    }
  });
  
  return discrepancies;
}

/**
 * Generate TypeScript code for updates
 */
function generateTypeScriptUpdates(discrepancies) {
  let updates = '';
  
  if (discrepancies.toAdd.length > 0) {
    updates += '### Files to Add:\n\n';
    discrepancies.toAdd.forEach(({ category, key, item }) => {
      updates += `**${category}/${key}:**\n`;
      updates += '```typescript\n';
      updates += `'${key}': {\n`;
      updates += `  title: '${item.title}',\n`;
      updates += `  body: '${item.body}',\n`;
      updates += `  filePath: '${item.filePath}'\n`;
      updates += '},\n';
      updates += '```\n\n';
    });
  }
  
  if (discrepancies.toUpdate.length > 0) {
    updates += '### Files to Update:\n\n';
    discrepancies.toUpdate.forEach(({ category, key, current, mcp }) => {
      updates += `**${category}/${key}:**\n`;
      updates += '```typescript\n';
      updates += `'${key}': {\n`;
      updates += `  title: '${current.title}', // was: '${mcp.title}'\n`;
      updates += `  body: '${current.body}', // was: '${mcp.body}'\n`;
      updates += `  filePath: '${current.filePath}'\n`;
      updates += '},\n';
      updates += '```\n\n';
    });
  }
  
  if (discrepancies.toRemove.length > 0) {
    updates += '### Files to Remove:\n\n';
    discrepancies.toRemove.forEach(({ category, key, item }) => {
      updates += `- Remove \`${category}/${key}\` → "${item.title}" (file no longer exists)\n`;
    });
    updates += '\n';
  }
  
  return updates;
}

/**
 * Add fetch polyfill for Node.js environments that don't have it
 */
function setupFetch() {
  if (typeof fetch === 'undefined') {
    // Try to use node-fetch if available, otherwise provide helpful error
    try {
      const { default: fetch } = require('node-fetch');
      global.fetch = fetch;
    } catch (e) {
      console.error('❌ fetch is not available. In Node.js < 18, you may need to install node-fetch:');
      console.error('   npm install node-fetch');
      throw new Error('fetch is not available');
    }
  }
}

/**
 * Main function
 */
async function main() {
  try {
    // Setup fetch for older Node.js versions
    setupFetch();
    
    console.log('🔍 Scanning current repository structure...');
    const currentStructure = scanCurrentRepo();
    console.log(`   Found ${Object.keys(currentStructure).length} categories`);
    
    console.log('📡 Fetching MCP server metadata...');
    const mcpMetadata = await fetchMCPMetadata();
    
    console.log('🔄 Comparing structures...');
    const discrepancies = compareStructures(currentStructure, mcpMetadata);
    
    const totalChanges = discrepancies.toAdd.length + 
                        discrepancies.toUpdate.length + 
                        discrepancies.toRemove.length;
    
    if (totalChanges === 0) {
      console.log('✅ No discrepancies found - MCP server is in sync!');
      console.log('ISSUE_NEEDED=false');
      process.exit(0);
    } else {
      console.log(`⚠️  Found ${totalChanges} discrepancies`);
      console.log(`   - ${discrepancies.toAdd.length} files to add`);
      console.log(`   - ${discrepancies.toUpdate.length} files to update`);
      console.log(`   - ${discrepancies.toRemove.length} files to remove`);
      
      // Generate issue body
      const issueBody = `## MCP Server Metadata Sync Required

The following discrepancies were detected between design-system-docs and the MCP server metadata:

${generateTypeScriptUpdates(discrepancies)}

---
**Auto-generated by sync-check workflow on ${new Date().toISOString()}**
**Commit:** ${process.env.GITHUB_SHA || 'unknown'}`;

      // Output for GitHub Actions
      console.log('ISSUE_NEEDED=true');
      console.log('ISSUE_TITLE=MCP Server Metadata Sync Required');
      console.log('ISSUE_BODY=' + Buffer.from(issueBody).toString('base64'));
      
      process.exit(1); // Exit with error to indicate sync needed
    }
  } catch (error) {
    console.error('❌ Error during sync check:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Create an issue for the error itself
    const errorIssueBody = `## MCP Server Sync Check Failed

**Error:** ${error.message}

**Details:**
\`\`\`
${error.stack}
\`\`\`

**Timestamp:** ${new Date().toISOString()}
**Commit:** ${process.env.GITHUB_SHA || 'unknown'}

This indicates a problem with the sync checking system itself that needs to be resolved.`;
    
    console.log('ISSUE_NEEDED=true');
    console.log('ISSUE_TITLE=MCP Server Sync Check Failed');
    console.log('ISSUE_BODY=' + Buffer.from(errorIssueBody).toString('base64'));
    
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  parseMarkdownContent,
  parseTypeScriptMetadata,
  scanCurrentRepo,
  fetchMCPMetadata,
  compareStructures,
  generateTypeScriptUpdates
};