import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CotizacionesService {
  //constructor init
  constructor(private http: Http) { }

  //service to backend api get data mysql marca
  getDataMarca() {
    //json body send 
    var body = "";
    //headers
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    //return data
    return this.http.get('http://localhost:3000/getdatamarca', body)
      .map((response: Response) => response.json())
  }
  //service to backend api get data mysql modelo
  getDataModelo(id) {
    //json body send 
    var body = "id=" + id;
    //headers
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    //return data
    return this.http.post('http://localhost:3000/getdatamodelo', body, options)
      .map((response: Response) => response.json())
  }
  //service to backend api get data mysql anio
  getDataAnio() {
    //json body send 
    var body = "";
    //headers
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    //return data
    return this.http.get('http://localhost:3000/getdataanio', body)
      .map((response: Response) => response.json())
  }
  //service to backend api post data to api mysql table cotizaciones
  saveCotizacion(marca, modelo, anio, email) {
    //json body send 
    var body = "marca=" + marca + "&modelo=" + modelo + "&anio=" + anio + "&email=" + email;
    //headers
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/createcotizacion', body, options)
      .map((response: Response) => response.json())
  }


}
