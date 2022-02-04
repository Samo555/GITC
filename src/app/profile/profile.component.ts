import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }

}
