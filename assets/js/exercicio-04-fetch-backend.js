function cadastrarCliente(){
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes"

    const nome= prompt("Digite o nome do cliente");
    const telefone= parseInt(prompt("Digite o telefone"));

    const dados = {
        nome: nome,
        telefone: telefone
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
        listarClientes();
        alert("cliente cadastrado com sucesso");
    })
    .catch(error => {
        alert("Algo deu errado");
    })

    listarClientes();
}

function listarClientes(){
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes"

    const select = document.getElementById("clientes");
    const textarea = document.getElementById("clientesTexto");

    select.innerHTML = "";
    textarea.value = "";

    const criarOptionBase = document.createElement("option")

    criarOptionBase.value = "selected";
    criarOptionBase.innerText = "Selecione um cliente";

    criarOptionBase.disabled = true;
    criarOptionBase.selected = true;

    select.appendChild(criarOptionBase);

    fetch(url)
    .then(response => response.json())
    .then(dados => {

        
        
        for(let i = 0; i < dados.length; i++){
            const dado = dados[i];

            const criarOption = document.createElement("option")

            criarOption.value = dado.id;
            criarOption.innerText = dado.nome

            select.appendChild(criarOption);

            const texto = `ID: ${dado.id} | Nome do cliente: ${dado.nome} | Telefone: ${dado.telefone}\n`

            textarea.value = textarea.value + texto;
        }
    })
    .catch(error => {
        alert("Erro");
    })
}



function consultarClientePorId(){
    const idConsulta = parseInt(prompt("Digite o ID do cliente para consulta"));
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes/" + idConsulta;

    const textarea = document.getElementById("clientesTexto");

    fetch(url)
    .then(response => response.json())
    .then(dado => {
        const texto = `ID: ${dado.id} | Nome do cliente: ${dado.nome} | Telefone: ${dado.telefone}\n`

        textarea.value = ""
        textarea.value = texto;
    })
    .catch(error => {
        alert("Erro ao consultar")
    })
}

function editarCliente(){
    const idParaEditar = parseInt(prompt("Digite o id do cliente para editar"));
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes/" + idParaEditar;

    const nome= prompt("Digite o novo nome do cliente");
    const telefone= parseInt(prompt("Digite o novo telefone"));

    const dados = {
        nome: nome,
        telefone: telefone
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dados => {
        alert("Cliente alterado")
        listarClientes();
    })
    .catch(error => {
        alert("Erro");
    })
}

function apagarCliente(){
    const idParaApagar = parseInt(prompt("Digite o id do cliente para apagar"));

    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dados => {
        alert("Cliente apagado")
        listarClientes();
    })
    .catch(error => {
        alert("erro")
    })
}

function cadastrarAgendamento(){
    const select = document.getElementById("clientes");

    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos"

    const dataAgendamento = new Date().toISOString();
    const descricao= prompt("Digite a descrição");

    const dados = {
        dataAgendamento:  dataAgendamento,
        descricao: descricao,
        clienteId: select.value
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
        listarAgendamentos();
        alert("Agendamento cadastrado com sucesso");
    })
    .catch(error => {
        alert("Algo deu errado");
    })

    listarAgendamentos();
}

function listarAgendamentos(){
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos"

    const textarea = document.getElementById("agendamentos");

    textarea.value = ""

    fetch(url)
    .then(response => response.json())
    .then(dados => {
        for(let i = 0; i < dados.length; i++){
            const dado = dados[i];
            const texto = `ID: ${dado.id} | Data de agendamento: ${dado.dataAgendamento} | Descrição: ${dado.descricao} | Cliente: ${dado.cliente.nome} | Id do cliente: ${dado.cliente.id}\n`

            textarea.value = textarea.value + texto;
        }
    })
    .catch(error => {
        alert("Erro");
    })
}

function consultarAgendamentoPorId(){
    const idConsulta = parseInt(prompt("Digite o ID do agendamento para consulta"));
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos/" + idConsulta;

    const textarea = document.getElementById("agendamentos");

    fetch(url)
    .then(response => response.json())
    .then(dado => {
        const texto = `ID: ${dado.id} | Data de agendamento: ${dado.dataAgendamento} | Descricao: ${dado.descricao} | Cliente: ${dado.cliente.nome}\n`

        textarea.value = ""
        textarea.value = texto;
    })
    .catch(error => {
        alert("Erro ao consultar")
    })
}

function editarAgendamento(){
    const select = document.getElementById("clientes");

    const idParaEditar = parseInt(prompt("Digite o id do agendamento para editar"));
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos/" + idParaEditar;

    const dataAgendamento = new Date().toISOString();
    const descricao= prompt("Digite a nova descricao");

    const dados = {
        dataAgendamento: dataAgendamento,
        descricao: descricao,
        clienteId: select.value
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dados => {
        alert("Agendamento alterado")
        listarAgendamentos();
    })
    .catch(error => {
        alert("Erro");
    })
}

function apagarAgendamento(){
    const idParaApagar = parseInt(prompt("Digite o id do agendamento para apagar"));

    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dados => {
        alert("Agendamento apagado")
        listarAgendamentos();
    })
    .catch(error => {
        alert("erro")
    })
}

listarClientes();
