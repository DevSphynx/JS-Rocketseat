/* Criar um algoritimo que converta notas numéricas em notas alfabéticas

90-100 = A
80-89 = B
70-79 = C
60-69 = D
-60 = F
*/

function convert(nn) {
    let na = 0
    
    if (nn >= 90 && nn <=100) {
        na = 'A'
    } else if (nn >= 80 && nn < 90) {
        na = 'B'
    } else if (nn >= 70 && nn < 80) {
        na = 'C'
    } else if (nn >= 60 && nn < 70) {
        na = 'D'
    } else if (nn > 0 && nn < 60) {
        na = 'F'
    } else {
        na = 'Inválida'
    }
    return na

}

console.log('Nota '+convert(-1));