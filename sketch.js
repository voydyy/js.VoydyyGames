
//VARIAVEIS DO PERSONAGEM
let xPersonagem = 200;
let yPersonagem = 200;
let alturaPersonagem = 20;
let larguraPersonagem = 10;
let velocidadeDoPersonagem = 2;
let yMeio = 10;
let xMeio = 5;
let cor = 0;
let comandos = 0
//---------CÓDIGO PRINCIPAL-------//
function setup() {
  createSpan(``)
  createCanvas(750, 400);
  comandos = createInput()
  superVelocidade = createCheckbox
}

function draw() {
  background(color(10, 60, 0));
  botoes(xPersonagem,yPersonagem);
  movimentoPersonagem();
  colisaoBorda();
}

//--------FUNÇÔES PERSONAGEM------//

function botoes(x,y) {
    fill(255)
    rect(x, y, larguraPersonagem, alturaPersonagem);
    rect(730, 380, 10, 10);
    rect(710, 380, 10, 10);
    rect(690, 380, 10, 10);
    rect(710, 360, 10, 10);
    fill(0)
    text("w",710.5,369)
    text("d",732,389.5)
    text("s",712,388)
    text("a",692,388)
}    

function movimentoPersonagem() {
  if (keyIsDown(87)) {
    yPersonagem -= velocidadeDoPersonagem;
  }
  if (keyIsDown(83)) {
    yPersonagem += velocidadeDoPersonagem;
  }
  if (keyIsDown(65)) {
    xPersonagem -= velocidadeDoPersonagem;
  }
  if (keyIsDown(68)) {
    xPersonagem += velocidadeDoPersonagem;
  }
}

function colisaoBorda() {
  if (xPersonagem < 0) {
    xPersonagem = 0;
  }
  if (xPersonagem + larguraPersonagem > 750) {
    xPersonagem = 740;
  }
  if (yPersonagem < 0) {
    yPersonagem = 0;
  }
  if (yPersonagem + alturaPersonagem > 400) {
    yPersonagem = 380;
  }
}
