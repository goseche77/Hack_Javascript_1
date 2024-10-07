/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let n = 7
while (n > 0) {
    result.push(n)
    n -= 2
}

//export result
module.exports = result;