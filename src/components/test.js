const sharp = require('sharp');

const images = [
  'angelou.jpg',
  'bolano.jpg',
  'cortazar.jpg',
  'curie.jpg',
  'davinci.jpg',
  'diana.jpg',
  'einstein.jpg',
  'franklin.jpg',
  'gandhi.jpg',
  'hawking.jpg',
  'jobs.jpg',
  'krishnamurti.jpg',
  'marquez.jpg',
  'mlk.jpg',
  'sagan.jpg',
  'tesla.jpg'
];

async function processImage(filename) {
  try {
    await sharp(`src/images/${filename}`)
      .resize(300, 300, {
        fit: 'cover',
        position: 'top'
      })
      .toFile(`src/images/processed_${filename}`);
    console.log(`Processed ${filename}`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

// Process images sequentially
async function processAllImages() {
  for (const image of images) {
    await processImage(image);
  }
  console.log('All done!');
}

processAllImages().catch(console.error); 