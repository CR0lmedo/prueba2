import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {AuthService} from '../servicio/auth.service'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public formulario!:FormGroup;

  constructor(
    private builder:FormBuilder,
    private service:AuthService) { }

  ngOnInit() {
  }

  ionWiewWillEnter(){
    this.formulario= this.builder.group({
      username:['kminchelle'],
      password:['0lelplR']
    })
  }
  public enviar(){
    this.service.principal({
      username: this.formulario!.value('username'),
      password: this.formulario!.value('password')
    })
  }
}
