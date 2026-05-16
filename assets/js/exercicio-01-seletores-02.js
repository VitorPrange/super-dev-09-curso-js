function aplicarMudancas(){
    
    const divCaixa = document.getElementById("card");
    const select = document.getElementById("selectEx2").value;

    const campoNome = document.getElementById("campo-nomeEx2").value;
    const cardNome = document.getElementById("nome");

    debugger

    if(campoNome === ""){
        alert("Informe o fking nome");
        return;
    }

    cardNome.innerText = campoNome;

    debugger

    if(select === "vermelho"){
        divCaixa.classList.add("card-vermelho");
        divCaixa.classList.remove("card-verde", "card-azul");
    }else if(select === "verde"){
        divCaixa.classList.add("card-verde");
        divCaixa.classList.remove("card-vermelho", "card-azul");
    }else if(select === "azul"){
        divCaixa.classList.add("card-azul");
        divCaixa.classList.remove("card-verde", "card-vermelho");
    }else if(select === "selected"){
        alert("Escolhe um fking tema");
        return;
    }

    aplicarDestaque();
}

function aplicarDestaque(){
    const divCaixa = document.getElementById("card");
    const checkDestaque = document.querySelector("[name='destaque']:checked");

    if(checkDestaque !== null){
        divCaixa.classList.add("destaque")
    }else{
        divCaixa.classList.remove("destaque")
    }
}

