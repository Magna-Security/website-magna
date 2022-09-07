/** @format */

let btn = document.querySelector(".algo");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

function bt1() {
  let mensalPositivo = document.querySelector(".gasto-mensal-positivo");
  let mensalNegativo = document.querySelector(".gasto-mensal-negativo");

  let provaPositivo = document.querySelector(".gasto-prova-positivo");
  let provaNegativo = document.querySelector(".gasto-prova-negativo");

  var ax_alunos = Number(document.getElementById("alunos").value);
  var ax_so = document.getElementById("so").value;
  var ax_func = Number(document.getElementById("func").value);
  ax_so = ax_so.toLowerCase();
  if (
    ax_alunos == "" ||
    ax_so == "" ||
    ax_func == "" ||
    ax_alunos == null ||
    ax_so == null ||
    ax_func == null
  ) {
    alert("Insira numeros validos");
    //  resultSimulador.innerHTML = ""
  } else {
    let gastoMensal = 2801.33;
    let gastoMensalDesconto = gastoMensal * 0.5;
    let gastoProva = gastoMensal * 1.1;
    let gastoProvaDesconto = gastoMensal * 0.8;

    mensalNegativo.innerHTML = gastoMensal;
    mensalPositivo.innerHTML = gastoMensalDesconto;
    provaNegativo.innerHTML = gastoProva;
    provaPositivo.innerHTML = gastoProvaDesconto;
  }
}
// } else{

//     if (ax_so == "linux") {

//         if (ax_alunos < 1000) {
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(2801.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(2801.2331 * 0.80).toFixed(2)} <br>
// em meses normais é ${(2801.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(2801.2331 - (2801.2331 * 0.80)).toFixed(2)} em meses normais`
//         } else if (ax_alunos < 2000 && ax_alunos >= 1000){
//             document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(2900.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(2900.2331 * 0.80).toFixed(2)} <br> em meses normais
// é ${(2900.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(2900.2331 - (2900.2331 * 0.80)).toFixed(2)} em meses normais `

//         } else if (ax_alunos < 3000 && ax_alunos >= 2000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(3200.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(3200.2331 * 0.80).toFixed(2)} <br> em meses normais
// é ${(3200.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(3200.2331 - (3200.2331 * 0.80)).toFixed(2)} em meses normais`

//         } else if( ax_alunos < 5000 && ax_alunos >= 3000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(4000.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(4000.2331 * 0.80).toFixed(2)} <br> em meses normais
// é ${(4000.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(4000.2331 - (4000.2331 * 0.80)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 7000 && ax_alunos >= 5000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 10000 && ax_alunos >= 7000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(6500.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(6500.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(6500.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(6500.2331 - (6500.2331 * 0.83)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 15000 && ax_alunos >= 10000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(8500.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(8500.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(8500.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(8500.2331 - (8500.2331 * 0.83)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 20000 && ax_alunos >= 15000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(11300.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(11300.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(11300.2331 * 1.03).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(11300.2331 - (11300.2331 * 0.83)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 30000 && ax_alunos >= 20000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(15300.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(15300.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(15300.2331 * 1.02).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(15300.2331 - (15300.2331 * 0.83)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(20300.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(20300.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(20300.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(20300.2331- (20300.2331 * 0.83)).toFixed(2)} em meses normais`

//         }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(26300.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(26300.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(26300.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(26300.2331 - (26300.2331 * 0.83)).toFixed(2)} em meses normais`

//         }else{
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(35300.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(35300.2331 * 0.83).toFixed(2)} <br> em meses normais
// é ${(35300.2331 * 1.05).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(35300.2331 - (35300.2331 * 0.83)).toFixed(2)} em meses normais`
//         }
//     } else if (ax_so == "windowns") {

//         if (ax_alunos < 1000) {
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(2801.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(2801.2331 * 0.80).toFixed(2)} <br> em meses normais
// é ${(2801.2331 * 1.07).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(2801.2331 - (2801.2331 * 0.80)).toFixed(2)} em meses normais `

//         } else if (ax_alunos < 2000 && ax_alunos >= 1000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(2900.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(2900.2331 * 0.80).toFixed(2)} <br> em meses normais
// é ${(2900.2331 * 1.07).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(2900.2331 - (2900.2331 * 0.80)).toFixed(2)} em meses normais `

//         } else if (ax_alunos < 3000 && ax_alunos >= 2000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(3200.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(3200.2331 * 0.90).toFixed(2)} <br> em meses normais
// é ${(3200.2331 * 1.10).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(3200.2331 - (3200.2331 * 0.80)).toFixed(2)} em meses normais `

//         } else if( ax_alunos < 5000 && ax_alunos >= 3000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(4000.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(4000.2331 * 0.90).toFixed(2)} <br> em meses normais
// é ${(4000.2331 * 1.10).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(4000.2331 - (4000.2331 * 0.90)).toFixed(2)} em meses normais `

//         } else if (ax_alunos < 7000 && ax_alunos >= 5000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 10000 && ax_alunos >= 7000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`
//         } else if (ax_alunos < 15000 && ax_alunos >= 10000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 20000 && ax_alunos >= 15000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 30000 && ax_alunos >= 20000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

//         } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

//         }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

//         }else{
// document.getElementById('resultSimulador').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
// adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais
// é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
// você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais `
//  }
// }

// }
// }
