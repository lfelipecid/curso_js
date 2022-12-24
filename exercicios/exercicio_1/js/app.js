
// Input
const num = Number(prompt('Digite um numéro'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

// Altera texto dentro do HTML
numeroTitulo.innerHTML = num
texto.innerHTML = 
`
<p>Raiz quadrada é: ${Math.sqrt(num)}</p>
<p>${num} é inteiro: ${Number.isInteger(num)}</p>
<p>É NaN: ${Number.isNaN(num)}</p>
<p>Arredondado para baixo ${Math.floor(num)}</p>
<p>Arredondado para cima ${Math.ceil(num)}</p>
<p>Com duas casas decimais ${num.toFixed(2)}</p>
`


 