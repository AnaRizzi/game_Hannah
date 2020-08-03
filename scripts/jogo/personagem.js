class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite); 

      this.yInicial = height - this.altura - variacaoY;
      this.y = this.yInicial;
      this.velocidadeDoPulo = 0;
      this.gravidade = 3;
      this.alturaDoPulo = -30
      this.qtdPulos = 0;
      this.precisaoDaColisao = 0.63;
      this.colisaoX = 20;
      this.colisaoY = 28;
      this.invencivel = false;
  } 
  
  pula(){
    if(this.qtdPulos < 2){
      this.velocidadeDoPulo = this.alturaDoPulo;
      somDoPulo.play();
      this.qtdPulos++;
    }
  }
  
  aplicaGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    if(this.y > this.yInicial){
       this.y = this.yInicial;
       this.qtdPulos = 0;
       }
  }
  
  ficaInvencivel(){
    this.invencivel = true;
    this.imagem = imgPersonagemColisao;
    setTimeout(() => {
      this.invencivel = false;
      this.imagem = imgPersonagem;

    }, 2000)
  }
  
  estaColidindo(inimigo){
    if(this.invencivel){
      return false; 
    }
    const precisao = .65;
    //noFill();
    //rect(this.x+this.colisaoX, this.y+this.colisaoY, this.largura * this.precisaoDaColisao, this.altura * this.precisaoDaColisao);
    //rect(inimigo.x+inimigo.colisaoX, inimigo.y+inimigo.colisaoY, inimigo.largura * inimigo.precisaoDaColisao, inimigo.altura * inimigo.precisaoDaColisao);
    const colisao = collideRectRect(
      this.x + this.colisaoX, 
      this.y + this.colisaoY, 
      this.largura * this.precisaoDaColisao, 
      this.altura * this.precisaoDaColisao, 
      inimigo.x +inimigo.colisaoX, 
      inimigo.y +inimigo.colisaoY, 
      inimigo.largura * inimigo.precisaoDaColisao, 
      inimigo.altura * inimigo.precisaoDaColisao);
    return colisao;
  }
  
  calculoMatriz(){
    let matriz = [];
    for(let y=0; y<=810; y = y+270){
      for(let x=0; x<= 660; x = x+220){
        matriz.push([x, y]); 
      }
    }
    return matriz;
  }
  
}