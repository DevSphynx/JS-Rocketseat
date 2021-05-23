// Throw e Try...Catch

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome vazio, insíra um nome!'     // new Error('Nome vazio, insíra um nome!')
        // Throw dispara um erro, e para aplicação a partir dele
    }

    console.log('Depois do Erro')
}

try {       // Try roda a function
    sayMyName()
} catch(e) {        // catch recebe o erro do throw
    console.log(e)
}
// Sem try...catch o throw para a aplicação 
console.log('Após o try...catch capturar o erro');