import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  @ViewChild('myForm') myForm!: NgForm;
  
  persona : Persona = { 
    nombre: 'Manuel', 
    favoritos: [
      {id: 1, nombre: 'Star Wars'},
      {id: 2, nombre: 'Marvel'}
    ]}

  newFavorite: string='';

  notValid(campo: string): boolean {
    return this.myForm?.controls[campo]?.invalid &&
           this.myForm?.controls[campo]?.touched
  }
  addFavorite(){
    if (this.newFavorite.trim()){

      const favorite:Favorito = {
        id: this.persona.favoritos.length + 1,
        nombre: this.newFavorite
      }
      this.persona.favoritos.push({...favorite});
      this.newFavorite='';
    }
  }
  delete(index: number){
    this.persona.favoritos.splice(index,1)
  }
  save() {
    console.log('formulario posteado');
  }


}
