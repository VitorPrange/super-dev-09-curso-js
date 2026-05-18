const imagemChavooooo = "../assets/imagens/chavo.png";
const imagemQuicooooo = "../assets/imagens/quico.png";

function aplicarEstadoChaves() {
    const imagem = document.getElementsByClassName("imagem2")[0];
    const corFundo = document.getElementsByClassName("imagem")[0];
    const campoLegenda = document.getElementById("legenda");

    imagem.src = imagemChavooooo;
    corFundo.style.backgroundColor = "red";
    imagem.style.border = "4px solid #a32020";
    imagem.style.boxShadow = "0 10px 22px rgba(163, 32, 32, 0.45)";
    campoLegenda.style.color = "#a32020";
    campoLegenda.style.border = "3px solid #a32020";
    campoLegenda.style.boxShadow = "0 10px 22px rgba(163, 32, 32, 0.25)";
    campoLegenda.value = "E que eu queria muitisisisisimo um sanduiche de presunto.\n\nO Chaves ficou com aquela cara de sofrimento classica, como se esse fosse o maior problema da historia.\n\nResumo da cena: fome, tristeza e um nivel absurdo de vontade de comer.";
}

function aplicarEstadoQuico() {
    const imagem = document.getElementsByClassName("imagem2")[0];
    const corFundo = document.getElementsByClassName("imagem")[0];
    const campoLegenda = document.getElementById("legenda");

    imagem.src = imagemQuicooooo;
    corFundo.style.backgroundColor = "green";
    imagem.style.border = "4px solid #1f6f2d";
    imagem.style.boxShadow = "0 10px 22px rgba(31, 111, 45, 0.45)";
    campoLegenda.style.color = "#1f6f2d";
    campoLegenda.style.border = "3px solid #1f6f2d";
    campoLegenda.style.boxShadow = "0 10px 22px rgba(31, 111, 45, 0.25)";
    campoLegenda.value = "PORQUE SACRIFICOU TODA A VILA!!!???\n\nO Quico apareceu completamente indignado, fazendo escandalo e reclamando como se o mundo tivesse acabado.\n\nResumo da cena: drama, gritaria e energia de confusao total.";
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
