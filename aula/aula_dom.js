const listaProfessores = [
    {
        nome:"Hudson",
        cargo:"professor",
    },
    {
        nome:"Maria",
        cargo:"professora",
    },
    {
        nome:"Amanda",
        cargo:"professora",
    },
    {
        nome:"Luciano",
        cargo:"professor",
    },
    {
        nome:"Nicholas",
        cargo:"professor",
    },
    {
        nome:"Lorena",
        cargo:"professora",
    },
    {
        nome:"Luiz",
        cargo:"professor",
    },
]

//SELECIOANDO TAG UL DO HTML
const tagUl = document.querySelector("ul")

//FUNÇÃO CRIAR UM ITEM DA LISTA
function criarItemLista(nome, cargo){

    
    
    //CRIANDO UM LI 
    const tagLi = document.createElement("li")

    //ALIMENTANDO LI COM MAIS ELEMENTOS
    tagLi.innerHTML = `
        <h2>${nome}</h2>
        <p>${cargo}</p>
        <button>X</button>
        <hr>
    `

    //PENDURANDO COMO FILHA DA LISTA NO HTML
    tagUl.appendChild(tagLi)
   
}


for(let i = 0; i< listaProfessores.length; i++){
    
    const pessoa  = listaProfessores[i]
   
    //CHAMANDO A FUNÇÃO
    criarItemLista(pessoa.nome, pessoa.cargo)
}


//REMOÇÃO 

//ADICIONANDO INTERCEPTADOR NA LISTA (CLICK)
tagUl.addEventListener("click", removerProfessor)

//FUNÇÃO PARA REMOVER
function removerProfessor(event){

    //RECUPERANDO ELEMENTO CLICADO
    const botao  = event.target
    
    //VERIFICANDO SE É UM BOTÃO
    if(botao.tagName == "BUTTON"){

        //RECUPERANDO O ELEMENTO PAI => BOTÃO
        botao.parentElement.remove()
    }
   

}
