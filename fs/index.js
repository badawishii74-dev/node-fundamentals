// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "data.json");

// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });


// using path 
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./data.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
// convert data to object 

const jsonData = JSON.parse(data);
console.log(jsonData.name);
});



