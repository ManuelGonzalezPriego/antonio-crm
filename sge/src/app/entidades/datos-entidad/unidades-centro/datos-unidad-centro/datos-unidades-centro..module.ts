import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosUnidadesCentroRoutingModule } from './datos-unidades-centro-routing.module';
import {  DatosUnidadCentroComponent } from './datos-unidades-centro.component';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';

@NgModule({
  declarations: [DatosUnidadCentroComponent],
  imports: [
    CommonModule,
    DatosUnidadesCentroRoutingModule,
    CrudMaterialModule
  ]
})
export class DatosUnidadesCentroModule { }
