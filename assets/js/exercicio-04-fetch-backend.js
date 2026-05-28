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

    select.innerHTML = "";

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
        }
    })
    .catch(error => {
        alert("Erro");
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


    debugger

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
        alert("Agendamento cadastrado com sucesso");
    })
    .catch(error => {
        alert("Algo deu errado");
    })

    listarClientes();
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
            debugger

            const texto = `ID: ${dado.id} | Data de agendamento: ${dado.dataAgendamento} | Descrição: ${dado.descricao} | Cliente: ${dado.cliente.nome}\n`

            textarea.value = textarea.value + texto;
        }
    })
    .catch(error => {
        alert("Erro");
    })
}

listarClientes();