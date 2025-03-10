import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosEntidadRoutingModule } from './datodatos-unidad-cenrtro-routing.module';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';
import { DatosUnidadCentroComponent } from './datodatos-unidad-cenrtro.component';

//import { CrudMaterialModule } from '../../modules/crud-material/crud-material.module';

@NgModule({
  declarations: [DatosUnidadCentroComponent],
  imports: [
    CommonModule,
    DatosEntidadRoutingModule,
    CrudMaterialModule
  ],
  exports:[DatosUnidadCentroComponent]
})
export class DatosUnidadCentroModule { }
