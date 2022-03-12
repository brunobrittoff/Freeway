// Variáveis de Imagem
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemDaEstrada;
let imagemDoAtor;

// Variáveis de Som
let trilha;
let colisao;
let pontos;

// Imagens
function preload() {
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("/Imagens/ator-1.png");
  imagemCarro1 = loadImage("/Imagens/carro-1.png");
  imagemCarro2 = loadImage("/Imagens/carro-2.png");
  imagemCarro3 = loadImage("/Imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  trilha = loadSound("/sons/trilha.mp3");
  colisao = loadSound("/sons/colidiu.mp3");
  pontos = loadSound("/sons/pontos.wav");
}