import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true,
})
export class ConvertPipe implements PipeTransform {
  transform(mile: number, targetUnit:string): any {
    if(!mile){
      return ;
    }
    switch(targetUnit){
      case 'km':
        return mile * 1.60934;
      case 'm':
        return mile * 1.60934 * 1000;
      case "cm":
        return mile * 1.60934 * 1000 * 1000;
      default:
        throw new Error("not supported unit :" + targetUnit)
    }
  }
}
