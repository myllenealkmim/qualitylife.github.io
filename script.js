// Função para rolar suavemente para uma seção
function rolarParaSecao(idSecao) {
    const elemento = document.getElementById(idSecao);
    if (elemento) {
        elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os links do menu
    const linksMenu = document.querySelectorAll('.menu-navegacao a');
    
    linksMenu.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obter o ID da seção do link
            const idDestino = this.getAttribute('href').substring(1);
            rolarParaSecao(idDestino);
        });
    });
    
    // Efeito de aparição dos elementos ao fazer scroll
    const opcoesobservador = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observador = new IntersectionObserver(function(entradas) {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
            }
        });
    }, opcoesobservador);
    
    // Observar elementos com animação
    const elementosAnimados = document.querySelectorAll('.cartao-projeto, .sobre p');
    elementosAnimados.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observador.observe(el);
    });
    
    // Efeito no botão principal
    const botaoPrincipal = document.querySelector('.botao-principal');
    if (botaoPrincipal) {
        botaoPrincipal.addEventListener('mouseenter', function() {
            this.style.background = '#ffed4a';
        });
        
        botaoPrincipal.addEventListener('mouseleave', function() {
            this.style.background = '#ffd700';
        });
    }
});

// Atualizar ano no rodapé automaticamente
document.addEventListener('DOMContentLoaded', function() {
    const rodape = document.querySelector('footer p');
    if (rodape) {
        const anoAtual = new Date().getFullYear();
        rodape.innerHTML = `&copy; ${anoAtual} Meu Site. Todos os direitos reservados.`;
    }
});
