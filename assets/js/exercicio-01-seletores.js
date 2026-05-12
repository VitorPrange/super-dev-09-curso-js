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
    
}