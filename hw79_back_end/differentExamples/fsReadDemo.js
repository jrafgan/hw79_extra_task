const fs = require('fs');
const filename = './test.json';

fs.readFile(filename, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.parse(data));
    }
});

// const data = fs.readFileSync(filename);
// console.log(JSON.parse(data));