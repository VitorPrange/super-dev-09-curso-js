function cadastrarTransporte() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes"

    const veiculo= prompt("Digite o tipo do veiculo");
    const motorista= prompt("Digite o nome do motorista");
    const carga= prompt("Digite o tipo de carga");
    const pesoCarga= prompt("Digite o peso da carga");
    const destino= prompt("Digite o destino");
    const tempoEstimadoHoras= parseInt(prompt("Digite duração estimada da entrega em horas"));

    const dados = {
        veiculo: veiculo,
        motorista: motorista,
        carga: carga,
        pesoCarga: pesoCarga,
        destino: destino,
        tempoEstimadoHoras: tempoEstimadoHoras
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
        alert("Tranporte cadastrado com sucesso");
    })
    .catch(error => {
        alert("Algo deu errado");
    })
    listarTransportes()
}

function listarTransportes() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes"

    const textarea = document.getElementById("transportes");

    textarea.value = ""

    fetch(url)
    .then(response => response.json())
    .then(dados => {
        for(let i = 0; i < dados.length; i++){
            const dado = dados[i];
            debugger

            const texto = `ID: ${dado.id} | Veiculo: ${dado.veiculo} | Motorista: ${dado.motorista} | Carga: ${dado.carga} | Peso da carga: ${dado.pesoCarga} | Destino: ${dado.destino} | Tempo estimado em horas: ${dado.tempoEstimadoHoras}\n`

            textarea.value = textarea.value + texto;
        }
    })
    .catch(error => {
        alert("Erro");
    })
}

function consultarTransportePorId() {
    const idConsulta = parseInt(prompt("Digite o ID para consulta"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes/" + idConsulta;

    const textarea = document.getElementById("transportes");

    fetch(url)
    .then(response => response.json())
    .then(dado => {
        const texto = `ID: ${dado.id} | Veiculo: ${dado.veiculo} | Motorista: ${dado.motorista} | Carga: ${dado.carga} | Peso da carga: ${dado.pesoCarga} | Destino: ${dado.destino} | Tempo estimado em horas: ${dado.tempoEstimadoHoras}\n`


        textarea.value = ""
        textarea.value = texto;
    })
    .catch(error => {
        alert("Erro ao consultar")
    })
}

function editarTransporte() {
    const idParaEditar = parseInt(prompt("Digite o id para editar"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes/" + idParaEditar;

    const veiculo= prompt("Digite o tipo do veiculo");
    const motorista= prompt("Digite o nome do motorista");
    const carga= prompt("Digite o tipo de carga");
    const pesoCarga= prompt("Digite o peso da carga");
    const destino= prompt("Digite o destino");
    const tempoEstimadoHoras= parseInt(prompt("Digite duração estimada da entrega em horas"));

    const dados = {
        veiculo: veiculo,
        motorista: motorista,
        carga: carga,
        pesoCarga: pesoCarga,
        destino: destino,
        tempoEstimadoHoras: tempoEstimadoHoras
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
        alert("Tranporte alterado alterado")
        listarTransportes();
    })
    .catch(error => {
        console.log("Erro: " + error);
        alert("Erro");
    })
}

function apagarTransporte() {
    const idParaApagar = parseInt(prompt("Digite o id para apagar"));

    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes/" + idParaApagar;

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
        listarTransportes();
    })
    .catch(error => {
        alert("erro")
    })
}
