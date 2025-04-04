let valorTitulo = document.getElementById("TituloPrincipal").innerText;
console.log(valorTitulo);
//função que altera o conteudo do titulo
function AlterarTitulo(){
    document.getElementById("TituloPrincipal").innerHTML = "Titulo Alterado com secesso";
    window.alert("Titulo alterado com sucesso");

}

function desfazerAlteracao(){
    document.getElementById("TituloPrincipal").innerHTML = valorTitulo;
}