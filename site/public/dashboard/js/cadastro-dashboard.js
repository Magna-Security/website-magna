/** @format */

let cargo = document.querySelector("#sltCargo");

if (sessionStorage.getItem("cargo") == "gerente") {
  cargo[0].classList.add("invisivel");
  cargo[1].classList.add("invisivel");
}

if (sessionStorage.getItem("cargo") == "admin") {
  cargo[0].classList.add("invisivel");
}
