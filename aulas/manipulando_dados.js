// Números em Strings
n = 1234
stringN = String(n)

console.log(typeof(n)+': '+n, typeof(stringN)+': '+stringN)

// Strings em Numbers
s = '4321'
Nstring = Number(s)

console.log(typeof(s)+': '+s, typeof(Nstring)+': '+Nstring)

// Contando Caracteres, Dígitos e Elementos
let word = 'olá'
console.log(word.length)
let number = 1234
console.log(String(number).length) // length é uma função/metódo exclusiva para Strings/Arrays

console.log(['a', 'b', 'c'].length)

// Casas Decimais
let num = 1234.4321
console.log(number.toFixed(2).replace(".", ",")) // Passa a ser uma string

// Maiúsculas e Minúsculas
let phrase = 'Olá Tudo Bem?'
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

// Separando e manipulando espaços de uma string/array
let text = 'Estou Aprendendo JavaScript'
let textArray = text.split(" ")     // Coverte para um Array, com o Argumento de espaço separa por palavra
console.log(textArray)
let textUnderscored = textArray.join("_")       // Converte de volta para uma String normal, com o argumento separa por (_)
console.log(textUnderscored)

// Verificação de inclusão
let Strcores = "Amarelo, Vermelho e Azul"
console.log(Strcores.includes("Amarelo"))
let ListColors = ['Amarelo', 'Vermelho', 'Azul']
console.log(ListColors.includes("Vermelho"))

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Transformar Cadeia de Caracteres em Array
let chars = 'Array'
console.log(Array.from(chars))