import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesCentroRoutingModule } from './unidades-centro-routing.module';
import { UnidadesCentroComponent } from './unidades-centro.component';
import { CrudMaterialModule } from '../../../modules/crud-material/crud-material.module';
import { DatosEntidadModule } from '../datos-entidad.module';


@NgModule({
  declarations: [UnidadesCentroComponent],
  imports: [
    CommonModule,
    UnidadesCentroRoutingModule,
    CrudMaterialModule,
    DatosEntidadModule
  ]
})
export class UnidadesCentroModule { }
