import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    age: ['', Validators.required],
    number: ['', Validators.required],
  })

  html: string = '<p>This is a text</p>';


  response: any[] = [];
  id!: number;

  @ViewChild('child') home_child: any;
  @ViewChild('p_el') p_el: any;

  constructor(public request: RequestService,
              public fb: FormBuilder
              ) { 
    console.log('constructor');
    
  }


  ngOnInit(): void {
    this.getMembers();
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
      console.log(this.home_child.clickMe());
      console.log(this.p_el.nativeElement);
      this.p_el.nativeElement.style.color = 'red';
  }

  getMembers() {
    this.request.get(`${environment.url}/people`).subscribe(
      (res: any) => {
        // console.log(res)
        this.response = res
      }
    )
  }

  deleteMember(id: number) {
    if(confirm('Are u sure?')) {
      this.request.delete(`${environment.url}/people/${id}`).subscribe(() => {
        this.getMembers()
      })
    } else {
      alert('Deletion canceled')
    }
  }

  editItem(value: any) {
    // this.id = value['id'];
    // this.form.patchValue(value);
  }

  send() {
    // console.log(this.form.value);
    // this.request.edit(`${environment.url}/people/${this.id}`, this.form.value).subscribe(() => {
    //   this.getMembers();
    //   this.form.reset();
    // })

    this.request.create(`${environment.url}/people`, this.form.value).subscribe(() => {
      this.getMembers();
      this.form.reset();
    })
  }

  toParent(e: any) {
    console.log(e);
  }
}