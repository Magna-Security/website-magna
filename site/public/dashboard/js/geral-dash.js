/** @format */
let cadastro = document.querySelector(".cadastro-usuario");
let arrayLinhas = Array.from(document.querySelectorAll(".linhaArray"));

if (sessionStorage.getItem("cargo") == "suporte") {
  cadastro.classList.add("invisivel");
  arrayLinhas[1].classList.add("invisivel");
  arrayLinhas[2].classList.add("invisivel");
}

if (sessionStorage.getItem("cargo") == "tecnico") {
  arrayLinhas[0].classList.add("invisivel");
  arrayLinhas[2].classList.add("invisivel");
  // arrayLinhas[0].classList.add("invisivel");
  // arrayLinhas[1].classList.add("invisivel");
}

if (sessionStorage.getItem("cargo") == "gerente") {
  arrayLinhas[0].classList.add("invisivel");
  arrayLinhas[1].classList.add("invisivel");
}
