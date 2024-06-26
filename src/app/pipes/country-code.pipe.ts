import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true,
})
export class CountryCodePipe implements PipeTransform {
  transform(value: string, countryName?: string): string {
    let code = '+91';
    if (countryName === 'USA') code = '+1';
    return `${code} ${value}`;
  }
}
