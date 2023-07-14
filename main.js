// Obtém as referências para os elementos do DOM
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const startButton = document.querySelector('.BtnStart');
const refreshButton = document.querySelector('.BtnRefresh');

// Função para exibir a screen1 e ocultar a screen2
function showScreen1() {
  screen1.style.display = 'block';
  screen2.style.display = 'none';
}

// Função para exibir a screen2 e ocultar a screen1
function showScreen2() {
  screen1.style.display = 'none';
  screen2.style.display = 'block';
}

// Exibe a screen1 inicialmente
showScreen1();

// Adiciona um evento de clique ao botão de iniciar
startButton.addEventListener('click', function(event) {
  event.preventDefault();
  showScreen2();
});

// Adiciona um evento de clique ao botão de atualizar
refreshButton.addEventListener('click', function(event) {
  event.preventDefault();
  showScreen1();
});

const cookieButton = document.getElementById('cookieButton');
const cookieImage = document.querySelector('#cookieButton img');

cookieButton.addEventListener('mouseenter', function() {
  cookieImage.classList.add('shake-animation');
});

cookieButton.addEventListener('mouseleave', function() {
  cookieImage.classList.remove('shake-animation');
});

cookieButton.addEventListener('click', function(event) {
  event.preventDefault();
  showScreen2();
  showRandomFortune();
});

const fortunes = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Gente todo dia arruma os cabelos, por que não o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "O Paulo é lindo!",
];

function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

const fortuneText = document.querySelector('.fortune-text');

function showRandomFortune() {
  const randomFortune = getRandomFortune();
  fortuneText.textContent = randomFortune;
}

refreshButton.addEventListener('click', function(event) {
  event.preventDefault();
  showRandomFortune();
});
