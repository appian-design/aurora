const { parseTypeScriptMetadata } = require('./check-mcp-sync.js');

// Test TypeScript parsing with a sample
const sampleTypeScript = `
import { readFileSync } from 'fs';

export interface DesignSystemItem {
  title: string;
  body: string;
  filePath: string;
}

export const designSystemData = {
  branding: {
    'colors': {
      title: 'Colors',
      body: 'Color palette and usage guidelines.',
      filePath: 'branding/colors.md'
    },
    'typography': {
      title: 'Typography',
      body: 'Typography scale and fonts.',
      filePath: 'branding/typography.md'
    }
  },
  components: {
    'cards': {
      title: 'Cards',
      body: 'Card components for content.',
      filePath: 'components/cards.md'
    }
  }
};
`;

try {
  console.log('🧪 Testing TypeScript parser...');
  const result = parseTypeScriptMetadata(sampleTypeScript);
  console.log('✅ Parser test successful!');
  console.log('📊 Parsed structure:');
  console.log(JSON.stringify(result, null, 2));
  
  // Verify structure
  if (result.branding && result.branding.colors && result.components && result.components.cards) {
    console.log('✅ All expected properties found');
  } else {
    console.log('❌ Missing expected properties');
  }
} catch (error) {
  console.error('❌ Parser test failed:', error.message);
  process.exit(1);
}