
function captarDados(){
    let btn = document.getElementsByClassName("modal--Footer")[0]
    btn.addEventListener("click",(evt)=>{
        console.log(btn)
    evt.preventDefault()
        let nome = document.getElementById("nome")
        console.log(nome)
    })

}

function mudarCorBotão(){
   let conteinerCategoria = document.getElementById("categorias")

    conteinerCategoria.addEventListener("click",(event)=>{
        let categorias = conteinerCategoria.querySelectorAll("li")
    
        let itemclicado = event.target
       
        if(itemclicado.id != "categorias"){
            categorias.forEach((itemLi)=>{
                itemLi.classList.remove("btn--ativo")
            })
            itemclicado.classList.add("btn--ativo")
            return itemclicado.innerText
        }
    })


   




}

mudarCorBotão()
captarDados()
