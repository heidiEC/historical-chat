
const https = require("https");
const fs = require("fs");

console.log("Starting download...");

const url = "https://upload.wikimedia.org/wikipedia/commons/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg";
const path = "./public/images/franklin.jpg";

console.log("Creating directory...");
fs.mkdirSync("./public/images", { recursive: true });

console.log("Downloading image...");
https.get(url, (res) => {
    const writeStream = fs.createWriteStream(path);
    res.pipe(writeStream);
    
    writeStream.on("finish", () => {
        console.log("Download complete!");
        writeStream.close();
    });
});

