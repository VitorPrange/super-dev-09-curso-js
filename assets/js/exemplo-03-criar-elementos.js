function adicionarAluno(){
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.value.trim;



    if(nome.lenght === 0){
        alert("Digite o nome do aluno")
        campoNome.focus;
        return;
    }

    const divCardAluno = document.createElement("div");

    const divListaAlunos = document.getElementsByClassName("lista-alunos")[0];
    divCardAluno.classList.add("card-aluno");

    const h3NomeAluno = document.createElement("h3");
    divCardAluno.appendChild(h3NomeAluno)
    const pMensagem = document.createElement("p");
    pMensagem.innerText = "Aluno cadastrado com JavaScript"

    divCardAluno.appendChild(pMensagem)

    h3NomeAluno.innerText = campoNome.value;

    divListaAlunos.appendChild(divCardAluno);

    campoNome.value = "";

}

function adicionarAlunoNoEnter(evento){
    if(evento.key === "Enter"){
        adicionarAluno();
    }
}