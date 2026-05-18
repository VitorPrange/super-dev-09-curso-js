let infoRadio = "";

function apresentarCamposPessoal(){
    infoRadio = "pessoal";
    const divPessoal = document.getElementById("pessoal");
    const divComercial = document.getElementById("comercial");
    const campoNomePessoal = document.getElementById("campo-nomeEx3");
    const nomePessoal = campoNomePessoal.value;

    const campoNomeCompleto = document.getElementById("nome-completo");

    

    divPessoal.classList.remove("hidden-pessoal");

    divComercial.classList.add("hidden-comercial");

    campoNomeCompleto.value = nomePessoal;

    const campoResumo = document.getElementById("resumo");
    const resumo = campoResumo.value;

    campoResumo.value = ""
}

function apresentarCamposComercial(){
    infoRadio = "comercial"
    const divPessoal = document.getElementById("pessoal");
    const divComercial = document.getElementById("comercial");

    divPessoal.classList.add("hidden-pessoal");

    divComercial.classList.remove("hidden-comercial");

    const campoResumo = document.getElementById("resumo");
    const resumo = campoResumo.value;

    campoResumo.value = ""
}

function validacao(){
    const radioSelecionado = document.querySelector("[name='contato']:checked");
    const campoNome = document.getElementById("campo-nomeEx3");
    const nome = campoNome.value;
    const contatoPessoal = document.getElementById("contato-pessoal");
    const contatoComercial = document.getElementById("contato-comercial");
    const divPessoal = document.getElementById("pessoal");
    const divComercial = document.getElementById("comercial");
    const campoNomeCompleto = document.getElementById("nome-completo");
    const nomeCompleto = campoNomeCompleto.value;
    const campoDataNascimento = document.getElementById("data-nascimento");
    const dataNascimento = campoDataNascimento.value;
    const campoCpf = document.getElementById("cpf");
    const cpf = campoCpf.value;
    const campoTelefone = document.getElementById("telefone");
    const telefone = campoTelefone.value;
    const campoEmail = document.getElementById("email");
    const email = campoEmail.value;
    const campoEmpresa = document.getElementById("empresa");
    const empresa = campoEmpresa.value;
    const campoCnpj = document.getElementById("cnpj");
    const cnpj = campoCnpj.value;
    const campoCargo = document.getElementById("cargo");
    const cargo = campoCargo.value;
    const campoTelefoneComercial = document.getElementById("telefone-comercial");
    const telefoneComercial = campoTelefoneComercial.value;
    const campoEmailComercial = document.getElementById("email-comercial");
    const emailComercial = campoEmailComercial.value;
    const campoResumo = document.getElementById("resumo");
    const resumo = campoResumo.value;
    
    if(nome === ""){
        alert("Digite o seu nome");
        return;
    }

    if (radioSelecionado === null) {
        alert("Selecione um contato");
        return;
    }

    if(radioSelecionado.value === "pessoal"){
        if(dataNascimento === ""){
            alert("Informe a data de nascimento");
            return;
        }
    
        if(cpf === ""){
            alert("Informe o CPF");
            return;
        }
    
        if(telefone === ""){
            alert("Informe o telefone");
            return;
        }
    
        if(email === ""){
            alert("Informe o E-mail");
            return;
        }

        campoResumo.value = `Nome: ${nome}
            Tipo de contato: Pessoal
            Nome completo: ${nomeCompleto}
            Data de nascimento: ${dataNascimento}
            CPF: ${cpf}
            Telefone: ${telefone}
            E-mail: ${email}`;
    }


    if(radioSelecionado.value === "comercial"){
        if(empresa === ""){
            alert("Informe o nome da empresa");
            return;
        }
    
        if(cnpj === ""){
            alert("Informe o CNPJ");
            return;
        }
    
        if(cargo === ""){
            alert("Informe o cargo");
            return;
        }
    
        if(telefoneComercial === ""){
            alert("Informe telefone comercial");
            return;
        }

        if(emailComercial === ""){
            alert("Informe E-mail corporativo");
            return;
        }

        campoResumo.value = `Nome: ${nome}
            Tipo de contato: Comercial
            Empresa: ${empresa}
            CNPJ: ${cnpj}
            Cargo: ${cargo}
            Telefone comercial: ${telefoneComercial}
            E-mail corporativo: ${emailComercial}`;
    }

    

}
