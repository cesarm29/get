//generic libs
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
//service
import { CotizacionesService } from '../services/cotizaciones.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  //vars msj
  msg: string = '';
  msgex: string = '';
  //var form
  loadForm: FormGroup;
  //var submitted
  submitted = false;
  //var listaMarcas
  listaMarcas: {};
  //var listaModelos 
  listaModelos: {};
  //var listaAnio 
  listaAnio: {};

  constructor(private http: Http, private formBuilder: FormBuilder, private cotizacionesService: CotizacionesService, private router: Router) { }

  ngOnInit() {
    //init form
    this.loadForm = this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      email: ['', Validators.required]
    });
    //init services charge
    this.getMarca();
    this.getAnio();

  }

  //get form controls
  get f() { return this.loadForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loadForm.invalid) {
      return;
    } else {
      //send to ws
      this.cotizacionesService.saveCotizacion(this.loadForm.value.marca, this.loadForm.value.modelo, this.loadForm.value.anio, this.loadForm.value.email)
        .subscribe(
          response => {
            console.log(response);
            if (response.respuesta == "Success") {
              this.msgex = "Cotizacion creada exitosamente";
            } else {
              this.msg = "Error al crear la cotizacion";
            }
          },
          error => {
            console.log('error', error)
          });

    }
  }

  getMarca() {
    //send to ws
    this.cotizacionesService.getDataMarca()
      .subscribe(
        response => {
          this.listaMarcas = response.rows;
        },
        error => {
          console.log('error', error)
        });
  }

  getModelo(id) {
    //send to ws
    this.cotizacionesService.getDataModelo(id)
      .subscribe(
        response => {
          this.listaModelos = response.rows;
        },
        error => {
          console.log('error', error)
        });
  }

  getAnio() {
    //send to ws
    this.cotizacionesService.getDataAnio()
      .subscribe(
        response => {
          this.listaAnio = response.rows;
        },
        error => {
          console.log('error', error)
        });
  }

  closeAlert(): void {
    this.msg = '';
  }

  closeAlertEx(): void {
    this.msgex = '';
  }
}
