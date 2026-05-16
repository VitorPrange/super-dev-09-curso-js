function apresentarCamposPessoal(){
    const divPessoal = document.getElementById("pessoal");
    const divComercial = document.getElementById("comercial");

    divPessoal.classList.remove("hidden-pessoal");

    divComercial.classList.add("hidden-comercial");
}

function apresentarCamposComercial(){
    const divPessoal = document.getElementById("pessoal");
    const divComercial = document.getElementById("comercial");

    divPessoal.classList.add("hidden-pessoal");

    divComercial.classList.remove("hidden-comercial");
}