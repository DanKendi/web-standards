function abrirJanela(){
    let opcoes = "width= 600px, height=500px";
    window.open("http://www.google.com","_blank",opcoes);
}

function mudaConteudo(){
    document.getElementById("exemplo").innerHTML="Olá mundo!";
    document.getElementById("teste1").innerHTML="Desfazer";
}

function voltarTexto(){
    document.getElementById("exemplo").innerHTML="Aprendendo capturar elementos";
    document.getElementById("teste1").innerHTML="Clique Aqui"
}

function mudaClasse(){
    let txt = document.getElementsByClassName("ex");
    for (let x = 0; x < txt.length; x++) {
        if(x==0){
            txt[0].innerHTML="Olá";
        }else{
            txt[1].innerHTML="Olá JavaScript"
        }   
    }
}

function pegaNome(){
    let texto = document.getElementByName("nome");
    let sobreNome = document.getElementByName("sobrenome");
    // form.addEventListener('click',pegaNome);
    document.getElementById("resultado").innerHTML=`Seu nome é ${nome} e seu sobrenome é ${sobreNome}`;

}