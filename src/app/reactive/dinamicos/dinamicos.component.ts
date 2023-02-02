import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
    myForm: FormGroup = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      favoritos: this.fb.array([
        ['Suzuki', Validators.required],
        ['Yamaha', Validators.required]
      ],Validators.required)
    })

    nuevoFavorito: FormControl = this.fb.control('', Validators.required);

    constructor(private fb: FormBuilder){}
    get favoritos(){
      return this.myForm.get('favoritos') as FormArray;
    }

    isValidField(field: string){
      return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
    }

    add(){
      if (this.nuevoFavorito.invalid) {
        return;
      }
      this.favoritos.push( this.fb.control(this.nuevoFavorito.value, Validators.required))
      this.nuevoFavorito.reset()
    }

    delete(i:number){
      this.favoritos.removeAt(i)
    }

    save(){
      if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
      }
      console.log('Enviado');
      this.favoritos.clear();
      this.myForm.reset();

    }
}
