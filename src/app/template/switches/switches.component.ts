import { Component } from '@angular/core';
interface Persona {
  genero: string,
  notificaciones: boolean
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {

persona: Persona = {
  genero: 'F',
  notificaciones: false
};

terminos: boolean = false;

save(){
  console.log('Enviado');
  
}


}
