// For, break e continue 
/*
for(let i = 1; i <= 5; i++){
    console.log(i)
}

for(let b = 1; b <= 5; b++){
    if(b === 3){
        break;      // Para execução do loop
    }
    console.log(b);
}

for(let c = 1; c <= 5; c++){
    if(c === 3){
        continue;       // Pula a execução do momento
    }
    console.log(c)
}*/

// While
/*
let n = 1
while(n <= 10) {
    console.log(n);
    ++n
}*/

// For...of
/*
let name = 'Vini'
let names = ['James', 'Sckio', 'Adilson']

for (let char of name) {
    console.log(char)
}*/

// For...in
let person = {
    name: 'Vini',
    age: 18,
    weigth: 54
}   

for(let property in person) {
    console.log(property)
    console.log(person[property])
}