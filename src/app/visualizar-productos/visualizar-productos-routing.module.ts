import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarProductosPage } from './visualizar-productos.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarProductosPageRoutingModule {}
