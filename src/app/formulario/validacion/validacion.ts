import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion',
  standalone: false,
  styleUrl: './validacion.css',
  templateUrl: './validacion.html',
})
export class Validacion {

  
  usuarioInput: string = "";
  passwordInput: string = "";

 
  mensaje: string = "";

  
  private usuarioCorrecto: string = "andi";
  private passwordCorrecto: string = "1234";

  validar(): void {
    
    if (this.usuarioInput != this.usuarioCorrecto) {
      this.mensaje = "El nombre de usuario no es válido.";
    }
   
    else if (this.passwordInput != this.passwordCorrecto) {
      this.mensaje = "La contraseña no es válida.";
    }
   
    else {
      this.mensaje = "Bienvenido al sistema, " + this.usuarioInput + ".";
    }
  }
}