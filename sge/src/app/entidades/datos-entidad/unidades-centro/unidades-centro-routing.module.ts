import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadesCentroComponent } from './unidades-centro.component';

const routes: Routes = [
  { path: '', component: UnidadesCentroComponent },
  {
    path: 'add-unidad-centro',
    loadChildren: () => import('./add-unidad-centro/add-unidad.module').then(m => m.AddUnidadModule)
  },
  {
    path: 'edit-unidad-centro',
    loadChildren: () => import('./edit-unidad-centro/edit-unidad.module').then(m => m.EditUnidadModule)
  },
  {
    path: 'delete-unidad-centro',
    loadChildren: () => import('./delete-unidad-centro/delete-unidad.module').then(m => m.DeleteUnidadModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesCentroRoutingModule { }
