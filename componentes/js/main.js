function escreveTexto(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 230 * i)
    })
}
const titulo = document.querySelector('h1')
escreveTexto(titulo)

window.onhashchange = function(e) {
    const oldURL = e.oldURL.split('#')[0]
    const newURL = e.newURL.split('#')[0]
    console.log(oldURL, newURL)
    const oldLink = document.querySelector(`.container-menu a[href='#${oldURL}']`)
    const newLink = document.querySelector(`.container-menu a[href='#${newURL}']`)
    oldLink && oldLink.classList.remove('selected')
    newLink && newLink.classList.add('selected')
}