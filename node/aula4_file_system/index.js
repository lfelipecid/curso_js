const fs = require('fs').promises
const path = require('path')

// fs.readdir(path.resolve(__dirname))
//     .then(f => console.log(f))
//     .catch(e => console.log(e))

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)

}

async function walk(files, rootDir) {
    for (let f of files) {
        const full_path = path.resolve(rootDir, f) // Retorna PATH completo
        
        const stats = await fs.stat(full_path)
        


        if (stats.isDirectory()) {
            readdir(full_path)
            continue
        }

        console.log(f, stats.isDirectory())

    }
}


readdir('C:/dev/js/curso_js')
