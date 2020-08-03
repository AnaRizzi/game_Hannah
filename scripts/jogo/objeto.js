class Objeto extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay, precisaoDaColisao, colisaoX, colisaoY){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite); 
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = x + delay;
    
    this.precisaoDaColisao = precisaoDaColisao;
    this.colisaoX = colisaoX;
    this.colisaoY = colisaoY;
  }
  
  move(){
    this.x = this.x - this.velocidade; 
    if(this.x < -this.largura - this.delay){
       this.x = width + this.delay;
       }
  }
}