let btn = document.querySelector(".algo");

btn.addEventListener('click', (e) => {
    e.preventDefault();
});

function simular(e) {
    var formulario = document.querySelector('.formulario');
    formulario.classList.add('col-md-6');
    formulario.classList.remove('col-md-12');
}