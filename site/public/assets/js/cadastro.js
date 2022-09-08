// DADOS DA EMPRESA
var nomeEmpresa;
var telefoneEmpresa;
var cnpjEmpresa;

// DADOS DO USUÁRIO
var nomeUsuario;
var emailUsuario;
var senhaUsuario;

// VALIDAÇÕES
var nomeValido = false;
var telValido = false;
var cnpjValido = false;

var nomeUsuarioValido = false;
var emailValido = false;
var senhaValido = false;

let caracEspecial = ["(", ")", "*", "&", "%", "$", "#", "@", "!", ";", "-", "_"];


function cadastrarEmpresa(nomeVar, telefoneVar, cnpjVar) {

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            telefoneServer: telefoneVar,
            cnpjServer: cnpjVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

            // window.location = "login.html";
        } else {
            window.alert("Houve um erro ao tentar realizar o cadastro!")
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function cadastrarManager(nomeVar, emailVar, senhaVar) {

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarManager", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeUsuarioServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Redirecionando para a tela pós login...");

            // window.location = "login.html";
        } else {
            window.alert("Houve um erro ao tentar realizar o cadastro!")
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

// ================= VALIDAÇÕES EMPRESA =================

function verificarNomeEmpresa() {
    tempNomeEmpresa = inputEmpresa.value;
    nomeValido = false;

    if (tempNomeEmpresa.length >= 1) {
        nomeValido = true;
        document.getElementById("spanNomeEmpresa").innerHTML = "";
    } else {
        nomeValido = false;
        document.getElementById("spanNomeEmpresa").innerHTML = "Insira um nome válido."
    }
}

function verificarTelEmpresa() {
    tempTelefoneEmpresa = inputTelefone.value;
    telValido = false;
    
    if (tempTelefoneEmpresa.length >= 11) {
        telValido = true;
        document.getElementById("spanTelefoneEmpresa").innerHTML = "";
    } else {

        if (tempTelefoneEmpresa.length == 0) {
            document.getElementById("spanTelefoneEmpresa").innerHTML = "";
        } else {
            telValido = false;
            document.getElementById("spanTelefoneEmpresa").innerHTML = "Insira um número de telefone válido.";
        }

    }
}

function verificarCnpjEmpresa() {
    tempCnpjEmpresa = inputCnpj.value;
    
    cnpjValido = false;
    
    if (tempCnpjEmpresa.length >= 14) {
        cnpjValido = true;
        document.getElementById("spanCnpjEmpresa").innerHTML = "";
    } else {
        cnpjValido = false;
        document.getElementById("spanCnpjEmpresa").innerHTML = "Insira um CNPJ inválido.";
    }
}

// ================= VALIDAÇÕES MANAGER =================

function verificarNomeManager() {
    tempNomeUsuario = inputUsuario.value;
    nomeUsuarioValido = false;

    if (tempNomeUsuario.length >= 1) {
        nomeUsuarioValido = true;
        document.getElementById("spanUsuario").innerHTML = "";
    } else {
        document.getElementById("spanUsuario").innerHTML = "Insira um nome de usuário válido.";
    }
}

function verificarEmailManager() {
    tempEmailUsuario = inputEmail.value;
    emailValido = false;
    
    if (tempEmailUsuario.length >= 1) {
    
        if (tempEmailUsuario.indexOf('@') <= -1 || tempEmailUsuario.indexOf(".com") <= -1) {
            document.getElementById("spanEmail").innerHTML = "Insira um e-mail válido.";
        } else {
            emailValido = true;
            document.getElementById("spanEmail").innerHTML = "";
        }
        
    } else {
        document.getElementById("spanEmail").innerHTML = "Insira um e-mail válido.";
    }
}


function armazenarValoresManager() {

    console.log(nomeUsuario);
    console.log(emailUsuario);
    console.log(senhaUsuario);

    if (nomeUsuarioValido && emailValido && senhaValido) {
        nomeUsuario = inputUsuario.value;
        emailUsuario = inputEmail.value;
        senhaUsuario = inputSenha.value;
 
        // window.location.href = "index.html";

        cadastrarManager(nomeUsuario, emailUsuario, senhaUsuario);
    } else {
        alert("Há campos preenchidos incorretamente.")
        verificarCamposUsuario();
    }
}

function armazenarValoresEmpresa() {

    if (nomeValido && telValido && cnpjValido) {
        nomeEmpresa = inputEmpresa.value;
        telefoneEmpresa = inputTelefone.value;
        cnpjEmpresa = inputCnpj.value;

        window.location.href = "cadastro-manager.html";

        cadastrarEmpresa(nomeEmpresa, telefoneEmpresa, cnpjEmpresa);
    } else {
        alert("Há campos preenchidos incorretamente.")
        verificarCamposEmpresa();
    }
}

function validarSenha() {

    var senha = inputSenha.value;

    if (senha.length == 0) {
        document.getElementById("spanSenha").innerHTML = "";
        senhaValido = false;
    } else if (senha.length > 0 && senha.length <= 4) {
        document.getElementById("spanSenha").innerHTML = "Senha fraca.";
        senhaValido = false;
    } else if (senha.length > 4 && senha.length <= 8) {
        document.getElementById("spanSenha").innerHTML = "Senha média.";
        senhaValido = true;
    } else {
    
        let contemSpecial = false;
    
        for (let i = 0; i <= 9; i++) {
            if (senha.indexOf(i) > -1) {
    
                caracEspecial.forEach(special => {
                    if (senha.indexOf(special) != -1) {
                        spanSenha.innerHTML = "Senha muito forte.";
                        contemSpecial = true;
                        senhaValido = true;
                    }
                });
    
                if (contemSpecial == false) {
                    spanSenha.innerHTML = "Senha forte."
                    senhaValido = true;
                }
            } 
        }  
    }  
}