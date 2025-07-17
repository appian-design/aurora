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
 * Fetch current MCP server metadata from GitHub
 */
async function fetchMCPMetadata() {
  // This would normally fetch from the MCP server repo
  // For now, we'll simulate the current structure based on what we know
  // In a real implementation, this would use GitHub API to fetch the file
  
  const mcpStructure = {
    branding: {
      'logo-and-favicon': {
        title: 'Logo and Favicon',
        body: 'Guidelines for using logos and favicons consistently across applications.',
        filePath: 'branding/logo-and-favicon.md'
      },
      'colors': {
        title: 'Colors',
        body: 'Color palette and usage guidelines for the design system.',
        filePath: 'branding/colors.md'
      },
      'icons': {
        title: 'Icons',
        body: 'Icon library and usage guidelines.',
        filePath: 'branding/icons.md'
      },
      'typography': {
        title: 'Typography',
        body: 'Typography scale, fonts, and text styling guidelines.',
        filePath: 'branding/typography.md'
      },
      'approach-to-ai': {
        title: 'Approach to AI',
        body: 'Guidelines for incorporating AI elements in design.',
        filePath: 'branding/approach-to-ai.md'
      }
    },
    'content-style-guide': {
      'voice-and-tone': {
        title: 'Voice and Tone',
        body: 'Guidelines for consistent voice and tone across content.',
        filePath: 'content-style-guide/voice-and-tone.md'
      }
    },
    accessibility: {
      'checklist': {
        title: 'Accessibility Checklist',
        body: 'Comprehensive checklist for ensuring accessible design and development.',
        filePath: 'accessibility/checklist.md'
      }
    },
    layouts: {
      'dashboards': {
        title: 'Dashboards',
        body: 'Layout patterns for dashboard interfaces.',
        filePath: 'layouts/dashboards.md'
      },
      'empty-states': {
        title: 'Empty States',
        body: 'Layout guidance for empty state screens.',
        filePath: 'layouts/empty-states.md'
      },
      'forms': {
        title: 'Forms',
        body: 'Form layout patterns and best practices.',
        filePath: 'layouts/forms.md'
      },
      'grids': {
        title: 'Grids',
        body: 'Grid system and layout structures.',
        filePath: 'layouts/grids.md'
      },
      'landing-pages': {
        title: 'Landing Pages',
        body: 'Layout patterns for landing and marketing pages.',
        filePath: 'layouts/landing-pages.md'
      },
      'messaging-module': {
        title: 'Messaging Module',
        body: 'Layout for messaging and communication interfaces.',
        filePath: 'layouts/messaging-module.md'
      },
      'pane-layouts': {
        title: 'Pane Layouts',
        body: 'Multi-pane layout patterns for complex interfaces.',
        filePath: 'layouts/pane-layouts.md'
      },
      'record-views': {
        title: 'Record Views',
        body: 'Layout patterns for viewing and editing records.',
        filePath: 'layouts/record-views.md'
      }
    },
    patterns: {
      'banners': {
        title: 'Banners',
        body: 'Banner patterns for important announcements and alerts.',
        filePath: 'patterns/banners.md'
      },
      'calendar-widget': {
        title: 'Calendar Widget',
        body: 'Calendar interface patterns and interactions.',
        filePath: 'patterns/calendar-widget.md'
      },
      'charts': {
        title: 'Charts',
        body: 'Data visualization and chart patterns.',
        filePath: 'patterns/charts.md'
      },
      'comment-thread': {
        title: 'Comment Thread',
        body: 'Comment and discussion thread patterns.',
        filePath: 'patterns/comment-thread.md'
      },
      'document-summary': {
        title: 'Document Summary',
        body: 'Document summary and preview patterns.',
        filePath: 'patterns/document-summary.md'
      },
      'document-cards': {
        title: 'Document Cards',
        body: 'Card patterns for displaying document information.',
        filePath: 'patterns/document-cards.md'
      },
      'inline-dialog': {
        title: 'Inline Dialog',
        body: 'Inline dialog and contextual popup patterns.',
        filePath: 'patterns/inline-dialog.md'
      },
      'key-performance-indicators': {
        title: 'Key Performance Indicators',
        body: 'KPI display and dashboard patterns.',
        filePath: 'patterns/key-performance-indicators.md'
      },
      'notifications': {
        title: 'Notifications',
        body: 'Notification patterns for system messages and alerts.',
        filePath: 'patterns/notifications.md'
      },
      'pick-list': {
        title: 'Pick List',
        body: 'Selection and pick list interface patterns.',
        filePath: 'patterns/pick-list.md'
      }
    },
    components: {
      'breadcrumbs': {
        title: 'Breadcrumbs',
        body: 'Navigation breadcrumb components for showing hierarchy.',
        filePath: 'components/breadcrumbs.md'
      },
      'cards': {
        title: 'Cards',
        body: 'Card components for displaying grouped content.',
        filePath: 'components/cards.md'
      },
      'confirmation-dialog': {
        title: 'Confirmation Dialog',
        body: 'Modal dialog components for confirmations.',
        filePath: 'components/confirmation-dialog.md'
      },
      'milestones': {
        title: 'Milestones',
        body: 'Milestone and progress indicator components.',
        filePath: 'components/milestones.md'
      },
      'more-less-link': {
        title: 'More / Less Link',
        body: 'Expandable content toggle components.',
        filePath: 'components/more-less-link.md'
      },
      'tabs': {
        title: 'Tabs',
        body: 'Tabbed interface components for organizing content.',
        filePath: 'components/tabs.md'
      }
    }
  };
  
  return mcpStructure;
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
 * Main function
 */
async function main() {
  try {
    console.log('🔍 Scanning current repository structure...');
    const currentStructure = scanCurrentRepo();
    
    console.log('📡 Fetching MCP server metadata...');
    const mcpMetadata = await fetchMCPMetadata();
    
    console.log('🔄 Comparing structures...');
    const discrepancies = compareStructures(currentStructure, mcpMetadata);
    
    const totalChanges = discrepancies.toAdd.length + 
                        discrepancies.toUpdate.length + 
                        discrepancies.toRemove.length;
    
    if (totalChanges === 0) {
      console.log('✅ No discrepancies found - MCP server is in sync!');
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
**Commit:** $\{process.env.GITHUB_SHA || 'unknown'}**`;

      // Output for GitHub Actions
      console.log('ISSUE_NEEDED=true');
      console.log('ISSUE_TITLE=MCP Server Metadata Sync Required');
      console.log('ISSUE_BODY=' + Buffer.from(issueBody).toString('base64'));
      
      process.exit(1); // Exit with error to indicate sync needed
    }
  } catch (error) {
    console.error('❌ Error during sync check:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  parseMarkdownContent,
  scanCurrentRepo,
  compareStructures,
  generateTypeScriptUpdates
};