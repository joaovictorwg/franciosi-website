// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
const offset = 100; // Distância em pixels do topo da tela para disparar o efeito
return (
    rect.top + offset < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0
);
}

// Função para adicionar a classe 'visible' aos cards quando eles estiverem visíveis
function handleScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', handleScroll);

// Chama a função no carregamento inicial para animar cards já visíveis
window.addEventListener('load', handleScroll);


function formatarPreco(preco) {
    // Converte o número para uma string com duas casas decimais
    const precoFormatado = preco.toFixed(2).replace('.', ',');
    return `R$ ${precoFormatado}`;
}
