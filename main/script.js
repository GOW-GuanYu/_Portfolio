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