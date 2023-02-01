import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('Patatas'),
  //   precio: new FormControl(5),
  //   existencias: new FormControl(100)
  // })

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    existencias: [null, [Validators.required, Validators.min(0)]]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.myForm.setValue({
    //   nombre: 'Patatas',
    //   precio: 5,
    //   existencias: 500

    // })
    this.myForm.reset({
      nombre: 'Patatas',
      existencias: 500

    })
  }

  isValidField(field: string){
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  save(){
    
    if (this.myForm.invalid){

      this.myForm.markAllAsTouched()
      return
    }
    this.myForm.reset({
      nombre: 'Tomates',
      existencias: 500
    })
    console.log(this.myForm.value)
  }

}
