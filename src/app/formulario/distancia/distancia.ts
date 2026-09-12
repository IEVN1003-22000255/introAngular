import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  x1:string=""
  y1:string=""
  x2:string=""
  y2:string=""
  resultado:number=0

  calcular():void{
    let dx=parseInt(this.x2)-parseInt(this.x1)
    let dy=parseInt(this.y2)-parseInt(this.y1)

    this.resultado=Math.sqrt((dx*dx)+(dy*dy))
  }
}