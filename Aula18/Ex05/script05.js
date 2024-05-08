function trocarTema(){
    var container = document.getElementById("container");

    var alterarTema = container.classList.constains("dark-mode");

    if(alterarTema){
        container.classList.remove("dark-mode");
    }else{
        container.classList.add("dark-mode");
    }
}