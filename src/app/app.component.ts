import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public primeiro: number = 0;
  public segundo: number = 0;
  public resultado: number = 0;
  public calcular: number = 0;
  

 
  um(){
    if(this.primeiro<=0)
    this.primeiro = 1
    else(
      this.segundo = 1
    )
  }
  dois(){
    if(this.primeiro<=0)
    this.primeiro = 2
    else(
      this.segundo = 2
    )
  }
  tres(){
    if(this.primeiro<=0)
    this.primeiro = 3
    else(
      this.segundo = 3
    )
  }
  quatro(){
    if(this.primeiro<=0)
    this.primeiro = 4
    else(
      this.segundo = 4
    )
  }
  cinco(){
    if(this.primeiro<=0)
    this.primeiro = 5
    else(
      this.segundo = 5
    )
  }
  seis(){
    if(this.primeiro<=0)
    this.primeiro = 6
    else(
      this.segundo = 6
    )
  }
  sete(){
    if(this.primeiro<=0)
    this.primeiro = 7
    else(
      this.segundo = 7
    )
  }
  oito(){
    if(this.primeiro<=0)
    this.primeiro = 8
    else(
      this.segundo = 8
    )
  }
  nove(){
    if(this.primeiro<=0)
    this.primeiro = 9
    else(
      this.segundo = 9
    )
  }
  zero(){
    if(this.primeiro<=0)
    this.primeiro = 0
    else(
      this.segundo = 0
    )
  }
  somar(){
    this.resultado = this.primeiro + this.segundo
  }
  limpar(){
    this.resultado = 0
  }
  subtrair(){
    this.resultado = this.primeiro - this.segundo
  }
  divisao(){
    this.resultado = this.primeiro / this.segundo
  }
  multiplicacao(){
    this.resultado = this.primeiro * this.segundo
  }
  
  
    
  


}
