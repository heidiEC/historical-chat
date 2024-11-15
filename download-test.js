const https = require("https");
const fs = require("fs");

const url = "https://upload.wikimedia.org/wikipedia/commons/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg";
const path = "./src/images/franklin.jpg";

// Create the directory if it doesn't exist
fs.mkdirSync("./src/images", { recursive: true });

console.log("Starting download...");
const file = fs.createWriteStream(path);

https.get(url, (res) => {
    console.log("Download started, status:", res.statusCode);
    res.pipe(file);
    
    file.on("finish", () => {
        console.log("Download complete!");
        file.close();
    });
}).on("error", (err) => {
    console.error("Error:", err);
});
