// const fs = require("fs/promises");

// async function readFileExample() {
//     try {
       
//         const data = await fs.readFile("./data.json", "utf8");
//         console.log("File contents:", data);
//     } catch (err) {
//         console.error("Error reading file:", err.message);
//     }
// }

// readFileExample();


// enhancement 
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

async function readFileExample() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);

    console.log(jsonData.name);
    console.log("File read successfully");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

readFileExample();
