function gerarNome() {
    var primeiraSilabaNome = document.getElementById("primeira-silaba-nome").value;
    var ultimaSilabaNome = document.getElementById("ultima-silaba-nome").value;
    var primeiraSilabaSobrenome = document.getElementById("primeira-silaba-sobrenome").value;
    var ultimaSilabaSobrenome = document.getElementById("ultima-silaba-sobrenome").value;
    
    if (!primeiraSilabaNome || !ultimaSilabaNome || !primeiraSilabaSobrenome || !ultimaSilabaSobrenome) {
        document.getElementById("mensagem-erro").style.display = "block";
        document.getElementById("nome-dinossauro").textContent = "";
    } else {
        document.getElementById("mensagem-erro").style.display = "none";
        
        var confirmar = confirm("Deseja gerar o nome do dinossauro?");
        
        if (confirmar) {
            var nomeDinossauro = primeiraSilabaNome + ultimaSilabaSobrenome + primeiraSilabaSobrenome + ultimaSilabaNome + "sauro";
            document.getElementById("nome-dinossauro").textContent = "Nome do Dinossauro: " + nomeDinossauro;
        }
    }
}
