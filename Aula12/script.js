// function somar(n1,n2){
//     return n1+n2;
// }
// let x = Number(prompt("Digite o primeiro valor"));
// let y = Number(prompt("Digite o segundo valor"));
// let valor = somar(x,y);
// console.log("A soma dos valores é:",valor);
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// function multiplicar(n1,n2){
//     return n1*n2;
// }
// let num1 = Number(prompt("Digite o primeiro valor"));
// let num2 = Number(prompt("Digite o segundo valor"));
// let resul = multiplicar(num1,num2);
// console.log("O resultado da multiplicação é:",resul);
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Arrow function
// let saudacao = () => console.log("Boa noite!");
// saudacao();

// //  Arrow function com parâmetros
// let somar = (n1,n2) => {
//     return n1+n2;
// }
// let resultado =  somar(6,5);
// document.write(resultado);

// 1- Crie uma função que mostre as tabuadas de 2 ao 10
// o resultado deve ser mostrado como o exemplo: 2 x 2 = 4;
//
// function multi(n1,n2){
//     return n1*n2;
// }
// for(let i=2;i<11;i++){
//     if(i>2){
//         document.write("<br>")
//     }
//     for(let j=1;j<11;j++){
//         let resul = multi(i,j);
//         document.write(i," x ",j," = ",resul,"<br>")
//     }
// }

// 2- Faça um pequeno programa que apresente
// o menu de opções:
//      1. Média aritmérica
//      2. Média ponderada
//      3. Sair do sistema
// Na opção 1: receber dois números e msotrar a média artmética
// Na opção 2: receber tres números e mostrar a média ponderada
// Na opção 3: Finalizar
//


function mArit(x,y){
    return (x+y)/2;
}
function mPond(){
    alert("Média ponderada: 1º valor 15%, 2º valor 25% e 3º valor 60%")
    let num3 = Number(prompt("Digite o primeiro valor da média ponderada:"));
    let num4 = Number(prompt("Digite o segundo valor da média ponderada:"));
    let num5 = Number(prompt("Digite o terceiro valor da média ponderada:"))
    let mediaPond = (num3*0.15+num4*0.25+num5*0.6);
    alert(`Média Ponderada: ${mediaPond}`)
}
let opcao = 0;
while (opcao != 3){
    opcao = Number(prompt("Digite a opção desejada: \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair do sistema"));
    switch (opcao) {
        case 1:
            let num1 = Number(prompt("Digite o primeiro valor da média artimética:"));
            let num2 = Number(prompt("Digite o segundo valor da média aritmética:"));
            let mediaAr = mArit(num1,num2);
            alert(`A média aritmética é: ${mediaAr}`);
            break;
        case 2:
            mPond();
            break;
        case 3:
            alert("Sistema encerrado!");
            break;
        default:
            alert("Opção inválida!");
            break;
    }
}



