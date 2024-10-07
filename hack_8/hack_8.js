/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let n = 1
while (n <= 3) {
    let modify = arr[n]
    if (n < 3) {
        modify = modify.replace('a', '@')
    } else {
        modify = modify.toUpperCase();
    }
    result.push(modify);
    n++
}


//export result
module.exports = result;