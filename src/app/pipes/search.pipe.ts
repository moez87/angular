import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any[], search: any): any[] {
    if (search) {
      let searchText = search.toLowerCase();
      return array.filter((x: any) => x.productName.toLowerCase().includes(searchText) || x.productDescription.toLowerCase().includes(searchText))

    }
    else {
      return array;
    }
  }

}
