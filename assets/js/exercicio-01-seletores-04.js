const imagemChavooooo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlaS_JQN9_S8PGjSg-c-VTEELvm1lCw8JPQ&s";
const imagemQuicooooo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn5N6cL0jgndQMpHoFsgQpnNAusDFFCD8ow&s";
const imagemBRUH = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6ZhYCInBYDQ5YuNY2xiCfu-myGORe5C1ZQ&s";
const vazio = ""

function alterarImagem(){

    const imagem = document.getElementsByClassName("imagem2")[0];
    const corFundo = document.getElementsByClassName("imagem")[0];
    const campoPesquisa = document.getElementById("pesquisa");
    const pesquisa = campoPesquisa.value;

    const campoLegenda = document.getElementById("legenda");



    if(pesquisa === "chaves"){
        imagem.style.backgroundImage = `url('${imagemChavooooo}')`;
        corFundo.style.backgroundColor = "red";
        campoLegenda.value = "É que eu queria muitisisisisimo um sanduiche de presunto"
    }else if(pesquisa === "quico"){
        imagem.style.backgroundImage = `url('${imagemQuicooooo}')`;
        corFundo.style.backgroundColor = "green";
        campoLegenda.value = "PORQUE SACRIFICOU TODA A VILA!!!???"
    }else{
        imagem.style.backgroundImage = `url('${imagemBRUH}')`;
        corFundo.style.backgroundColor = "blue";
        campoLegenda.value = "reasonable crashout"
    }
}

function limpar(){
    const imagem = document.getElementsByClassName("imagem2")[0];
    const campoPesquisa = document.getElementById("pesquisa");
    const pesquisa = campoPesquisa.value;

    const campoLegenda = document.getElementById("legenda");

    imagem.style.backgroundImage = `url('${vazio}')`;

    const corFundo = document.getElementsByClassName("imagem")[0];



    campoPesquisa.value = ""

    campoLegenda.value = ""

    corFundo.style.backgroundColor = "white";
}