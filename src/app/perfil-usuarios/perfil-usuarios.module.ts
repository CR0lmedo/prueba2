import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUsuariosPageRoutingModule } from './perfil-usuarios-routing.module';

import { PerfilUsuariosPage } from './perfil-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUsuariosPageRoutingModule
  ],
  declarations: [PerfilUsuariosPage]
})
export class PerfilUsuariosPageModule {}
