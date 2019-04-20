//generic libs
import { NgModule } from '@angular/core';
//router
import { Routes, RouterModule } from '@angular/router';
//component
import { CotizacionComponent } from './cotizacion/cotizacion.component';

const routes: Routes = [
  {
    path: '',
    component: CotizacionComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
