function cadastrarEmpresa(){
    //url que sera chamada no backend
    const url = "https://api.franciscosensaulas.com/api/v1/empresa"
    // request body
    const dados = {
        nome: "QUICO LTDA",
        cnpj: "99.570.252/0001-13"
    }

    // fetch é a função que permite fazer requisição do front para o back
    fetch(url, {
        method: "POST", // POST serve para cadastrar
        headers: {
            // serve para dizer a forma que sera enviado o dado
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados) // converter de objeto para string
    })
        .then(response => response.json()) // convertendo de tring para objeto
        .then(dado => {
            // aqeui e quando da certo
            alert("Empresa cadastrada");
        })
        .catch(error => {
            // aqui e quando da algum erro
            console.error("Erro: " + error);
            alert("Erro no cadastro");
        })
}

function listarEmpresas(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa"

    const textarea = document.getElementById("empresas")

    // limpar o textarea
    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(empresas => {
        for(let i = 0; i < empresas.length; i++){
            const empresa = empresas[i];
            const texto = `${empresa.id} | ${empresa.nome} | ${empresa.cnpj}\n`
            textarea.value = textarea.value + texto;
        }
    })
    .catch(error => {
        // executado qundo da erro
        console.error("Erro: " + error);
        alert("Ocorreu um erro ao tentar listar as empresas")
    })
}

function apagarEmpresa(){
    const idParaApagar = parseInt(prompt("Digite o id para apagar"));

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dados => {
        alert("Empresa apagada com sucesso");
        listarEmpresas();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Ocurreu um erro no deletamento")
    })
}

function consultarEmpresaPorId(){
    const idParaConsultar = parseInt(prompt("Digite o id para consultar"));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaConsultar;

    const textarea = document.getElementById("empresas");

    // limpar o textarea
    textarea.value = "";

    fetch(url)
    .then(response => response.json())
    .then(empresa => {
        const texto = `ID: ${empresa.id}\nNome: ${empresa.nome}\nCNPJ: ${empresa.cnpj}\n`;
        textarea.value = texto;
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("algo deu errado");
    })


}

function editarEmpresa(){
    const idParaEditar = parseInt(prompt("Digite o id para consultar"));
    const novoNome = prompt("Digite o novo nome");
    const novoCNPJ = prompt("Digite o novo CNPJ");

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaEditar;

    const dados = {
        nome: novoNome,
        cnpj: novoCNPJ
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response)
    .then(empresa => {
        alert("Empresa alterada com sucesso");
        listarEmpresas();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("algo deu errado");
    })
}