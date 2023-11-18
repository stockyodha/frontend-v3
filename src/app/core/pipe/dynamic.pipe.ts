import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

@Pipe({ name: 'dynamicPipe' })
export class DynamicPipe implements PipeTransform {
  constructor(
    private _decimalPipe: DecimalPipe,
    private _currencyPipe: CurrencyPipe,
    private _datePipe: DatePipe
  ) {}
  transform(value: string, modifier: string): string {
    const modifiers = modifier.split(',');
    for (const mod of modifiers) {
      if (mod == 'lowercase') {
        value = value.toLowerCase();
      }
      if (mod == 'uppercase') {
        value = value.toUpperCase();
      }
      if (mod == 'number') {
        value = this._decimalPipe.transform(value, '1.2-2') + '';
      }
      if (mod == 'currency') {
        value =
          this._currencyPipe.transform(value, 'INR', 'symbol', '1.2-2') + '';
      }
      if (mod == 'percent') {
        value = this._decimalPipe.transform(value, '1.2-2') + '%';
      }
      if (mod == 'date') {
        value = this._datePipe.transform(value, 'MMM d, yyyy') + '';
      }
    }
    return value;
  }
}
