function alternarVisibilidadeBotao(){
    const divCaixa = document.getElementById("caixa-01");
    const alternarVisibilidadeBotao = document.getElementById("botao-alterar-visibilidade");

    if(divCaixa.style.display === "" || divCaixa.style.display === "none"){
        divCaixa.style.display = "block"
        alternarVisibilidadeBotao.innerText = "Ocultar caixa";
    }else{
        divCaixa.style.display = "none"
        alternarVisibilidadeBotao.innerText = "Apresentar caixa";
    }
}

function definirCorVermelho(){
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("caixa-azul");
    divCaixa01.classList.add("caixa-vermelha");
}

function definirCorAzul(){
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("caixa-vermelha");
    divCaixa01.classList.add("caixa-azul");
}

function redefinirCor(){
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList = [];
}

function arcoIris(){
    const cores = ["vermelha", "azul", "laranja", "amarela", "verde", "anil", "violeta"];
    const divCaixa = document.getElementById("caixa-01");
    debugger
    for(let i = 0; i < cores.length; i++){
        setTimeout(() => {
            const cor = `caixa-${cores[i]}`;
            divCaixa.classList = [cor];
        }, i * 1000);
    }
}

function apresentarCamposPessoaFisica(){
    const divCamposPf = document.getElementById("campos-pf");
    divCamposPf.classList.remove("hidden");

    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.add("hidden");
}

function apresentarCamposPessoaJuridica(){
    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.remove("hidden");

    const divCamposPf = document.getElementById("campos-pf");
    divCamposPf.classList.add("hidden");
}

const imagemDragonBall = "https://ovicio.com.br/wp-content/uploads/dragon-ball-z-vegeta-9000-238679.png";
const imagemAbsoluteCinema = "https://lazersemfronteiras.com.br/wp-content/uploads/2025/09/Absolute-cinema-o-que-e-e-por-que-esse-meme-viralizou.jpg";
const imagemSapo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqd6Yl7zik3g7UBl3_gM_OYK3IKpGL2fJeQ&s";

function alterarImagem(evento){
    if(evento.key === "Enter"){
        const imagem = document.getElementsByClassName("imagem")[0];
        const campoPesquisa = document.getElementById("campo-pesquisa");
        const pesquisa = campoPesquisa.value;
        if(pesquisa === "dragon ball"){
            imagem.style.background = `url('${imagemDragonBall}')`;
        }else if(pesquisa === "absolute cinema"){
            imagem.style.background = `url('${imagemAbsoluteCinema}')`;
        }else{
            imagem.style.background = `url('${imagemSapo}')`;
        }
    }
}