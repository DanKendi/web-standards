//Função para selecionar os elementos do DOM usando o seletor CSS
const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", evento =>{
    //Aguardar o comportamento padrão do mouse
    evento.preventDefault();
    //obter os calores dos campos do formulário
    const nome = $("#nome").value;
    const email = $("#email").value;
    //const login = $("#login").value;
    const senha = $("#senha").value;
    const confirmarSenha = $("#confirma-senha").value;


    //Verificar se a senha é igual a senha confirmada
    const senhaConfirmada = senha === confirmarSenha;
    //Validar a senha
    if(!senhaConfirmada){
        alert("As senhas devem ser iguais!");
        return;
    }
    //Verificar se todos os campos do form foram preenchidos
    const tudoPreenchido =
        nome.length !== 0 && 
        email.length !== 0 &&
        //login.length !== 0 &&
        senha.length !== 0 &&
        confirmarSenha.length !== 0;
    //Validar se algum campo está vazio
    if(!tudoPreenchido){
        alert("Todos os campos precisam estar preenchidos")
        return;
    }
    //Criar um objeto que representa o cadastro do usuário
    const usuarioCadastrado = {
        nome,
        email,
        //login,
        senha,
        confirmarSenha,
    };
    //Converter este objeto em um arquivo JSON
    const stringUsuario = JSON.stringify(usuarioCadastrado);

    //Armazenar os dados LocalStorage
    localStorage.setItem("usuario",stringUsuario);
    //Alerta da gravação
    alert("Usuário cadastrado com sucesso!");
    window.location.href="./login.html";
})