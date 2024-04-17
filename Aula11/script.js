/*
//estrutura for
console.log("For")
for(let i=0; i <= 10; i++){
    console.log(i);
}

//estrutura while
console.log("While")
let x = 0;
while(x != 10){
    console.log(x);
    x++;
}

//estruture do-while
console.log("Do-While")
let j = 0;

do{
    console.log(j);
    j++;
}while(j!=10)

//funções
console.log("Função")
function somar(){
    let n1 = 5, n2 = 8;
    console.log(n1+n2);
}
somar();

//função com parâmetros
console.log("Função com parâmetro")
function multiplicacao(a,b){
    console.log(a*b);
}
multiplicacao(3,4);
*/

//ler um número inteiro, em seguida calcular e
//mostrar o dobro deste número


// function lerNum(){
//     return parseInt(prompt("Digite um número: "));
// }
// let num = lerNum();

// function exibir(num){
//     console.log(num*2);
// }
// exibir(num);


/* 1 - Utilizando funções crie um script que leia três números
inteiros e mostre a média aritmética dos mesmos.
 */


// function lerNum(){
//     return parseInt(prompt("Digite um número: "));
// }
// let num1 = lerNum();
// let num2 = lerNum();
// let num3 = lerNum();

// function print(num1,num2,num3){
//     console.log(num1*num2*num3);
// }
// print(num1,num2,num3);

/* 2 - Utilizando funções crie um script calcule e mostre a
área de um triângulo (a = (b*h)/2)
*/
// function lerBase(){
//     return parseInt(prompt("Digite o valor da Base do triângulo: "));
// }
// let base = lerBase();

// function lerAltura(){
//     return parseInt(prompt("Digite o valor da altura do triângulo: "));
// }
// let altura = lerAltura();

// let area = (base*altura)/2;

// function print(area){
//     console.log(area);
// }
// print(area);

/* 3 - Utilizando funções crie um script que leia o nome
de uma pessoa e o ano de nascimento, calcule e mostre
o nome e a idade em linhas separadas;
*/

// function lerAno(){
//     let nome = String(prompt("Digite seu nome: "));

//     let anoNasc = parseInt(prompt("Informe o ano de nascimento: "));

//     let dataAtual = new Date().getFullYear();
//     console.log("Nome: ",nome);
//     console.log("Idade: ", (dataAtual - anoNasc), " anos.");
// }
// lerAno();

/* 4 - Utilizando funções crie um script que atenda:
Uma loja utiliza o código 'V' para compras a vista e 
'P' a prazo. Calcule e mostre:
 - o valor das compras a Vista 
 - o valor das compras a Prazo
 - O total das vendas 
*/
let comprasP = 0;
let comprasV = 0;
let totalVendas = 0; 
let opcaoVenda = "";
let qtdCompras = parseInt(prompt("Informe a quantidade de compras: "))
function dadosCompras(){
    for(let i = 0; i < qtdCompras; i++){
        texto = "Informe o valor da compra: ", (i+1);
        let valorVenda = parseFloat(prompt(text));
        opcaoVenda = "";
        opcaoVenda = String(prompt("Digite V para compras a vista e P para compras a prazo: "));
        if (opcaoVenda == "V" ){
            comprasV += valorVenda;
            totalVendas += valorVenda;
        }else if(opcaoVenda == "P"){
            comprasP += valorVenda;
            totalVendas += valorVenda;
        }else{
            prompt("Opção Inválida!");
            i--;
        }   
    }
    console.log("O valor das compras à vista: R$ ", comprasV);
    console.log("O valor das compras parceladas: R$ ", comprasP);
    console.log("O valor total das vendas foi de: R$ ", totalVendas);
}
dadosCompras();
//5 - Utilizando funções crie um script que calcule e mostre a quantidade de números entre 30 e 90.