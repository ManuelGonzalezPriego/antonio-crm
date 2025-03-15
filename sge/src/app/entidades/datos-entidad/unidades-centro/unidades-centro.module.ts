import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesCentroRoutingModule } from './unidades-centro-routing.module';
import { UnidadesCentroComponent } from './unidades-centro.component';
import { CrudMaterialModule } from '../../../modules/crud-material/crud-material.module';
import { DatosUnidadesCentroModule } from './datos-unidad-centro/datos-unidades-centro..module';


@NgModule({
  declarations: [UnidadesCentroComponent],
  imports: [
    CommonModule,
    UnidadesCentroRoutingModule,
    CrudMaterialModule,
    DatosUnidadesCentroModule
  ]
})
export class UnidadesCentroModule { }
