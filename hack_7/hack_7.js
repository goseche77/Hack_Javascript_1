/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let i = 0
for (i = 0; i < arr.length; i++) {
    let mayúscula = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    result.push(mayúscula);

}

//export result
module.exports = result;