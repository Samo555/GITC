import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent implements OnInit {

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl('')
  })

  members = [
    {id: 1,name: 'Mike', lastname: 'Smith', age: 18, gender: 'Male', email: 'mike@gmail.com'},
    {id: 2,name: 'Emily', lastname: 'Johnson', age: 19, gender: 'Female', email: 'emily@gmail.com'},
    {id: 3,name: 'John', lastname: 'Williams', age: 15, gender: 'Male', email: 'john@gmail.com'},
    {id: 4,name: 'Robert', lastname: 'Brown', age: 17, gender: 'Male', email: 'robert@gmail.com'},
    {id: 5,name: 'Emma', lastname: 'Jones', age: 22, gender: 'Female', email: 'emma@gmail.com'},
    {id: 6,name: 'William', lastname: 'Miller', age: 30, gender: 'Male', email: 'william@gmail.com'},
    {id: 7,name: 'David', lastname: 'Davis', age: 26, gender: 'Male', email: 'david@gmail.com'},
    {id: 8,name: 'Ava', lastname: 'Garcia', age: 23, gender: 'Female', email: 'ava@gmail.com'},
    {id: 9,name: 'Joseph', lastname: 'Rodriguez', age: 20, gender: 'Male', email: 'joseph@gmail.com'},
    {id: 10,name: 'Thomas', lastname: 'Wilson', age: 28, gender: 'Male', email: 'thomas@gmail.com'},
  ]

  formtf = false;
  but = 0;

  constructor() { }

  ngOnInit(): void {
  }

  delate(indeks: number) {
    this.members.splice(indeks, 1)
  }

  click(index: number) {
    this.formtf = true;
    this.form.setValue({
      first_name: this.members[index].name,
      last_name: this.members[index].lastname,
      age: this.members[index].age,
      gender: this.members[index].gender,
      email: this.members[index].email,
    });
    this.but = index;
  }



  save() {
    this.members[this.but].name = this.form.value['first_name'];
    this.members[this.but].lastname = this.form.value['last_name'];
    this.members[this.but].age = this.form.value['age'];
    this.members[this.but].gender = this.form.value['gender'];
    this.members[this.but].email = this.form.value['email'];
    this.formtf = false;
  }

}
