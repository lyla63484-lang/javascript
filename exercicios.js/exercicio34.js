/*
34. (Verdadeiro ou Falso) Em uma estrutura if...else if...else, assim que uma condição é verdadeira, 
o JavaScript executa o bloco correspondente e ignora todos os outros blocos restantes daquela estrutura.  
*/ 

let nota = 8;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

/*
( ) Verdadeiro  
( ) Falso 
*/