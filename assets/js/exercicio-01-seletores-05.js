const imagemChavooooo = "../assets/imagens/chavo.png";
const imagemQuicooooo = "../assets/imagens/quico.png";

function aplicarEstadoChaves() {
    const imagem = document.getElementsByClassName("imagem2")[0];
    const corFundo = document.getElementsByClassName("imagem")[0];
    const campoLegenda = document.getElementById("legenda");

    imagem.src = imagemChavooooo;
    corFundo.style.backgroundColor = "red";
    imagem.style.border = "4px solid red";
    imagem.style.boxShadow = "0 10px 22px red";
    campoLegenda.style.color = "red";
    campoLegenda.style.border = "3px solid red";
    campoLegenda.style.boxShadow = "0 10px 22px red";
    campoLegenda.value = `E que eu queria muitisisisisimo um sanduiche de presunto.
O Chaves ficou com aquela cara de sofrimento classica, como se esse fosse o maior problema da historia.
Resumo da cena: fome, tristeza e um nivel absurdo de vontade de comer.`;
}

function aplicarEstadoQuico() {
    const imagem = document.getElementsByClassName("imagem2")[0];
    const corFundo = document.getElementsByClassName("imagem")[0];
    const campoLegenda = document.getElementById("legenda");

    imagem.src = imagemQuicooooo;
    corFundo.style.backgroundColor = "green";
    imagem.style.border = "4px solid green";
    imagem.style.boxShadow = "0 10px 22px green";
    campoLegenda.style.color = "green";
    campoLegenda.style.border = "3px solid green";
    campoLegenda.style.boxShadow = "0 10px 22px green";
    campoLegenda.value = `PORQUE SACRIFICOU TODA A VILA!!!???
O Quico apareceu completamente indignado, fazendo escandalo e reclamando como se o mundo tivesse acabado.
Resumo da cena: drama, gritaria e energia de confusao total.`;
}

function alterarImagem() {
    const imagem = document.getElementsByClassName("imagem2")[0];

    if (imagem.src.includes("chavo.png")) {
        aplicarEstadoQuico();
    } else {
        aplicarEstadoChaves();
    }
}

aplicarEstadoChaves();
