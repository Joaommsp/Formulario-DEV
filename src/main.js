let titulo = document.querySelector('#titulo_site')
let texto = titulo.innerHTML
let index = 0

const escrever = () => {
  titulo.innerHTML = titulo.innerHTML.replace('|', '')
  if (texto.length > index) {
    if (index == 0) {
      titulo.innerHTML = texto.charAt(index)
    } else {
      titulo.innerHTML += texto.charAt(index)
    }
    titulo.innerHTML += '|'
    index++
    setTimeout(escrever, 50)
  }
}

escrever()
