function convert(temp){
    const celsius = temp.toUpperCase().includes('C')
    const fahrenheit = temp.toUpperCase().includes('F')
    
    formatC = Number(temp.toUpperCase().replace("C", ""))
    formatF = Number(temp.toUpperCase().replace("F", ""))
    if(celsius){
        inF = formatC * 9/5 +32
        console.log(`${temp} tornam-se ${inF}F`)
    } else if (fahrenheit) {
        inC = (formatF - 32) * 5/9
        console.log(`${temp} tornam-se ${inC}C`)
    } else {
        console.log('Unidade Inválida');
    }
}
convert('50f')