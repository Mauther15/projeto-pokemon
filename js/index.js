const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imagemBotaoTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    
    const modoEscuroAtivo = body.classList.contains("modo-escuro")

    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro")
        imagemBotaoTema.setAttribute("src", "./imagens/sun.png")

    } else {
        body.classList.add("modo-escuro")
        imagemBotaoTema.setAttribute("src", "./imagens/moon.png")
    }

})//Evento Dark Theme