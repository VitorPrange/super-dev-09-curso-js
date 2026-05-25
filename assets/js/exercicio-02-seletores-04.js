    
    const divPedidosJaCriada = document.getElementById("pedidos")

function adicionarPedido(){
    const divPedidos = document.createElement("div");
    divPedidos.classList.add("card-pedidos");

    const campoNomeCliente = document.getElementById("nome-cliente");
    const nomeCliente = campoNomeCliente.value;

    const campoSelect = document.getElementById("select-pizza");

    const campoQuantidade = document.getElementById("campo-quantidade");
    const quantidade = campoQuantidade.value;

   


    if(nomeCliente === ""){
        alert("Preencha o seu nome");
        return;
    }

    if(campoSelect.value === "selected"){
        alert("Escolha um sabor");
        return;
    }

    if(quantidade < 1){
        alert("Digite uma quantidade valida");
        return;
    }

    const nome = document.createElement("p");
    nome.innerHTML = nomeCliente;

    const select = document.createElement("p");
    select.innerHTML = campoSelect.value;

    const campoQuantidadePedido = document.createElement("p");
    campoQuantidadePedido.innerHTML = quantidade;

    const horaPedido = new Date();
    const horaFormatada = horaPedido.toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    });

    const campoHoraPedido = document.createElement("p");
    campoHoraPedido.innerHTML = horaFormatada;

    const checkEntregue = document.createElement("input");
    checkEntregue.type = "checkbox";
    const checkEntregueId = `check-entregue-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    checkEntregue.id = checkEntregueId;

    const labelCheckEntregue = document.createElement("label");
    labelCheckEntregue.htmlFor = checkEntregueId;
    labelCheckEntregue.textContent = "Entregue";

    checkEntregue.addEventListener("change", () => {
        if(checkEntregue.checked){
            divPedidos.classList.add("entregue");
        } else {
            divPedidos.classList.remove("entregue");
        }
    });


    divPedidos.appendChild(nome);
    divPedidos.appendChild(select);
    divPedidos.appendChild(campoQuantidadePedido);
    divPedidos.appendChild(campoHoraPedido);
    divPedidos.appendChild(checkEntregue);
    divPedidos.appendChild(labelCheckEntregue);

    divPedidosJaCriada.appendChild(divPedidos);
    
}

function checkentregue(){

}
