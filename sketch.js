function setup() {
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  jogo.setup();
  
  telaInicial = new TelaInicial();
  
  frameRate(30);
  somDoJogo.loop();
  cenas = {
    jogo,
    telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/9*7, 'iniciar');
  //botaoReiniciar = new BotaoGerenciador('Jogar de novo', width/2, height/9*7, 'reiniciar');
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}