import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    // console.log(value);
    // console.log(args);
    return value.trim() + ' trim ';
  }

}
