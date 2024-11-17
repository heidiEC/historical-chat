const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const processImages = async () => {
  const images = ['hawking.jpg', 'gandhi.jpg'];
  
  for (const image of images) {
    const inputPath = path.join(__dirname, 'src/images', image);
    const outputPath = path.join(__dirname, 'public/images', image);

    await sharp(inputPath)
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(outputPath);

    console.log(`Processed ${image}`);
  }
};

processImages().catch(console.error);