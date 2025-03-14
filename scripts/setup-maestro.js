
// Script to help with Maestro setup

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Setting up Maestro testing environment...');

// Check if Maestro is installed
try {
  const maestroVersion = execSync('maestro --version', { stdio: 'pipe' }).toString().trim();
  console.log(`Maestro is already installed (${maestroVersion})`);
} catch (error) {
  console.log('Maestro is not installed. Please install it using:');
  console.log('curl -Ls "https://get.maestro.mobile.dev" | bash');
  process.exit(1);
}

// Create directories if they don't exist
const directories = [
  'maestro',
  'maestro/flows',
];

directories.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

console.log('Maestro setup complete!');
console.log('Run tests with: npm run test:e2e');
