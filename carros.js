// Variáveis dos Carros
let posicaoInicial = 600;
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 263, 318];
let larguraCarros = 50; 
let alturaCarros = 40;
let velocidadeCarros = [];
let colide = false;

function mostraCarros() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros);
  }
}

function movimentaCarros() {
  for(let i = 0 ; i < imagemCarros.length ; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
  voltaPosicaoInicial();
}

function voltaPosicaoInicial() {
  for(let i = 0; i < imagemCarros.length; i++) {
    if(passouTodaATela(xCarros[i])) {
      xCarros[i] = posicaoInicial;
      trocaVelocidade(i);
    } 
  }
}

function trocaVelocidade(i) {  
  velocidadeCarros[i] = retornaValorAleatorio();
}

function passouTodaATela(xCarro) {
  return (xCarro < -50);
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colide = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 15);
    if(colide) colidiu();
  }
}
function retornaValorAleatorio() {
  return parseInt(random(5, 10));
}

function preencheVelocidadeInicial() {
  for(let i = 0; i < imagemCarros.length; i++ ) {
    velocidadeCarros.push(retornaValorAleatorio());
  }
}

function colidiu() {
  score--;
  colisao.play();
  if(menorQueZero(score)) score = 0;
  voltaAtorPosicaoInicial();
}