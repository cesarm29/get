import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//module
import { CotizacionComponent } from './cotizacion/cotizacion.component';
//service
import {CotizacionesService} from './services/cotizaciones.service';

@NgModule({
  declarations: [
    AppComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [CotizacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
