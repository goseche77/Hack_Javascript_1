/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let n = 0

const numDiccionario = {
    1 : 'one',
    3 : 'three',
    5 : 'five'
}

const strDiccionario = {
    foo : 'f00',
    bar : 'Bar',
    baz : 'b@z',
    qux : 'quX',
    echo : '3ch0'
}
result.push('h@ck')

while (n < numberArray.length) {
    if (numDiccionario[numberArray[n]]){
        result.push(numDiccionario[numberArray[n]])
    } else {
        result.push(numberArray[n])
    }
    n++;
}

result.push('h@ck')

n = 0;
while (n < stringArray.length){
    if (strDiccionario[stringArray[n]]) {
        result.push(strDiccionario[stringArray[n]])        
    } else {
        result.push(stringArray[n]);
    }
    n++;
}

result.push('h@ck');

module.exports = result;