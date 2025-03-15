import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosUnidadCentroComponent } from './datos-unidades-centro.component';


const routes: Routes = [
  {
    path: '',
    component: DatosUnidadCentroComponent,
    redirectTo: 'editar-unidad-centro'
  },
  {
    path: 'editar-unidad-centro',
    loadChildren: () => import('../edit-unidad-centro/edit-unidad.module').then(m => m.EditUnidadModule),
    outlet: 'sidebar'
  },
  {
    path: 'alumno-unidad-centro',
    loadChildren: () => import('./alumno-unidad-centro/alumno.module').then(m => m.AlumnosModule),
    outlet: 'sidebar'}
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosUnidadesCentroRoutingModule { }
