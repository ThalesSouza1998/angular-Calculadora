import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public digitop: string = "";
  public digitos: string = "";
  public primeiro: number = -1;
  public segundo: number = -1;
  public resultado: number = 0;
  public calcular: number = 0;
  

 
  um(){
    if(this.primeiro == -1)
      this.digitop = this.digitop + "1"
    else(
      this.digitos = this.digitos + "1"
    )
  }
  dois(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "2"
  else
    this.digitos = this.digitos + "2"
  
  }
  tres(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "3"
  else(
    this.digitos = this.digitos + "3"
  )
  }
  quatro(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "4"
  else(
    this.digitos = this.digitos + "4"
  )
  }
  cinco(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "5"
  else(
    this.digitos = this.digitos + "5"
  )
  }
  seis(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "6"
  else(
    this.digitos = this.digitos + "6"
  )
  }
  sete(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "7"
  else(
    this.digitos = this.digitos + "7"
  )
  }
  oito(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "8"
  else(
    this.digitos = this.digitos + "8"
  )
  }
  nove(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "9"
  else(
    this.digitos = this.digitos + "9"
  )
  }
  zero(){
    if(this.primeiro == -1)
    this.digitop = this.digitop + "0"
  else(
    this.digitos = this.digitos + "0"
  )
  }
  somar(){
    this.primeiro = parseFloat(this.digitop)
    this.segundo = parseFloat(this.digitos)
    this.resultado = this.primeiro + this.segundo
  }
  limpar(){
    this.resultado = 0
    this.primeiro = -1
    this.segundo = -1
    this.digitop = ""
    this.digitos = ""
  }
  subtrair(){
    this.primeiro = parseFloat(this.digitop)
    this.segundo = parseFloat(this.digitos)
    this.resultado = this.primeiro - this.segundo
  }
  divisao(){
    this.primeiro = parseFloat(this.digitop)
    this.segundo = parseFloat(this.digitos)
    this.resultado = this.primeiro / this.segundo
  }
  multiplicacao(){
    this.primeiro = parseFloat(this.digitop)
    this.segundo = parseFloat(this.digitos)
    this.resultado = this.primeiro * this.segundo
  }
  
  
    
  


}
