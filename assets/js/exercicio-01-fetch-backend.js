function cadastrarProduto(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos"

    const nomeProduto = prompt("Digite o nome do produto");
    const precoProduto = parseFloat(prompt("Digite o preco do produto"));
    const categoriaProduto = prompt("Digite a categoria do produto");

    const dados = {
        nome: `Prange, ${nomeProduto}`,
        preco: precoProduto,
        categoria: `Categoria: ${categoriaProduto}`
    }

    fetch(url,  {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dados => {
        alert("Produto cadastrado")
        listarProdutos();
    })
    .catch(error => {
        console.log("Erro: " + error);
        alert("Erro");
    })
}

function listarProdutos(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos"

    const textarea = document.getElementById("produtos");

    textarea.value = ""

    fetch(url)
    .then(response => response.json())
    .then(produtos => {
        for(let i = 0; i < produtos.length; i++){
            const produto = produtos[i];

            const texto = `ID do produto: ${produto.id} | Nome do produto: ${produto.nome} | Preço do produto: ${produto.preco} | Categoria: ${produto.categoria}\n`

            textarea.value = textarea.value + texto;
        }
    })
    .catch(error => {
        alert("Erro");
    })
}

function consultarProdutoPorId(){
    const idConsulta = parseInt(prompt("Digite o ID para consulta"));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idConsulta;

    const textarea = document.getElementById("produtos");

    fetch(url)
    .then(response => response.json())
    .then(produto => {
        const texto = `ID do produto: ${produto.id} | Nome do produto: ${produto.nome} | Preço do produto: ${produto.preco} | Categoria: ${produto.categoria}\n`

        textarea.value = ""
        textarea.value = texto;
    })
    .catch(error => {
        alert("Erro ao consultar")
    })
}

function editarProduto(){
    const idParaEditar = parseInt(prompt("Digite o id para editar"));

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaEditar;

    const nomeProduto = prompt("Digite o novo nome do produto");
    const precoProduto = parseFloat(prompt("Digite o novo preco do produto"));
    const categoriaProduto = prompt("Digite a nova categoria do produto");

    const dados = {
        nome: `Prange, ${nomeProduto}`,
        preco: precoProduto,
        categoria: `Categoria: ${categoriaProduto}`
    }

    fetch(url,  {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if(response.ok === false){
            throw new Error("Erro na requisição: " + response.status);
        }

        return response.text();
    })
    .then(dados => {
        alert("Produto alterado")
        listarProdutos();
    })
    .catch(error => {
        console.log("Erro: " + error);
        alert("Erro");
    })
}

function apagarProduto(){
    const idParaApagar = parseInt(prompt("Digite o id para apagar"));

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dados => {
        alert("Produto apagado")
        listarProdutos();
    })
    .catch(error => {
        alert("erro")
    })
}