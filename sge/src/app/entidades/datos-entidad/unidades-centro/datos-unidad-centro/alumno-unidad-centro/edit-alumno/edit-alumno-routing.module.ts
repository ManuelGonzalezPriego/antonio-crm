import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosEditAlumnoComponent } from './edit-alumno.component';

const routes: Routes = [{ path: '', component: DatosEditAlumnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditContactoRoutingModule { }
