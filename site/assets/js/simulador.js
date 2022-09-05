let btn = document.querySelector(".algo");

btn.addEventListener('click', (e) => {
    e.preventDefault();
});

function simular(e) {
    var formulario = document.querySelector('.formulario');
    formulario.classList.add('col-md-6');
    formulario.classList.remove('col-md-12');
}

function bt1() {
    

    var ax_alunos = Number(document.getElementById('alunos').value);
    var ax_so = (document.getElementById('so').value);
    var ax_func = Number(document.getElementById('func').value);
    ax_so = ax_so.toLowerCase();
if(ax_alunos == "" || ax_so == "" || ax_func == "" || ax_alunos == null || ax_so == null || ax_func == null){
 alert("Insira numeros validos")
 spanText.innerHTML = ""
 var formulario = document.querySelector('.formulario');
 formulario.classList.add('col-md-12');
 formulario.classList.remove('col-md-6');


    document.querySelector('.resultado').style.display = 'none';
} else{
    simular();

    document.querySelector('.resultado').style.display = 'block';
    if (ax_so == "linux") {
        
        if (ax_alunos < 1000) {
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(2801.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(2801.2331 * 0.80).toFixed(2)} <br> 
em meses normais é ${(2801.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(2801.2331 - (2801.2331 * 0.80)).toFixed(2)} em meses normais`
        } else if (ax_alunos < 2000 && ax_alunos >= 1000){

        } else if (ax_alunos < 3000 && ax_alunos >= 2000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(3200.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(3200.2331 * 0.80).toFixed(2)} <br> em meses normais 
é ${(3200.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(3200.2331 - (3200.2331 * 0.80)).toFixed(2)} em meses normais`

        } else if( ax_alunos < 5000 && ax_alunos >= 3000){ 
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(4000.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(4000.2331 * 0.80).toFixed(2)} <br> em meses normais 
é ${(4000.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(4000.2331 - (4000.2331 * 0.80)).toFixed(2)} em meses normais`

        } else if (ax_alunos < 7000 && ax_alunos >= 5000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`

        } else if (ax_alunos < 10000 && ax_alunos >= 7000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`


        } else if (ax_alunos < 15000 && ax_alunos >= 10000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`

        } else if (ax_alunos < 20000 && ax_alunos >= 15000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`
           

        } else if (ax_alunos < 30000 && ax_alunos >= 20000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`
            

        } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`
           

        }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`

        }else{
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)}  mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.83).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.05).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.83)).toFixed(2)} em meses normais`
          

        }
    } else if (ax_so == "windowns") {

        if (ax_alunos < 1000) {
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(2801.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(2801.2331 * 0.90).toFixed(2)} <br> em meses normais 
é ${(2801.2331 * 1.10).toFixed(2)} em meses de prova <br>
você economezaria R$:${(2801.2331 - (2801.2331 * 0.90)).toFixed(2)} em meses normais `
            
        } else if (ax_alunos < 2000 && ax_alunos >= 1000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(2900.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(2900.2331 * 0.90).toFixed(2)} <br> em meses normais 
é ${(2900.2331 * 1.10).toFixed(2)} em meses de prova <br>
você economezaria R$:${(2900.2331 - (2900.2331 * 0.90)).toFixed(2)} em meses normais `

        } else if (ax_alunos < 3000 && ax_alunos >= 2000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(3200.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(3200.2331 * 0.90).toFixed(2)} <br> em meses normais 
é ${(3200.2331 * 1.10).toFixed(2)} em meses de prova <br>
você economezaria R$:${(3200.2331 - (3200.2331 * 0.90)).toFixed(2)} em meses normais `

        } else if( ax_alunos < 5000 && ax_alunos >= 3000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(4000.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(4000.2331 * 0.90).toFixed(2)} <br> em meses normais 
é ${(4000.2331 * 1.10).toFixed(2)} em meses de prova <br>
você economezaria R$:${(4000.2331 - (4000.2331 * 0.90)).toFixed(2)} em meses normais ` 

        } else if (ax_alunos < 7000 && ax_alunos >= 5000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

        } else if (ax_alunos < 10000 && ax_alunos >= 7000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`
        } else if (ax_alunos < 15000 && ax_alunos >= 10000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`
           
        } else if (ax_alunos < 20000 && ax_alunos >= 15000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`
            
        } else if (ax_alunos < 30000 && ax_alunos >= 20000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

        } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`

        }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`           

        }else{
document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(5100.2331).toFixed(2)} mensalmente <br>
adquirindo nosso sistema você poderia gastar ${(5100.2331 * 0.91).toFixed(2)} <br> em meses normais 
é ${(5100.2331 * 1.08).toFixed(2)} em meses de prova <br>
você economezaria R$:${(5100.2331 - (5100.2331 * 0.91)).toFixed(2)} em meses normais`
 }
}  

}
}
