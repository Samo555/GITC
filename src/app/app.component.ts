import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitc-group-2';
  private num: number = 456;
  
  log (test: string | number) {
    let a = 'hello';
    // console.log(a);
    // console.log(test);
    console.log(this.num);
    // console.log(this);
  }
}
