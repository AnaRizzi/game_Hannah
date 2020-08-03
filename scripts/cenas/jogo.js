class Jogo {  
  constructor() {
    this.inimigoAtual = 0;
    this.contador = 1;
    this.velMinima = 8;
    this.velMaxima = 17;
  }

  setup() {
    cenarioFrente = new Cenario(imgCenarioFrente, 5);
    cenario2 = new Cenario(imgCenario2, 5);
    cenario3 = new Cenario(imgCenario3, 3);
    cenario4 = new Cenario(imgCenario4, 2);
    cenario5 = new Cenario(imgCenario5, 2);

    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);
    
    personagem = new Personagem(matrizPersonagem, imgPersonagem, 0, 40, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imgInimigo, width, 40, 52, 52, 104, 104, 8, 50, 0.8, 13, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imgInimigoVoador, width, 200, 100, 75, 200, 150, 10, 50, 0.5, 20, 20);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imgInimigoTroll, width, 10, 200, 200, 400, 400, 7, 50, 0.45, 80, 50);
    const inimigoMago = new Inimigo(matrizInimigoMago, imgInimigoMago, width, 10, 150, 220, 600, 624, 10, 50, 0.40, 55, 70);
    //(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay, precisaoDaColisao, colisaoX, colisaoY)
    inimigos.push(inimigo);
    inimigos.push(inimigoTroll);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoMago);
    
    const objCoracao = new Objeto(matrizObjeto, imgCoracao, width, 50, 45, 40, 200, 500, 10, 50, 0.40, 55, 70);

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      this.contador++;
      personagem.pula();
    }
  }

  draw() {
    cenario5.exibe();
    cenario5.move();
    cenario4.exibe();
    cenario4.move();
    cenario3.exibe();
    cenario3.move();
    cenario2.exibe();
    cenario2.move();

    pontuacao.exibe();
    pontuacao.adicionarPonto();
    vida.draw();
    
    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();
    
    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel()
      if(vida.vidas > 0){
        somColisao.play();
      }
      if(vida.vidas <= 0){
        somDoJogo.stop();
        //somGameOver.play();
        somFimTriste.play();
        setTimeout(() => {noLoop()}, 5)
      }
    }    
    if(vida.vidas <= 0){
      image(imgGameOver, width / 2 - 200, height / 3);
      botaoReiniciar = new BotaoGerenciador('Jogar de novo', width/2, height/9*7, 'reiniciar');
      botaoReiniciar.draw();
    }

    if (inimigoVisivel) {
      if(this.contador >= 20){
        this.inimigoAtual = 3;
        this.velMinima += 2;
        this.velMaxima += 2;
        this.contador = 1
}
      else{
        this.inimigoAtual = parseInt(random(0, 3));
      }

      if(this.velMaxima > 50){
        this.velMaxima = 50;
      }
      if(this.velMinima > 45){
        this.velMinima = 45;
      }
      inimigo.velocidade = parseInt(random(this.velMinima, this.velMaxima));
    }

    cenarioFrente.exibe();
    cenarioFrente.move();
    //objCoracao.exibe();
    //objCoracao.move();

  }
  
}