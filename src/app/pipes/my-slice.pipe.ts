import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySlice'
})
export class MySlicePipe implements PipeTransform {

  transform(value: string, ...args: number[]): any {
    return value.split('').slice(args[0], args[1]).join('');
  }

}
