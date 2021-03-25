import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(credit:any): unknown {
    return 'product price' + credit + 'TN';
  }

}
