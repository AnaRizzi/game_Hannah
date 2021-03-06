let imgCenario;
let imgPersonagem;
let imgPersonagemColisao;
let imgInimigo;
let imgInimigoTroll;
let imgInimigoVoador;
let imgInimigoMago;
let imgGameOver;
let imgCoracao;
let imgTelaInicial;

let somDoJogo;
let somDoPulo;
let somGameOver;
let somFimTriste;
let somColisao;
let fonteTelaInicial;
let fonteHistoria;

let jogo;
let telaInicial;

let imgCenarioFrente;
let imgCenario2;
let imgCenario3;
let imgCenario4;
let imgCenario5;

let cenario;
let cenarioFrente;
let cenario2;
let cenario3;
let cenario4;
let cenario5;
  
let pontuacao;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let inimigos = [];
let inimigoMago;
let vida;

let objCoracao;

let cenaAtual = 'telaInicial';
let cenas;
let botaoGerenciador;
let botaoReiniciar;

const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
];

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const matrizInimigoMago = [
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [600,0],
  [600,0],
  [600,0],
  [600,0],
  [0, 624],
  [0, 624],
  [0, 624],
  [0, 624],
  [600,624],
  [600,624],
  [600,624],
  [600,624]
];

const matrizObjeto = [
  [0,0]
]