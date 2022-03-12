// Variáveis do Ator
let xAtor = 85;
let yAtor = 376;
let larguraAtor = 30;
let alturaAtor = 30;
let velocidadeAtor = 2;

// Variável do placar
let score = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) yAtor -= velocidadeAtor;
  else if(keyIsDown(DOWN_ARROW)) yAtor += velocidadeAtor;
  else if(keyIsDown(RIGHT_ARROW)) xAtor += velocidadeAtor;
  else if(keyIsDown(LEFT_ARROW)) xAtor -= velocidadeAtor;
  limitesDaTela();
}

function limitesDaTela() {
  velocidadeAtor = 2;
  if(yAtor > 376) yAtor -= velocidadeAtor;
  else if(xAtor < 3) xAtor += velocidadeAtor;
  else if(xAtor > 466) xAtor -= velocidadeAtor;
}

function marcaPonto() {
  if(yAtor < 32) { 
    score++;
    pontos.play();
    voltaAtorPosicaoInicial();
  }
}

function menorQueZero(score) {
  return (score < 0);
}

function voltaAtorPosicaoInicial() {
  xAtor = 85;
  yAtor = 366;
}

function escrevePlacar() {
  textSize(20);
  textAlign(CENTER);
  textFont('pixels');
  fill(color(128, 0, 0));
  text('Seu placar: ', 50, 25);
  text(score, 105, 25);
}