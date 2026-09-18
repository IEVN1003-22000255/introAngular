import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {

  dato1:string=""
  dato2:string=""
  figura:string=""
  resultado:number=0

  calcular():void{

    let dato1=parseFloat(this.dato1)
    let dato2=parseFloat(this.dato2)

    if(this.figura=="cuadrado"){
      this.resultado=dato1*dato1
    }

    if(this.figura=="circulo"){
      this.resultado=Math.PI*(dato1*dato1)
    }

    if(this.figura=="triangulo"){
      this.resultado=(dato1*dato2)/2
    }

    if(this.figura=="pentagono"){
      this.resultado=(5*dato1*dato2)/2
    }

    if(this.figura=="rectangulo"){
      this.resultado=dato1*dato2
    }

  }
}