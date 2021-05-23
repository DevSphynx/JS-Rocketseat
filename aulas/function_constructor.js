function Person(name) {
    this.name = name
    this.age = 18
}

const mayk = new Person('Mayk')     // 'Mayk' passa como argumento para o parametro da criação da função
const vini = new Person('Vini')

console.log(mayk)
console.log(vini)