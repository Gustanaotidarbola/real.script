//MARTELO,PREGO,ALIGATE,PARAFUSO
//19,90  10,00  23,00  a = 10

const precos={
    "parafuso":19.90,
    "martelo":23.70,
    "chave de fenda":10.99,
    "serrote":30.00,
};
//Acessar guardar a quantidade
let qtd = document.getElementById("quantidade").valeu;

console.log(qtd);

//calcular o preço total
   function calcularPreco(){
   let qtd = document.getElementById("quantidade").valeu;
   let escolha = document.getElementById("produto").valeu;
   let valortxoal = qtd * precos[escolha]
   document.getElementById("resultado").innerHTML = valortxoal;

}
