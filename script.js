//
// Arquivo: script.js
// Contém a lógica JavaScript para a página do currículo de Maria Vittoria.
//

// Certifica-se de que o script Lucide (para ícones) está carregado antes de inicializar os ícones.
// A função lucide.createIcons() é responsável por transformar os elementos i[data-lucide] em SVGs.
if (typeof lucide !== 'undefined') {
    // Função para inicializar os ícones Lucide
    lucide.createIcons();
} else {
    console.error('Lucide Icons não está carregado. Verifique o link no index.html.');
}


// JS simples para fins de estrutura, embora a página seja estática
document.addEventListener('DOMContentLoaded', () => {
    // Este log confirma que o arquivo JavaScript externo foi carregado corretamente.
    console.log('Página do currículo de Maria Vittoria carregada com sucesso. Scripts externos em execução.');
});
