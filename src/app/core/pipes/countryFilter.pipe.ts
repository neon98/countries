import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models';

@Pipe({ name: 'countryFilterPipe' })
export class CountryFilterPipe implements PipeTransform {
  transform(items: Country[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.common.toLocaleLowerCase().includes(searchText);
    });
  }
}