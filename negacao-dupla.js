// valores falsy
console.log(!!0); // false
console.log(!!"";) // false
console.log(!!nul); //false

//valores truthy
console.log(!!1); // true
console.log(!!"testo"); // true
console.log(!![]); //trave (Arrays vazios sao objetos, logo sao truthy)
console.log(!!{}); // trave (objetos vazios sao truthy)