import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formulario/operas-bas/operas-bas';
import { Distancia } from './formulario/distancia/distancia';
import { Figuras } from './formulario/figuras/figuras';
import { Palindromo } from './formulario/palindromo/palindromo';
import { Validacion } from './formulario/validacion/validacion';
import { Triangulos } from './formulario/triangulos/triangulos';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Distancia,
    Figuras,
    Palindromo,
    Validacion,
    Triangulos,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
