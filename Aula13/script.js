// 1- Crie uma função JavaScript que receba duas notas, calcule e mostre no "Document" a 
// média aritmética e mensagem que está na tabela a seguir:
// 0 a 4 - Reprovado
// 4 a 7 -  Exame
// 7 a 10 - Aprovado


/* function media(n1,n2){
    let media = (nota1+nota2)/2;
    if(media >= 7){
        document.write("Média: ", media," - Situação: Aprovado")
   }else if(media >= 4){
    document.write("Média: ", media," - Situação: Exame")
   }else{
    document.write("Média: ", media," - Situação: Reprovado")
   }
   
}
media(9,7); */

// 2- Crie uma função JavaScript que receba o preço de um produto, calcule e mostre no console
// o novo preço, sabendo-se que este sofreu um desconto de 10%.


/* function desconto(preco){
    let desconto = preco*0.9;
    console.log("O novo valor do produto é: ",desconto)
}
desconto(75); */

// 3 - Crie uma função JavaScript que calcule e mostre no "Document" a área de um quadrado. 
// Sabe-se que: A = lado * lado

/* function area(lado){
    let area = lado*lado;
    document.write("Área do quadrado é: ",area)
}
area(4); */

// 4 - Uma empresa decide dar um aumento de 30% aos funcionários com salários inferiores
// a R$ 500,00. Crie uma função JavaScript que receba o salário do funcionário e 
// mostre no "Document" o valor do salário reajustado ou uma mensagem, caso o funcionário não 
// tenha direito ao aumento.

/* function novoSalario(salario){
    if (salario < 500){
        let novoSalario = salario*1.3;
        document.write("O salário reajustado é: ",novoSalario)
    }else{
        document.write("O funcionário não tem direito a aumento.")
    }
}
novoSalario(490); */

// 5 - Crie uma função JavaScript que receba o ano de nascimento de uma pessoa 
// calcule e mostre no Console:
// 	- a idade em anos;
// 	- a idade em meses
// 	- a idade em dias

/* let idade = (anoNasc) => {
    let dataAtual = new Date().getFullYear();

    let idadeAnos = dataAtual - anoNasc;
    let idadeMeses = (dataAtual - anoNasc)*12;
    let idadeDias = (dataAtual - anoNasc)*365;

    console.log("Idade da pessoa em anos: ",idadeAnos);
    console.log("Idade da pessoa em meses: ",idadeMeses);
    console.log("Idade da pessoa em dias: ",idadeDias);

}

idade(1999); */

// 6 - Crie uma função JavaScript que receba o peso de uma pessoa, calcule e mostre no console:
// a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
// b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado.

let novoPeso = (peso) =>{
    console.log("O novo peso caso a pessoa engorde 15% é: ",(peso*1.15), "Kgs");
    console.log("O novo peso caso a pessoa emgreça 20% é:", (peso*0.8), "Kgs")
}
novoPeso(72);