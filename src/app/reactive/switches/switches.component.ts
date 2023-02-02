import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    genero: ['F', Validators.required],
    notificaciones: [ true],
    terminos: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }
 
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm.valueChanges.subscribe(({terminos, ...rest}) => {
    // this.myForm.valueChanges.subscribe((values) => {
      // this.persona.genero = values.genero
      // this.persona.notificaciones = values.notificaciones
      this.persona = rest

    })
  }
  
  save(){

  }
}
