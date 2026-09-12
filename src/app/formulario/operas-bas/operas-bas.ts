import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string=""
  num2:string=""
  resultado:number=0
  operacion:string=""

  calcular():void{
    if(this.operacion == "sumar"){
      this.resultado=parseInt(this.num1)+parseInt(this.num2)
    }

    if(this.operacion == "restar"){
      this.resultado=parseInt(this.num1)-parseInt(this.num2)
    }

    if(this.operacion == "multiplicar"){
      this.resultado=parseInt(this.num1)*parseInt(this.num2)
    }

    if(this.operacion == "dividir"){
      this.resultado=parseInt(this.num1)/parseInt(this.num2)
    }
  }
}