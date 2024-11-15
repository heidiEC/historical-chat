const fs = require('fs');
const path = require('path');

console.log('Starting test...');

// Create a simple text file
const testPath = path.join(__dirname, '../public/images/test.txt');

try {
    // Make sure directory exists
    const dir = path.dirname(testPath);
    if (!fs.existsSync(dir)) {
        console.log('Creating directory:', dir);
        fs.mkdirSync(dir, { recursive: true });
    }

    // Write a simple file
    fs.writeFileSync(testPath, 'Test content');
    console.log('File written successfully to:', testPath);

    // Read it back
    const content = fs.readFileSync(testPath, 'utf8');
    console.log('File content:', content);

} catch (error) {
    console.error('Error:', error);
}

console.log('Test completed'); 