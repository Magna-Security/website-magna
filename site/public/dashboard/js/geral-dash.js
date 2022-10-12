let cadastro = document.querySelector(".cadastro-usuario");

if (sessionStorage.getItem("cargo") == "suporte") {
  cadastro.classList.add("invisivel");
}
