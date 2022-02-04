import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  }) 

  constructor(public fb: FormBuilder,
              public router: Router
              ) { }

  ngOnInit(): void {
  }

  send() {
    console.log(this.form.value);
    localStorage.setItem('access_token', 'token');
    this.router.navigateByUrl('/profile');
  }
}
