// Function é um liquidificador:
/*
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}
const copo = fazerSuco('banana', ' maçã')

console.log(copo)
*/

// Function number:
/*
function sum(n1, n2) {
    let total = n1 + n2
    return total
}
let total = sum(5, 5)
console.log(total)
*/




// Function Scope

let subject = 'string'  //Declara uma variavel para toda a aplicação

function type(subject/* Cria um parametro de nome subject para ser usado dentro apenas da função*/) {
    subject = 'number'
    return subject
}// Se o parametro não for declarado na função, o subject dentro dela busca se há alguma na aplicação e passa a manipula-la, APÓS O CHAMAMENTO DA FUNÇÃO!!!

console.log(subject)
console.log(type(subject))
