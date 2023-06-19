    function ativatyping(elemento){
        const arrTexto = elemento.innerHTML.split('')
        elemento.innerHTML = ''
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra
            }, 75 * i)
        })
    }

    const titulo = document.querySelector('.typing')
    ativatyping(titulo)

//adicionando "animação" menu

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao')

ativaMenu.addEventListener('click', ()=>{

    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')

})