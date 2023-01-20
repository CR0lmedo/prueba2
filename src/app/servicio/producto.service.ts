import { Injectable } from '@angular/core';
import { productos } from '../modelos/productos';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public URL_PRODUCTO = 'https://dummyjson.com/auth/products';
  public estado: boolean = false;
  public datosProductos!: productos;


  constructor
    (
      private http: HttpClient,
      private route: Router,
      private alert: AlertController
    ) { }

  public PrincipalPRO(token: string) {
    this.estado = true;
    this.http.get<productos>(this.URL_PRODUCTO,
      {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(async(datos)=>{
        this.datosProductos=datos;

      })

  }


}
