import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumno-routing.module';
import { AlumnosComponent } from './alumno.component';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';
import { EdadPipe } from 'src/app/pipes/edad.pipe';


@NgModule({
  declarations: [AlumnosComponent, EdadPipe],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    CrudMaterialModule
  ]
})
export class AlumnosModule { }
