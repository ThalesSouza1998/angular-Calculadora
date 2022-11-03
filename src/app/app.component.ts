import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public digitop: string = '';
  public digitos: string = '';
  public primeiro: number = -1;
  public segundo: number = -1;
  public resultado: number = 0;
  public calcular: number = 0;
  public auxiliar: number = 0;

  um() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '1';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '1';
      this.resultado = parseFloat(this.digitos);
    }
  }
  dois() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '2';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '2';
      this.resultado = parseFloat(this.digitos);
    }
  }
  tres() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '3';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '3';
      this.resultado = parseFloat(this.digitos);
    }
  }
  quatro() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '4';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '4';
      this.resultado = parseFloat(this.digitos);
    }
  }
  cinco() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '5';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '5';
      this.resultado = parseFloat(this.digitos);
    }
  }
  seis() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '6';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '6';
      this.resultado = parseFloat(this.digitos);
    }
  }
  sete() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '7';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '7';
      this.resultado = parseFloat(this.digitos);
    }
  }
  oito() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '8';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '8';
      this.resultado = parseFloat(this.digitos);
    }
  }
  nove() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '9';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '9';
      this.resultado = parseFloat(this.digitos);
    }
  }
  zero() {
    if (this.primeiro == -1) {
      this.digitop = this.digitop + '0';
      this.resultado = parseFloat(this.digitop);
    } else {
      this.digitos = this.digitos + '0';
      this.resultado = parseFloat(this.digitos);
    }
  }
  somar() {
    this.primeiro = parseFloat(this.digitop);
    this.auxiliar = 1;
  }
  limpar() {
    this.resultado = 0;
    this.primeiro = -1;
    this.segundo = -1;
    this.digitop = '';
    this.digitos = '';
  }
  subtrair() {
    this.primeiro = parseFloat(this.digitop);
    this.auxiliar = 2;
  }
  divisao() {
    this.primeiro = parseFloat(this.digitop);
    this.auxiliar = 3;
  }
  multiplicacao() {
    this.primeiro = parseFloat(this.digitop);
    this.auxiliar = 4;
  }
  igual() {
    if (this.auxiliar == 1) {
      this.primeiro = parseFloat(this.digitop);
      this.segundo = parseFloat(this.digitos);
      this.resultado = this.primeiro + this.segundo;
    } else if (this.auxiliar == 2) {
      this.primeiro = parseFloat(this.digitop);
      this.segundo = parseFloat(this.digitos);
      this.resultado = this.primeiro - this.segundo;
    } else if (this.auxiliar == 3) {
      this.primeiro = parseFloat(this.digitop);
      this.segundo = parseFloat(this.digitos);
      this.resultado = this.primeiro / this.segundo;
    } else {
      this.primeiro = parseFloat(this.digitop);
      this.segundo = parseFloat(this.digitos);
      this.resultado = this.primeiro * this.segundo;
    }
  }
}
