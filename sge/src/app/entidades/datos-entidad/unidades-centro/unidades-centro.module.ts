import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesCentroRoutingModule } from './unidades-centro-routing.module';
import { UnidadesCentroComponent } from './unidades-centro.component';
import { CrudMaterialModule } from '../../../modules/crud-material/crud-material.module';
import { DatosUnidadCentroComponent } from './datos-unidad-centro/datodatos-unidad-cenrtro.component';


@NgModule({
  declarations: [UnidadesCentroComponent],
  imports: [
    CommonModule,
    UnidadesCentroRoutingModule,
    CrudMaterialModule,
    DatosUnidadCentroComponent
  ],
  exports:[UnidadesCentroComponent]
})
export class UnidadesCentroModule { }
