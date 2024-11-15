const fs = require('fs');
const https = require('https');
const path = require('path');

console.log('Script started');

// Log the current directory
console.log('Current directory:', __dirname);

// Test with just one image
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg';
const outputPath = path.join(__dirname, '../public/images/franklin.jpg');

console.log('Starting download...');
console.log('Image URL:', imageUrl);
console.log('Output path:', outputPath);

// Check if directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
    console.log('Creating directory:', dir);
    fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(outputPath);

https.get(imageUrl, function(response) {
    console.log('Response status:', response.statusCode);
    
    response.pipe(file);
    
    file.on('finish', function() {
        console.log('Download completed');
        file.close();
    });
}).on('error', function(err) {
    console.error('Error downloading:', err);
    fs.unlink(outputPath, () => {}); // Delete the file if there was an error
});

console.log('Script setup completed'); 