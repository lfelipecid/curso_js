const fs = require('fs').promises

// W => Write over the file
// fs.writeFile(path_file, 'Frase 1', {flag: 'w'})

// A => Append over the file
// fs.writeFile(path_file, '\nFrase 2', {flag: 'a'})

module.exports = (path, data, type) => {
    fs.writeFile(path, data, {flag: type})
}