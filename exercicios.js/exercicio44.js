/*
44. (Verdadeiro ou Falso) O uso de let dentro do for (ex: for (let i = 0...)) garante que a variável i só exista dentro daquele 
laço. 
*/

for (let i = 0; i < 3; i++) {
  console.log(i); // Funciona!
}

console.log(i); // Erro: i não está definida aqui.

/*
( ) Verdadeiro 
( ) Falso 
*/