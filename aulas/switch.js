function calculate(number1, operator, number2) {
    let r = 0

    switch(operator){
        case '+':
            r = number1 + number2
            break
        case '-':
            r = number1 - number2
            break
        case '*':
            r = number1 * number2
            break
        case '/':
            r = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return r
}

console.log(calculate(4, '+', 2))