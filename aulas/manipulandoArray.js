// Manipulando Arrays

let list = ['item1', 'item2', 'item3']

// Adicionar item no fim
list.push('item4')

// Adicionar no começo
list.unshift('item0')

// Remover do fim
list.pop()

// Remover do começo
list.shift()

// Pegar somente alguns elementos do array
console.log(list.slice(1,3))  // pega desde o indice 1 até o 3, NÃO ALTERA O ARRAY!!!

// Remover 1 ou mais elementos de qualquer posição do array
console.log(list.splice(1,1)); // ALTERA O ARRAY MESMO DENTRO DE console.log!!! 

// Econtrar a posição de um elemento dentro de um array
console.log(list.indexOf('item1'));

console.log(list);