const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'franklin.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Joseph_Siffred_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg'
  },
  {
    name: 'mlk.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg'
  },
  {
    name: 'jobs.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg'
  },
  {
    name: 'davinci.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Leonardo_self.jpg'
  },
  {
    name: 'krishnamurti.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Jiddu_Krishnamurti_01.jpg'
  },
  {
    name: 'hawking.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg'
  },
  {
    name: 'curie.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg'
  },
  {
    name: 'einstein.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg'
  },
  {
    name: 'gandhi.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg'
  },
  {
    name: 'tesla.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg'
  },
  {
    name: 'angelou.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Maya_Angelou_visits_YCP.jpg'
  },
  {
    name: 'sagan.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.jpg'
  },
  {
    name: 'diana.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Diana%2C_Princess_of_Wales_1997_%282%29.jpg'
  }
];

// Create directories if they don't exist
const outputDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(outputDir)) {
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
          .resize(300, 300, { // Size for the character cards
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
  console.log('All images processed!');
}).catch(console.error); 