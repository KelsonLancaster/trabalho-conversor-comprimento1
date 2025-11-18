// Fatores de conversão (tudo para 1 metro)
const fatoresParaMetro = {
    metros: 1,
    quilometros: 1000,
    milhas: 1609.34,
    polegadas: 0.0254
};

// Fatores de conversão (de 1 metro para outros)
const fatoresDeMetro = {
    metros: 1,
    quilometros: 0.001,
    milhas: 0.000621371,
    polegadas: 39.3701
};

// Pegar os elementos do HTML
const valorInput = document.getElementById("valorInput");
const unidadeDe = document.getElementById("unidadeDe");
const unidadePara = document.getElementById("unidadePara");
const botaoConverter = document.getElementById("botaoConverter");
const textoResultado = document.getElementById("textoResultado");

// Função principal de conversão
function converter() {
    const valor = parseFloat(valorInput.value);
    const de = unidadeDe.value;
    const para = unidadePara.value;

    // Validação
    if (isNaN(valor)) {
        textoResultado.textContent = "Por favor, insira um valor válido.";
        return;
    }

    // 1. Converter o valor de entrada para Metros
    const valorEmMetros = valor * fatoresParaMetro[de];

    // 2. Converter de Metros para a unidade de saída
    const valorFinal = valorEmMetros * fatoresDeMetro[para];

    // Exibir o resultado
    // toFixed(4) limita a 4 casas decimais
    textoResultado.textContent = `${valorFinal.toFixed(4)} ${para}`;
}

// Adicionar o evento de clique ao botão
botaoConverter.addEventListener("click", converter);
