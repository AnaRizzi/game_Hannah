function preload(){
  imgCenario =  loadImage('imagens/cenario/floresta.png');
  imgCenarioFrente =  loadImage('imagens/cenarioCamadas/Ground.png');
  imgCenario2 =  loadImage('imagens/cenarioCamadas/Foreground.png');
  imgCenario3 =  loadImage('imagens/cenarioCamadas/Middle_Decor.png');
  imgCenario4 =  loadImage('imagens/cenarioCamadas/BG_Decor.png');
  imgCenario5 =  loadImage('imagens/cenarioCamadas/Sky.png');
  
  imgGameOver =  loadImage('imagens/assets/game-over.png');
  imgPersonagem =  loadImage('imagens/personagem/correndo.png');
  imgPersonagemColisao =  loadImage('imagens/personagem/personagemColisao.png');
  imgInimigo =  loadImage('imagens/inimigos/gotinha.png');
  imgInimigoTroll =  loadImage('imagens/inimigos/troll.png');
  imgInimigoVoador =  loadImage('imagens/inimigos/gotinha-voadora.png');
  imgInimigoMago =  loadImage('imagens/inimigos/mago.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/sompulo.wav');
  somColisao = loadSound('sons/colisao2.mp3');
  somGameOver = loadSound('sons/somgameover.wav');
  somFimTriste = loadSound('sons/somFimTriste.mp3');
  
  imgTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imgCoracao = loadImage('imagens/assets/heart.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fonteHistoria = loadFont('imagens/assets/fonteHistoria.ttf');
  
} 