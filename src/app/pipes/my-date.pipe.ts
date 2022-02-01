import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {
  arr = ["հունվար", "պետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"]

  transform(value: any): unknown {
    const year = value.getFullYear();
    const month = value.getMonth();
    const day = value.getDate();
    const bb = this.arr[month]
    return `${year} ${bb} ${day}`;
  }

}
