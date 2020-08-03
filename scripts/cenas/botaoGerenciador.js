class BotaoGerenciador{
  constructor(texto, x, y, funcao){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botao-tela-inicial');
    this.funcao = funcao;
  }
  
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
  
  _alteraCena(){
      this.botao.remove(); 
    if(this.funcao == 'iniciar'){
      cenaAtual = 'jogo';
    }
    else if(this.funcao == 'reiniciar'){
      window.location.reload();
    }
  }
}