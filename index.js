const fs = require('fs'); //plug file module

fs.readFile('text.txt', 'utf-8', (err, data) => {
  fs.writeFile('text.txt', data + '\nNew text', (err, data) => {
    console.log('Done!');
  });
});

fs.mkdir('text-files', () => {
  console.log('Folder created');
})

fs.rmdir('./text-files', () => {
  console.log('Folder deleted');
})