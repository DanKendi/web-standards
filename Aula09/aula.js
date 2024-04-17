//alert("External Archive");
console.log("Meu Log");

document.write("Nova pagina");

//Declarando variáveis

let nome; //Variável local
var doc; //Variável global
const PI = 3.141597; //Constate


//Template Strings

document.write("<br>");

let x = "Bom";
let y = "dia";
let z = `${x} ${y}`;

let texto = `Aqui podemos
                    ter várias
                    linhas`;
document.write(z + "<br>");
document.write(texto);
console.log(z);
console.log(texto);

let valor = prompt("Digite seu Nome:");
document.write("<p>", valor, "</p>");