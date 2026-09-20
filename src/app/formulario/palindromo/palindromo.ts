import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {

  oracion: string = "";
  vocales: number = 0;
  consonantes: number = 0;
  resultado: string = "";
  arreglo: string[] = [];

  calcular(): void {
    this.vocales = 0;
    this.consonantes = 0;
    this.arreglo = [];

   
    for (let i = 0; i < this.oracion.length; i++) {
      let letra = this.oracion[i];

     
      if (
        letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ||
        letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'
      ) {
        this.vocales++;
        this.arreglo.push(letra);
      }
     
      else if (
        (letra >= 'a' && letra <= 'z') || 
        (letra >= 'A' && letra <= 'Z')
      ) {
        this.consonantes++;
        this.arreglo.push(letra);
      }
    }

    let palindromo = true;

    
    for (let i = 0; i < this.arreglo.length / 2; i++) {
      let inicio = this.arreglo[i];
      let fin = this.arreglo[this.arreglo.length - 1 - i];

     
      if (inicio != fin) {
        palindromo = false;
      }
    }

    if (palindromo == true) {
      this.resultado = "Si es palindromo";
    } else {
      this.resultado = "No es palindromo";
    }
  }
}