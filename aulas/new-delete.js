function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

let p1 = new Pessoa("Vini", 18, "M")
let p2 = new Pessoa("James", 19, "M")
console.log(p2)

delete p2.sexo
console.log(p2)