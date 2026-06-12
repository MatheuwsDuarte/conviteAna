// Função para criar corações flutuantes no fundo
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Arrays de emojis fofos/bregas
    const emojis = ['💖', '❤️', '💘', '💕', '🥰', '✨'];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Posição, tamanho e duração aleatória para ficar natural
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // Entre 3s e 6s
    heart.style.fontSize = Math.random() * 20 + 15 + 'px'; // Entre 15px e 35px
    
    document.getElementById('hearts-container').appendChild(heart);
    
    // Remove o coração depois que ele sai da tela para não pesar a página
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Cria um coração a cada 400ms
let heartInterval = setInterval(createHeart, 400);

// Função ativada quando ela clica em 'Sim' ou 'Com certeza'
function confirmDate() {
    // 1. Toca a música (navegadores exigem interação do usuário antes de tocar áudio)
    const music = document.getElementById('bg-music');
    music.volume = 0.5; // Volume agradável
    music.play().catch(error => console.log("Áudio bloqueado. O usuário precisa interagir com a página."));

    // 2. Esconde os botões
    document.querySelector('.buttons').style.display = 'none';

    // 3. Muda a pergunta para uma afirmação fofa
    const inviteText = document.querySelector('.invitation-text h2');
    inviteText.innerHTML = "VAMOS POVOAR O PLANETA COM CACHEADOS LINDOS! 😍";

    // 4. Mostra os detalhes do date com animação
    const details = document.getElementById('details-section');
    details.classList.remove('hidden');
    details.classList.add('visible');

    // 5. Desce a página suavemente para ela ler os detalhes
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 500);
    
    // 6. Aumenta MUITO a quantidade de corações caindo em celebração!
    clearInterval(heartInterval);
    setInterval(createHeart, 100);
}