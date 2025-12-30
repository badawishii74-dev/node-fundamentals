const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "users.json");

async function readUsers() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        const jsonData = JSON.parse(data)
        
        jsonData.forEach(user => {
            console.log(user.name);
        });

    } catch (error) {
        console.log(error.message);
    }
}

readUsers();
