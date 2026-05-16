function trocarCorVermelho(){
    const divCaixa = document.getElementById("caixa-sub5");
    const textArea = document.getElementById("nome-produto");
    divCaixa.classList.add("botao-vermelho");
    divCaixa.classList.remove("botao-verde", "botao-azul");

    textArea.classList.add("botao-vermelho");
    textArea.classList.remove("botao-verde", "botao-azul");
}

function trocarCorVerde(){
    const divCaixa = document.getElementById("caixa-sub5");
    const textArea = document.getElementById("nome-produto");
    divCaixa.classList.add("botao-verde");
    divCaixa.classList.remove("botao-vermelho", "botao-azul");

    textArea.classList.add("botao-verde");
    textArea.classList.remove("botao-vermelho", "botao-azul");

    
}

function trocarCorAzul(){
    const divCaixa = document.getElementById("caixa-sub5");
    const textArea = document.getElementById("nome-produto");
    divCaixa.classList.add("botao-azul");
    divCaixa.classList.remove("botao-vermelho", "botao-verde");

    textArea.classList.add("botao-azul");
    textArea.classList.remove("botao-vermelho", "botao-verde");
}

function redefinirCor(){
    const divCaixa = document.getElementById("caixa-sub5");
    const textArea = document.getElementById("nome-produto");
    divCaixa.classList = [];
    textArea.classList = [];
}

function aumentarTamanhoDaCaixa(){
    const divCaixa = document.getElementById("caixa-sub5");
    divCaixa.classList.add("aumentar-caixa");
}