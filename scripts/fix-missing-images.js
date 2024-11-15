const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'franklin.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg'
  },
  {
    name: 'jobs.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
  },
  {
    name: 'krishnamurti.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jiddu_Krishnamurti_in_1929.jpg'
  },
  {
    name: 'gandhi.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg'
  },
  {
    name: 'angelou.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Maya_Angelou_in_1971.jpg'
  },
  {
    name: 'sagan.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.jpg'
  },
  {
    name: 'curie.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Marie_Curie_%281900%29.jpg'
  }
];

const outputDir = path.join(__dirname, '../public/images');
console.log('Output directory:', outputDir);

if (!fs.existsSync(outputDir)) {
  console.log('Creating output directory...');
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadAndProcessImage(imageUrl, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(imageUrl, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        sharp(buffer)
          .resize(300, 300, {
            fit: 'cover',
            position: 'center'
          })
          .toFile(outputPath)
          .then(resolve)
          .catch(reject);
      });
    }).on('error', reject);
  });
}

async function processAllImages() {
  for (const image of images) {
    const outputPath = path.join(outputDir, image.name);
    console.log(`Processing ${image.name}...`);
    try {
      await downloadAndProcessImage(image.url, outputPath);
      console.log(`✓ Completed ${image.name}`);
    } catch (error) {
      console.error(`✗ Error processing ${image.name}:`, error);
    }
  }
}

processAllImages().then(() => {
  console.log('All missing images processed!');
}).catch(console.error);
