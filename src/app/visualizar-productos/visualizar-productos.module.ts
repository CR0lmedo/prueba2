import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarProductosPageRoutingModule } from './visualizar-productos-routing.module';

import { VisualizarProductosPage } from './visualizar-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarProductosPageRoutingModule
  ],
  declarations: [VisualizarProductosPage]
})
export class VisualizarProductosPageModule {}
