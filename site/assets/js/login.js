function validarLogin () {
    let email = inputEmail.value;
    let senha = inputSenha.value;
    let cadastravel = senha.length >= 5;

    if (email.indexOf('@') <= -1 || email.indexOf(".com") <= -1) {
        spanEmail.innerHTML = "E-mail inválido.";
    } else {
        spanEmail.innerHTML = "";
    }

    return cadastravel;
}