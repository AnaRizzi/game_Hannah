class TelaInicial{
  
  constructor(){

 }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._textoHistoria();
    this._botao();
  }
  
  _imagemDeFundo(){
      image(imgTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width/2, height/5);
    textSize(80);
    text('Hannah', width/2, height/5+55);
    
  }
  
  _textoHistoria(){
    textFont(fonteHistoria);
    textSize(18);
    text('Hannah é uma bruxinha que vivia feliz na floresta encantada. Um dia, o lugar foi invadido por um mago malvado que queria enfeitiçá-la para que ela se tornasse sua ajudante maligna. Ajude Hannah a espacar do mago. Pressione a seta para cima para desviar das gotas de poção e do exército de trolls.', width/8, height/2.5, width/4*3, height/2);
  }
  
  _botao(){
     botaoGerenciador.draw();
  }
}