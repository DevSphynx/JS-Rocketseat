family = {
    incomes: [10, 20, 30],
    expenses: [5, 10, 15]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    balance = calculateIncomes - calculateExpenses
    let positivo = balance >= 0
    let balanceMsg = 'Negativo'

    if(positivo){
        balanceMsg = 'Positivo'
    }
    console.log(`Seu saldo está ${balanceMsg} em: ${balance.toFixed(2)}`);
}
calculateBalance()
