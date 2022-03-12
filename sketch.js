function setup() {
  createCanvas(500, 400);
  trilha.loop();
  preencheVelocidadeInicial();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  verificaColisao();
  marcaPonto();
  escrevePlacar();
}
