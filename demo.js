const fs = require('fs');
// directory path
const dir = './views';

// create new directory
fs.mkdir(dir, (err) => {
    if (err) {
        throw err;
    }
    console.log("Directory is created.");
});