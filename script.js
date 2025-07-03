document.getElementById("abrirPresente").addEventListener("click", () => {
  const mensagens = [
    "Parabéns! Que seu dia seja incrível e cheio de alegria! 🎉",
    "Feliz aniversário! Que Deus abençoe seus sonhos e caminhos! 🙏",
    "Muita saúde, sucesso e paz no seu novo ciclo! 🎂",
    "Hoje é o seu dia! Celebre com fé e felicidade! ✨",
    "Que esta nova fase venha cheia de conquistas e boas surpresas! 🎁",
    "Aproveite cada instante do seu dia! Você merece o melhor! 🌟",
    "Que seu ano seja doce como bolo e leve como confete! 🎈",
    "Você é especial! Que nunca falte amor, luz e propósito no seu caminho! 💖",
    "Um novo ciclo começa, e ele será maravilhoso! 🥳",
    "Desejo a você um ano extraordinário em todos os sentidos! 🚀"
  ];

  const mensagemSorteada =
    mensagens[Math.floor(Math.random() * mensagens.length)];

  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = mensagemSorteada;
  mensagem.classList.remove("hidden");

  const titulo = document.getElementById("titulo");
  titulo.textContent = "Parabéns, feliz aniversário!!!!";

  // Mostrar fotos + textos
  const fotosTextos = document.getElementById("fotos-textos");
  fotosTextos.classList.remove("hidden");

  const musica = document.getElementById("musica");
  if (musica) musica.play();

  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });

  document.getElementById("abrirPresente").style.display = "none";
});
