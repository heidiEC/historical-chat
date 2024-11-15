
const https = require("https");
const fs = require("fs");

const images = [
    {
        name: "jobs.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
    },
    {
        name: "krishnamurti.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jiddu_Krishnamurti_in_1929.jpg"
    },
    {
        name: "gandhi.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
    },
    {
        name: "angelou.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Maya_Angelou_in_1971.jpg"
    },
    {
        name: "sagan.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.jpg"
    },
    {
        name: "curie.jpg",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Marie_Curie_%281900%29.jpg"
    }
];

console.log("Starting downloads...");

fs.mkdirSync("./public/images", { recursive: true });

images.forEach((image) => {
    console.log(`Downloading ${image.name}...`);
    const path = `./public/images/${image.name}`;
    
    https.get(image.url, (res) => {
        const writeStream = fs.createWriteStream(path);
        res.pipe(writeStream);
        
        writeStream.on("finish", () => {
            console.log(`Completed ${image.name}`);
            writeStream.close();
        });
    });
});

