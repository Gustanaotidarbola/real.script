// Definindo os estoques iniciais para os produtos
const estoques = {
    'parafuso': 100,
    'martelo': 50,
    'chave de fenda': 75,
    'serrote': 30
};

const precos = {
    'parafuso': 1.50, // preço por unidade
    'martelo': 10.00,
    'chave de fenda': 8.00,
    'serrote': 15.00
};

// Função para atualizar o estoque e calcular o preço
function calcularPreco() {
    const produtoSelecionado = document.getElementById("produto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if (!produtoSelecionado || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, selecione um produto e insira uma quantidade válida.");
        return;
    }

    // Verifica se o estoque é suficiente
    if (quantidade > estoques[produtoSelecionado]) {
        alert("Quantidade excede o estoque disponível.");
        return;
    }

    // Atualiza o estoque
    estoques[produtoSelecionado] -= quantidade;

    // Calcula o preço total
    const precoTotal = precos[produtoSelecionado] * quantidade;

    // Atualiza o estoque visível e o resultado da compra
    document.getElementById("estoque").textContent = `Estoque restante de ${produtoSelecionado}: ${estoques[produtoSelecionado]}`;
    document.getElementById("resultado").textContent = `Preço total: R$ ${precoTotal.toFixed(2)}. Estoque atualizado: ${estoques[produtoSelecionado]} unidades restantes.`;
}
