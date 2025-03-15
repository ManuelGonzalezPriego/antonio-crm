import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './alumno.component';

const routes: Routes = [
  { path: '', component: AlumnosComponent },
  {
    path: 'add-alumno',
    loadChildren: () => import('./add-alumno/add-alumno.module').then(m => m.AddAlumnoModule)
  },
  {
    path: 'edit-alumno',
    loadChildren: () => import('./edit-alumno/edit-alumno.module').then(m => m.EditAlumnoModule)
  },
  {
    path: 'delete-alumno',
    loadChildren: () => import('./delete-alumno/delete-alumno.module').then(m => m.DeleteAlumnoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
