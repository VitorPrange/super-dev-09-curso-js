function cadastrarAtendimento(){
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos"

    const cliente= prompt("Digite o nome do cliente");
    const tipoAtendimento= prompt("Digite o tipo de atendimento");
    const descricao= prompt("Descrição do atendimento");
    const atendente= prompt("Digite o nome do atendente");
    const duracaoMinutos= parseInt(prompt("Digite duração da consulta em minutos"));

    const dados = {
        cliente: cliente,
        tipoAtendimento: tipoAtendimento,
        descricao: descricao,
        atendente: atendente,
        duracaoMinutos: duracaoMinutos
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dados => {
        alert("Atendimento cadastrado com sucesso");
    })
    .catch(error => {
        alert("Algo deu errado");
    })
}

function listarAtendimentos(){
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos"

    const textarea = document.getElementById("atendimentos");

    textarea.value = ""

    fetch(url)
    .then(response => response.json())
    .then(dados => {
        for(let i = 0; i < dados.length; i++){
            const dado = dados[i];

            const texto = `ID: ${dado.id} | Nome do cliente: ${dado.cliente} | Tipo de atendimento: ${dado.tipoAtendimento} | Descrição: ${dado.descricao} | Nome do atendente: ${dado.atendente} | Duração em Minutos: ${dado.duracaoMinutos}\n`

            textarea.value = textarea.value + texto;
        }
    })
    .catch(error => {
        alert("Erro");
    })
}

function consultarAtendimentoPorId(){
    const idConsulta = parseInt(prompt("Digite o ID para consulta"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + idConsulta;

    const textarea = document.getElementById("atendimentos");

    fetch(url)
    .then(response => response.json())
    .then(dado => {
        const texto = `ID: ${dado.id} | Nome do cliente: ${dado.cliente} | Tipo de atendimento: ${dado.tipoAtendimento} | Descrição: ${dado.descricao} | Nome do atendente: ${dado.nomeAtendente} | Duração em Minutos: ${dado.duracaoMinutos}\n`


        textarea.value = ""
        textarea.value = texto;
        debugger
    })
    .catch(error => {
        alert("Erro ao consultar")
    })
}

function editarAtendimento(){
    const idParaEditar = parseInt(prompt("Digite o id para editar"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + idParaEditar;

    const nomeCliente= prompt("Digite o novo nome do cliente");
    const tipoAtendimento= prompt("Digite o novo tipo de atendimento");
    const descricao= prompt("Nova descrição do atendimento");
    const nomeAtendente= prompt("Digite o novo nome do atendente");
    const duracaoMinutos= parseInt(prompt("Digite a nova duração da consulta em minutos"));

    const dados = {
        cliente: cliente,
        tipoAtendimento: tipoAtendimento,
        descricao: descricao,
        atendente: atendente,
        duracaoMinutos: duracaoMinutos
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
        alert("atendimento alterado alterado")
        listarAtendimentos();
    })
    .catch(error => {
        console.log("Erro: " + error);
        alert("Erro");
    })
}

function apagarAtendimento(){
    const idParaApagar = parseInt(prompt("Digite o id para apagar"));

    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => {
        if(response.ok === false){
            throw new Error("Erro na requisição: " + response.status);
        }

        return response.text();
    })
    .then(dados => {
        alert("Atendimento apagado")
        listarProdutos();
    })
    .catch(error => {
        alert("erro")
    })
}
