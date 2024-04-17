function escrever(){
    let texto = document.getElementById("para1");
    if (texto !== null){
        document.getElementById("para2").innerHTML = 
        "O texto do 1 parágrafo é: " + texto.innerHTML;
    }else {
        console.error("O elemento id não foi encontrado");
    }
}
function apagar(){
    document.getElementById("para2").innerHTML = "";
}


// console.log(texto);

// let texto2 = document.getElementById("para2");
// console.log(texto2);

// let texto3 = document.getElementsByTagName("p");
// console.log(texto3);

// let texto4 = document.getElementsByClassName("intro");
// console.log(texto4);

// let texto5 = document.querySelectorAll("p.intro");
// console.log(texto5);

// let novo = "Novo texto inserido por uma variável";
// document.getElementById("para3").innerHTML= novo;

        
        
