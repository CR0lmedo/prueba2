import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { auth, authFull } from '../modelos/auth'
import { AlertController } from '@ionic/angular';
import { async,Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public URL_LOGIN = 'https://dummyjson.com/auth/login';
  public estado: boolean = false;
  public datosUsuarios!: authFull | null;
  public token: string | undefined;
  public estadoUsuario: boolean = false;


  constructor
    (
      private http: HttpClient,
      private reute: Router,
      private alert: AlertController
    ) { }

  public principal({username,password}: auth) {
    this.estado = true;
    this.http.post<authFull>(this.URL_LOGIN,
      {
        username,
        password
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe(async (datos) => {
        this.datosUsuarios = datos;
        this.token = this.datosUsuarios?.token;
        if (datos) {
          const alert = await this.alert.create({
            header: 'datos correctos',
            buttons:
              [{
                text: 'ok',
                role: 'confirm'
              }]
          });
          await alert.present();
          console.log(this.datosUsuarios);
          this.estadoUsuario = true;
          this.reute.navigate(['/productos'])
        }
  })
  }


  public obtenerEstado() {
    return this.estado;
  }
  public obtenerDatosUsuarios() {
    return this.datosUsuarios;
  }
  public obtenerEstadoUsuario() {
    return this.estadoUsuario;
  }
  public obtenerToken() {
    return this.token;
  }
}

