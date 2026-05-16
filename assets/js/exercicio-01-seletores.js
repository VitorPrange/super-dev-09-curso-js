function exercicio01CompararDoisNumeros(){
    const campoNumero1 = document.getElementById("numero1");
    const campoNumero2 = document.getElementById("numero2");

    if((campoNumero1.value === "") || (campoNumero2.value === "")){
        alert("Preencha todos os campos com numeros");
        return;
    }

    const numero1 = parseInt(campoNumero1.value);
    const numero2 = parseInt(campoNumero2.value);

    if(numero1 > numero2){
        alert("Numero 1 e maior que numero 2");
    }else if(numero2 > numero1){
        alert("Numero 2 e maior que numero 1");
    }else{
        alert("Os 2 são iguais");
    }
}

function exercicio02ClassificarIdade(){
    const campoNome = document.getElementById("nomeEx2");
    const campoIdade = document.getElementById("idadeEx2");

    if(campoIdade.value !== null){
        alert("Digite a idade corretamente");
        return;
    }
    const nome = campoNome.value;
    const idade = parseInt(campoIdade).value;

    let classificacao = "";

    if(idade < 18){
        classificacao = "menos de 18 anos";
    }else{
        classificacao = "mais de 18 anos";
    }

    alert(nome + " tem " + classificacao);
}

function exercicio03CalcularMediaEscolar(){
    const campoNota1 = document.getElementById("nota1Ex3");
    const campoNota2 = document.getElementById("nota2Ex3");
    const campoNota3 = document.getElementById("nota3Ex3");

    const nota1 = parseFloat(campoNota1.value);
    const nota2 = parseFloat(campoNota2.value);
    const nota3 = parseFloat(campoNota3.value);

    const media = (nota1 + nota2 + nota3) / 3;

    const campoResultado = document.getElementById("resultadoEx3");

    if(media < 7){
        campoResultado.value = `Media ${media.toFixed(2)}: Reprovado`;
    }else{
        campoResultado.value = `media ${media}: Aprovado`;
    }
}

function exercicio04CalcularDescontoProduto(){
    const campoNomeProduto = document.getElementById("nome-produtoEx4");
    const campoPrecoProduto = document.getElementById("preco-produtoEx4");

    if(campoPrecoProduto.value === ""){
        alert("Preencha o campo preço");
        return;
    }

    const nomeProduto = campoNomeProduto.value;
    const precoProduto = parseFloat(campoPrecoProduto.value);

    const campoDesconto = document.getElementById("select-Ex4");
    const desconto = campoDesconto.value;

    let valorDesconto = 0;
    let valorFinal = 0;
    if(desconto === "10"){
        valorDesconto = precoProduto * 0.10;
    }else if(desconto === "20"){
        valorDesconto = precoProduto * 0.20;
    }else if(desconto === "30"){
        valorDesconto = precoProduto * 0.30;
    }else if(desconto === "40"){
        valorDesconto = precoProduto * 0.40;
    }else if(desconto === "50"){
        valorDesconto = precoProduto * 0.50;
    }

    valorFinal = precoProduto - valorDesconto;

    const campoResultado = document.getElementById("resultadoEx4");
    
    campoResultado.value = `Nome do produto: ${nomeProduto}
    Valor Original: ${precoProduto}
    Valor do desconto: ${valorDesconto}
    Valor final: ${valorFinal}`;
}

function exercicio05SimularSalario(){
    const campoNomeFuncionario = document.getElementById("nome-funcionarioEx5");
    const campoSalario = document.getElementById("salario-atualEx5");

    if(campoNomeFuncionario.value === "" || campoSalario.value === ""){
        alert("Preencha o nome e o salario de forma correta")
        return;
    }

    const nomeFuncionario = campoNomeFuncionario.value;
    const salarioAtual = parseFloat(campoSalario.value);

    const campoAumento = document.getElementById("select-Ex5");
    const aumento = campoAumento.value;

    if(aumento === "selecionar"){
        alert("Selecione um cargo valido");
        return;
    }

    let valorFinal = 0;
    if(aumento === "Estagiario"){
        valorFinal = salarioAtual * 1.10;
    }else if(aumento === "Atendente"){
        valorFinal = salarioAtual * 1.20;
    }else if(aumento === "auxiliar-administrativo"){
        valorFinal = salarioAtual * 1.30;
    }else if(aumento === "Supervisor"){
        valorFinal = salarioAtual * 1.40;
    }else if(aumento === "Gerente"){
        valorFinal = salarioAtual * 1.50;
    }

    const campoResultado = document.getElementById("resultadoEx5");
    
    campoResultado.value = 
    `Nome: ${nomeFuncionario}
    Cargo: ${aumento}
    Valor final: ${valorFinal}`;
}

function exercicio06CalcularContaRestaurante(){
    const campoNomeCliente = document.getElementById("nome-clienteEx6");
    const campoValorConsumido = document.getElementById("valor-consumidoEx6");

    const nomeCliente = campoNomeCliente.value;
    const valorConsumido = parseFloat(campoValorConsumido.value);

    const campoTaxa = document.querySelector("[name='taxa']:checked");

    let valorTotal = valorConsumido;
    let taxaServico = 0;
    if (campoTaxa !== null) {
        valorTotal = valorConsumido * 1.15;
        taxaServico = valorConsumido * 0.15;
    }

    const resultado = document.getElementById("resultadoEx6");

    resultado.value = `Nome do cliente: ${nomeCliente}
    Valor consumido: ${valorConsumido}
    Taxa de serviço: ${taxaServico}
    Total a pagar: ${valorTotal}`

}

function exercicio07CadastrarAlunoTurnoCurso(){
    const campoNomeAluno = document.getElementById("nome-alunoEx7");

    const nomeAluno = campoNomeAluno.value;

    const campoTurno = document.querySelector("[name='tipoEx7']:checked");

    if (campoTurno === null) {
        alert("Selecione um turno");
        return;
    }

    const turno = campoTurno.value;

    const campoSelect = document.getElementById("selectEx7");

    if(campoSelect.value === "selecionar"){
        alert("Selecione um curso");
        return;
    }

    const select = campoSelect.value;

    const resultado = document.getElementById("resultadoEx7");

    resultado.value = `Nome: ${nomeAluno}\nTurno: ${turno}\nCurso: ${select}`
}

function exercicio08SimularLocacaoCarro(){
    const campoNome = document.getElementById("nome-clienteEx8");
    const campoSelect = document.getElementById("selectEx8")

    if(campoNome.value === ""){
        alert("Preencha o nome");
        return;
    }
    if(campoSelect.value === "selecionar"){
        alert("Selecione um tipo de carro");
        return;
    }

    const nome = campoNome.value;
    const select = campoSelect.value;

    const campoQuantidadeDias = document.getElementById("quantidade-diasEx8");

    if(campoQuantidadeDias.value === "" || parseInt(campoQuantidadeDias.value) < 1){
        alert("Quantidade de dias invalida");
        return;
    }
    const quantidadeDias = parseInt(campoQuantidadeDias.value);

    const checkSeguro = document.querySelector("[name='tipoEx8']:checked").value;
    const checkCadeiraInfantil = document.querySelector("[name='tipoEx82']:checked").value;


    let diaria = 0;
    let precoBase = 0;
    let precoTotal = precoBase;

    if(campoSelect.value === "Onix"){
        diaria = 100;
    }else if(campoSelect.value === "Tesla"){
        diaria = 200;
    }else if(campoSelect.value === "LandHover"){
        diaria = 150;
    }

    precoBase = diaria * quantidadeDias;

    let temSeguro = "Não";
    let temCadeirinha= "Não";

    if(checkSeguro !== null){
        precoTotal = precoTotal * 1.15;
        temSeguro = "Sim";
    }
    if(checkCadeiraInfantil !== null){
        precoTotal = precoTotal * 1.15;
        temCadeirinha =  "Sim";
    }

    const resultado = document.getElementById("resultadoEx8");

    

    resultado.value = `Nome: ${nome}
    Tipo de carro: ${select}
    Quantidade de dias: ${quantidadeDias}
    Tem seguro: ${temSeguro}
    Tem cadeirinha: ${temCadeirinha}
    Valor total: ${precoTotal}`

}

/*
function exercicio10GerarOrcamentoEvento(){
    const campoNomeResponsavel = document.getElementById("nome-responsavelEx10");
    const campoQuantidadeConvidados = document.getElementById("quantidade-convidadosEx10");
    const selectTipoEvento = document.getElementById("selectEx10");

    const campoRadio = document.querySelector("[name='tipoEx10']:checked").value;
    const campoData = document.getElementById("data-eventoEx10");
}
*/