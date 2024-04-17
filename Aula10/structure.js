/*
let idade = prompt("Informe sua idade: ");
if (idade < 18){
    document.write("Menor que 18!!")
}else if(idade > 20){
    document.write("Maior que 20!");
}else{
    document.write("Idade não identificada!!!");
}
 */

// Exercicio 1
/* 
let salMedio = prompt("Informe seu saldo médio:");
let valCredito;

if(salMedio > 400){
    valCredito = salMedio * 0.3;
}else if(salMedio > 300 && salMedio <= 400){
    valCredito = salMedio * 0.25;
}else if(salMedio >200 && salMedio <= 300){
    valCredito = salMedio * 0.2;
}else if(salMedio <= 200){
    valCredito = salMedio * 0.1;
}else{
    document.write("Valor inválido!!! ");
}


document.write("Saldo médio: ", salMedio, " e valor de Crédito: ", valCredito);

*/
// ------------------------------------------

// Exercício 2

// let n1 = Number(prompt("Digite um número:"));
// let n2 = Number(prompt("Digite outro número:"));
// let aux;


// if (n1 < n2){
//     aux = n2 - n1;
//     document.write("A subtração do maior pelo menor valor é de: ",aux);
// }else if(n1 == n2){
//     aux = 0;
//     document.write("A subtração do maior pelo menor valor é de: ",aux);
// }else{
//     aux = n1 - n2;
//     document.write("A subtração do maior pelo menor valor é de: ",aux);
// }
// ------------------------------------------

// Exercicio 3

// let nota1 = Number(prompt("Digite a 1ª nota:"));
// let nota2 = Number(prompt("Digite a 2ª nota:"))
// let media = (nota1 + nota2)/2

// if(media < 0){
//     document.write("Média inválida!")
// }else if(media <= 4){
//     document.write("Média: ",media," Status: Reprovado");
// }else if(media <= 7){
//     document.write("Média: ",media, " Status: Exame");
// }else if(media <= 10 ){
//     document.write("Média: ",media," Status: Aprovado")
// }
// ------------------------------------------

// Exericio 4

let num = Number(prompt("Digite um número: "))

document.write("A tabuada do número digitado é: <br>")

for(let i=1; i<11; i++){
    document.write(num, " x ", i, " = ", (num*i), "<br>");
}