import Produtos from "./../Database/Api_Produtos.js"
import Usuario from "./../Database/Api_Usuario.js"

const logar = await Usuario.logarUsuario({
    email: "juju@email.com",
    password: "98765"
  })

async function captarDados(){
    
    let btn = document.getElementsByClassName("modal--Footer")[0]
    btn.addEventListener("click",async(evt)=>{
        
    evt.preventDefault()
        let nomep = document.getElementById("nome").value
        let descricaop = document.getElementById("descricao").value
        let categoriap = document.getElementsByClassName("btn--ativo")[0].innerText
        let precop = document.getElementById("preco").value
        let imagep = document.getElementById("image").value
    
        let produto = {
            nome: `${nomep}`,
            descricao: `${descricaop}`,
            categoria: `${categoriap}`,
            preco: `${parseInt(precop)}`,
            imagem: `${imagep}`
        }
        console.log(produto)

        let createProduto = await Produtos.criarProduto(produto)

        Criarli(createProduto)

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

function Criarli(dados){
    console.log(dados)
}
mudarCorBotão()
captarDados()




