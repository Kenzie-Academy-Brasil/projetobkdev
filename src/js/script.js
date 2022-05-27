//SELECIONANDO A LISTA PARA ADICIONAR OS PRODUTOS
const produtosLista = document.querySelector(".produtosLista")
const listaProdutos = document.querySelector(".listaProdutos")

//0) CRIAR UM FUNÇÃO (CARDPRODUTO) => PROUTO COMO PARAMETRO
function criarcardProduto(produto){
    
    //1) TAG HTML  (LI)
    const tagLi  = document.createElement("li")

    //2) ADICIONAR UMA CLASSE NA TAG LI (cardProduto)
    tagLi.classList.add("cardProduto")
    
    //3) ALIMENTAR ESSA TAG COM OS OUTROS ELEMENTOS:
    //4) ALIMENTAR COM INFORMAÇÕES DOS PRODUTOS
    tagLi.innerHTML = `
        <img src="${produto.image}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button type="button" id="${produto.id}">Adicionar</button>
    `
    return tagLi
}

function listarProdutos(listaProdutos){

    //3) LOOP PARA RECUPERAR CADA PRODUTO
    for(let i  = 0; i<listaProdutos.length; i++){
        
        const produto = listaProdutos[i]

        //4) PASSAR PARA FUNÇÃO/PARA CRIAR O CARD DE PRODUTO
        const cardMontado = criarcardProduto(produto)
       
        //5) ADICIONAR ELEMENTO (LI) => NA TELA => COMO FILHO DA TAG UL
        produtosLista.appendChild(cardMontado)

    }

}
listarProdutos(produtos)

//CRRINHO DE COMPRAS  
let carrinho = []

//ADICIONANDO INTERCEPTADOR NA LISTA DE PRODUTOS 
produtosLista.addEventListener("click", adicionarProdutoCarrinho)
function adicionarProdutoCarrinho(event){
    
    //IDENTIFICANDO ELEMENTO CLICADO
    const botao = event.target
    
    //VERIFICANDO SE É UM BOTÃO
    if(botao.tagName == "BUTTON"){
        
        //RECUPERANDO ID => IDENTIFICADO DO PRODUTO
        const idProduto = botao.id

        //PESQUISAR SE ESSE PRODUTO É EXISTENTE => BASE
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const produtoFiltrado = produtos.find((produto)=> produto.id == idProduto)
        
        //ADICIONANDO PRODUTO NO CARRINHO
        carrinho.push(produtoFiltrado)
        
        //LISTAR NA TELA DOS PRODUTOS
        listarProdutosCarrinho()

        //FUNÇÕES QUE ATUALIZA TOTAL
        atualizarTotal()
    }
    
}

//LISTAR PRODUTOS DO CARRINHO
function listarProdutosCarrinho(){

    listaProdutos.innerHTML = ""

    //PERCORRENDO PRODUTOS DO CARRINHO
    for(let i = 0; i<carrinho.length; i++){

        //RECUPERANDO CADA PRODUTO
        const produto = carrinho[i]

        //CRIAR O TEMPLATE 
        const tagLi = document.createElement("li")
        tagLi.classList.add("cardProduto")
        
        tagLi.innerHTML = `
            <!--  NOME/FOTO PRODUTO  -->
            <div class="infoNome">
                <img src="${produto.image}" alt="${produto.nome}">
                <p>${produto.nome}</p>
            </div>
        
            <!-- PREÇO PRODUTO -->
            <div class="infoPreco">
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button>
                    <img src="./src/assets/lixo.png" alt="Lixo para remover produto">
                </button>
            </div>
        `
        listaProdutos.appendChild(tagLi)
        
    }
  
}

//ATUALIZAR TOTAL CARRINHO 
function atualizarTotal(){

    const infoPreco = document.querySelector(".infoPreco")
   
    let total = 0
    for(let i = 0; i < carrinho.length; i++){

        const produto = carrinho[i]

        total += produto.preco
    }
    infoPreco.innerText = `Total: R$ ${total.toFixed(2)}`

}

const listaProdutosCarrinho = document.querySelector(".listaProdutos")
listaProdutosCarrinho.addEventListener("click", removerProdutoCarrinho)

function removerProdutoCarrinho(event){
    const botaoExcluir  = event.target

    if(botaoExcluir.tagName == "BUTTON"){

        //REMOVENDO APENAS NO HTML
        //https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        botaoExcluir.closest("li").remove()

        //produto <= FILTRO COM O FIND 
        //posicao numerica <= carrinho.INDEXOF(produto)
        //carrinho.SPLICE(posicao, 1)
    }
}

