const path = require('path')
const write = require('./modules/escrever')
const read = require('./modules/ler')

// Object
const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Felipe' },
    { nome: 'Eliza' },
    { nome: 'Nadia' },
    { nome: 'Jose' },
    { nome: 'Barbara' },

]
// Wrirte PATH
const path_file = path.resolve(__dirname, 'teste_write.json')
// Convert to JSON File
const json = JSON.stringify(pessoas, '', 2)
// Call the method
write(path_file, json, 'w')


async function read_file(r_path) {
    const _file = await read(r_path)
    renderData(_file)
    
}

function renderData(dados){
    dados = JSON.parse(dados)
    // console.log(dados)
    dados.forEach(e => console.log(e));
}

const dados_arquivos = read_file(path_file)

