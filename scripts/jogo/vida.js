class Vida{
  constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    this.largura = 45;
    this.altura = 40;
  }
  
  draw(){
    let margem = 15
    for(let x=0; x < this.vidas; x++){
      image(imgCoracao, margem, 15, this.largura, this.altura);
      margem += this.largura + 5;
    }
  }
  
  ganhaVida(){
    if(this.vidas < this.total){
      this.vidas++;
    }
  }
  
  perdeVida(){
    this.vidas--; 
  }
  
}