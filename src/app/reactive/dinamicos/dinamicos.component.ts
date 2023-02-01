import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        ['Yamaha']
      ],Validators.required)
    })
    constructor(private fb: FormBuilder){}
    get favoritos(){
      return this.myForm.get('favoritos') as FormArray;
    }
    isValidField(field: string){
      return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
    }

    save(){
      if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
      }

      this.myForm.reset();

    }
}
