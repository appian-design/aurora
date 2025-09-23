const { scanCurrentRepo } = require('./check-mcp-sync.js');

// Test that the script finds the expected categories
const structure = scanCurrentRepo();
const foundCategories = Object.keys(structure);

console.log('Found categories:', foundCategories);

// Expected categories based on what exists in docs/
const expectedCategories = ['branding', 'components', 'layouts', 'patterns', 'content-style-guide', 'accessibility'];
const missingCategories = expectedCategories.filter(cat => !foundCategories.includes(cat));

if (missingCategories.length > 0) {
  console.error('❌ Missing expected categories:', missingCategories);
  process.exit(1);
}

if (foundCategories.length === 0) {
  console.error('❌ No categories found - script is not scanning correctly');
  process.exit(1);
}

console.log('✅ Test passed - script is finding documentation directories');
