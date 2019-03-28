const fs = require('fs');
const filename = './test.txt';

fs.writeFile(filename, 'Hello, world!', err=>{ /*асинхронная запись файлов*/
    if (err) {
        console.error(err);
    } else {
        console.log('File was saved')
    }
});
//console.log('Im after saving');

// try { /*синхронная запись файлов*/
// fs.writeFileSync(filename, 'Hello, sync!');
// console.log('File was saved');
// } catch(e) {
//     console.error(e);
// }