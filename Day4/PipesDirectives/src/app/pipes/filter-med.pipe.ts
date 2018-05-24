import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

@Pipe({
  name: 'filterMed'
})
export class FilterMedPipe implements PipeTransform {

  transform(collection: any[], field: any, value: any): any {
    if (!collection) {
      return[];
    }
    if (!value || !field) {
      return collection;
    }
    console.log(typeof(field));
    if (isNumber(parseInt(field))) {
      console.log('working ');
      return collection.filter(item => item[field].toString().includes(value));

    } else {
      return collection.filter(item => item[field].toLowerCase().includes(value.toLowerCase()));
    }
  }

}
