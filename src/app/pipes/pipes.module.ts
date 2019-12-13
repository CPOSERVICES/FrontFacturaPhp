import { NgModule } from '@angular/core';
import { CuentaPipe } from './cuenta.pipe';
CuentaPipe 



@NgModule({
  declarations: [
    CuentaPipe
  ],
  imports: [],
  exports:[
    CuentaPipe
  ]
})
export class PipesModule { }
