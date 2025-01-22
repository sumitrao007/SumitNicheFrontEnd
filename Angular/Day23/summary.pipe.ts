import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any,start:number,end:number): any {
    
    let temp=(<string> value);
    // return (temp.substring(0,25)+"...");
    return (temp.substring(start,end)+"...");
  }

}
