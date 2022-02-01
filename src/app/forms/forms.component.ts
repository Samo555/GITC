import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('',
      [Validators.minLength(2), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('',
      [Validators.min(18), Validators.max(100)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{5,}$/)
    ])
  })

  constructor() { }

  ngOnInit(): void {
    // this.form.setValue({
    //   first_name: 'Name',
    //   last_name: 'Last Name',
    //   email: 'test@mail.ru',
    //   age: 18,
    //   phone: '+37493930394'
    // });
    this.form.patchValue({
      email: 'test@mail.ru',
      age: 18,
    })
  }

  send() {
    console.log(this.form);
    // this.resetForm();

    console.log(this.form.get('email')?.touched); 
    console.log(this.form.get('email')?.dirty); 
    console.log(this.form.get('email')?.hasError('pattern')); 
    console.log(this.form.get('first_name')?.hasError('pattern')); 
  }

  resetForm() {
    this.form.reset({age: 89, last_name: 'last name'});
  }

}
