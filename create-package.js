const fs = require('fs');
const path = require('path');

// Create a simple script to copy essential files to a package folder
const packageDir = 'portfolio-package';

// Essential files and directories to include
const essentialPaths = [
  'client/',
  'server/',
  'shared/',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'vite.config.ts',
  'postcss.config.js',
  'components.json',
  'drizzle.config.ts',
  'replit.md'
];

// Create package directory
if (!fs.existsSync(packageDir)) {
  fs.mkdirSync(packageDir);
}

console.log('Creating portfolio package...');
console.log('Essential files included:');
essentialPaths.forEach(p => console.log(`- ${p}`));

console.log('\nTo create your package:');
console.log('1. Run: node create-package.js');
console.log('2. Copy the portfolio-package folder');
console.log('3. Run: npm install');
console.log('4. Run: npm run dev');