import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() data: any;

  constructor() {
    // console.log(this.data);
  }

  ngOnInit(): void {
    // console.log(this.data);
  }

}
