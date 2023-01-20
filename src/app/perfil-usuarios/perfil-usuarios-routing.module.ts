import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsuariosPage } from './perfil-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUsuariosPageRoutingModule {}
