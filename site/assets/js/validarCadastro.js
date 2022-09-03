let caracEspecial = ["(", ")", "*", "&", "%", "$", "#", "@", "!", ";", "-", "_"];


function validarSenha() {

    let senha = inputSenha.value;


    if (senha.length == 0) {
        spanSenha.innerHTML = "";
    } else if (senha.length > 0 && senha.length <= 4) {
        spanSenha.innerHTML = "Senha fraca.";
    } else if (senha.length > 4 && senha.length <= 8) {
        spanSenha.innerHTML = "Senha média.";
    } else {
    
        let contemSpecial = false;
    
        for (let i = 0; i <= 9; i++) {
            if (senha.indexOf(i) > -1) {
    
                caracEspecial.forEach(special => {
                    if (senha.indexOf(special) != -1) {
                        spanSenha.innerHTML = "Senha muito forte.";
                        contemSpecial = true;
                    }
                });
    
                if (contemSpecial == false) {
                    spanSenha.innerHTML = "Senha forte."
                }
            } 
        }  
    }  
}

function validarUsuario() {
    let nomeUsuario = inputUsuario.value;
    
    if (nomeUsuario.length < 1) {
        spanUsuario.indexHTML = "Nome de usuário inválido";
    } else {

        for (let i = 0; i <= 9; i++) {
            if (nomeUsuario.indexOf(i) != -1) {
                spanUsuario.indexHTML = "Não são permitidos números.";
            }

            caracEspecial.forEach(special => {
                if (nomeUsuario.indexOf(special) != -1) {
                    spanUsuario.indexHTML = "Não são permitidos caracteres especiais."
                }
            });
        }

        
    }
}

function validarEmail() {
    let email = inputEmail.value;
    spanEmail.indexHTML = "";

    
}
