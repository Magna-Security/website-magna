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

    if (ax_alunos == "" || ax_so == "" || ax_func == "") {
        alert('Valores inválidos.');
    } else {

        simular();

        document.querySelector('.resultado').style.display = 'block';

        if (ax_so == "linux") {
            
            if (ax_alunos < 1000) {
                document.getElementById('spanText').innerHTML = `Você normalmente gastaria R$: ${(2801.2331).toFixed(2)}  mensalmente \n
                adquirindo nosso sistema você poderia gastar ${(2801.2331 * 0.80).toFixed(2)} em meses normais 
                é ${(2801.2331 * 1.05).toFixed(2)} em meses de prova\n
                você economezaria R$:${(  2801.2331 - (2801.2331 * 0.80) ).toFixed(2)} em meses normais  `
            } else if (ax_alunos < 2000 && ax_alunos >= 1000){
    
            } else if (ax_alunos < 3000 && ax_alunos >= 2000){
    
            } else if( ax_alunos < 5000 && ax_alunos >= 3000){ 
    
            } else if (ax_alunos < 7000 && ax_alunos >= 5000){
    
            } else if (ax_alunos < 10000 && ax_alunos >= 7000){
    
            } else if (ax_alunos < 15000 && ax_alunos >= 10000){
    
            } else if (ax_alunos < 20000 && ax_alunos >= 15000){
    
            } else if (ax_alunos < 30000 && ax_alunos >= 20000){
    
            } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
    
            }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
    
            }else{
    
            }
        } else if (ax_so == "windowns") {
    
            if (ax_alunos < 1000) {
                
            } else if (ax_alunos < 2000 && ax_alunos >= 1000){
    
            } else if (ax_alunos < 3000 && ax_alunos >= 2000){
    
            } else if( ax_alunos < 5000 && ax_alunos >= 3000){ 
    
            } else if (ax_alunos < 7000 && ax_alunos >= 5000){
    
            } else if (ax_alunos < 10000 && ax_alunos >= 7000){
    
            } else if (ax_alunos < 15000 && ax_alunos >= 10000){
    
            } else if (ax_alunos < 20000 && ax_alunos >= 15000){
    
            } else if (ax_alunos < 30000 && ax_alunos >= 20000){
    
            } else if (ax_alunos < 40000 && ax_alunos >= 30000) {
    
            }else if (ax_alunos < 50000 && ax_alunos  >= 40000){
    
            }else{
    
            }
        }
    }
    
    


}