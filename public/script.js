const messages = [
    "Preparando algo especial...",
    "Para la bolita más importante...",
    "Que llena mi vida de amor...",
    "Y hace latir mi corazón...",
    "Te amo..."
];

const emojis = ["❤️", "💖", "💝", "💕", "💗", "💓", "💞", "💘", "💌"];

function createMessage(text, delay) {
    setTimeout(() => {
        const msg = document.createElement('div');
        msg.className = 'message';
        msg.textContent = text;
        msg.style.top = `${Math.random() * 60 + 20}%`;
        msg.style.left = `${Math.random() * 60 + 20}%`;
        document.body.appendChild(msg);
        setTimeout(() => msg.style.opacity = 1, 100);
        setTimeout(() => {
            msg.style.opacity = 0;
            setTimeout(() => msg.remove(), 1000);
        }, 2000);
    }, delay);
}

function createFirework(x, y) {
    const colors = ['#ff0', '#f0f', '#0ff', '#ff4', '#4ff'];
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
}

function createLightBeam() {
    const beam = document.createElement('div');
    beam.className = 'light-beam';
    beam.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(beam);
    setTimeout(() => beam.remove(), 2000);
}

function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 4000);
}

function startSurprise() {
    document.querySelector('.start-button').style.display = 'none';
    document.body.style.background = 'linear-gradient(45deg, #000000, #1a0010)';

    let delay = 0;
    messages.forEach((text) => {
        createMessage(text, delay);
        delay += 2000;
    });

    // Efectos de luz
    const beamInterval = setInterval(createLightBeam, 500);
    const emojiInterval = setInterval(createFloatingEmoji, 300);

    // Fuegos artificiales aleatorios
    const fireworkInterval = setInterval(() => {
        createFirework(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }, 600);

    // Mostrar mensaje final
    setTimeout(() => {
        clearInterval(beamInterval);
        clearInterval(emojiInterval);
        clearInterval(fireworkInterval);
        
        const finalMessage = document.getElementById('finalMessage');
        finalMessage.classList.remove('hidden');
        setTimeout(() => {
            finalMessage.style.opacity = 1;
            finalMessage.style.transform = 'scale(1)';
        }, 100);

        // Continuar con efectos de fondo
        setInterval(() => {
            createFirework(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
            createFloatingEmoji();
        }, 1000);
    }, delay + 2000);
}