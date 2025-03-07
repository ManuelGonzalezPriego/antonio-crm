import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosEntidadRoutingModule } from './datos-entidad-routing.module';
import {  DatosUnidadCentroComponent } from './datos-entidad.component';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';
//import { CrudMaterialModule } from '../../modules/crud-material/crud-material.module';

@NgModule({
  declarations: [DatosUnidadCentroComponent],
  imports: [
    CommonModule,
    DatosEntidadRoutingModule,
    CrudMaterialModule
  ]
})
export class DatosEntidadModule { }
