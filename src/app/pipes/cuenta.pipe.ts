import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuenta'
})
export class CuentaPipe implements PipeTransform {

  transform(pgccuenta: any[], callback: (pgccuenta: any) => boolean): any {
    if (!pgccuenta || !callback) {

      if(pgccuenta.slice(1)){
        return pgccuenta;
      }
     
  }
  return pgccuenta.filter(pgccuenta => callback(pgccuenta));
  }

}
