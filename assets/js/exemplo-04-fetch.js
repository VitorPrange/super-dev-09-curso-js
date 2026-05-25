function cadastrarEmpresa(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa"

    const dados = {
        nome: "CHAVO LTDA",
        cnpj: "99.570.252/0001-13"
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(dado => {
            alert("Empresa cadastrada");
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Erro no cadastro");
        })
}
