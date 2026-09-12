import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: `
  //<div>
  //<h1> {{title}}</h1>
  //<app-heroes-list></app-heroes-list>
  //</div>
 // `
  

 // ,

  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  title: string = 'hernandez tapia oscar';

  duplicarNumero(a: number): number {
    return a * 2;
  }

  pelicula = {
    titulo: 'spider man',
    fechaLanzamiento: new Date(),
    precio: 2535
  };
}

