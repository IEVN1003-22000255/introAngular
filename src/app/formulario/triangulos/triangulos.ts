import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulos',
  standalone: false,
  styleUrl: './triangulos.css',
  templateUrl: './triangulos.html',
})
export class Triangulos {


  x1: number = 0;
  y1: number = 0;

  x2: number = 0;
  y2: number = 0;

  x3: number = 0;
  y3: number = 0;

  
  mensaje: string = "";
  area: number = 0;
  esTriangulo: boolean = false;

 
  resA: string = "";
  resB: string = "";
  resC: string = "";

  analizarPuntos(): void {
  
    let operacion = (this.x1 * (this.y2 - this.y3) + this.x2 * (this.y3 - this.y1) + this.x3 * (this.y1 - this.y2)) / 2;

   
    if (operacion < 0) {
      operacion = operacion * -1;
    }

   
    this.resA = "(" + this.x1 + ", " + this.y1 + ")";
    this.resB = "(" + this.x2 + ", " + this.y2 + ")";
    this.resC = "(" + this.x3 + ", " + this.y3 + ")";

   
    if (operacion == 0) {
      this.esTriangulo = false;
      this.area = 0;
      this.mensaje = "Los tres puntos no forman un triángulo porque son colineales.";
    } else {
      this.esTriangulo = true;
      this.area = operacion;
      this.mensaje = "Los puntos forman un triángulo.";
    }
  }
}