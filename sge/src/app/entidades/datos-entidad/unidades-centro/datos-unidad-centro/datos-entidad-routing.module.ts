import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarUnidadCentroComponent } from './datos-entidad.component';


const routes: Routes = [
  {
    path: '',
    component: EditarUnidadCentroComponent,
    redirectTo: 'editar-entidad-reunion'
  },
  // {
  //   path: 'editar-entidad-reunion',
  //   loadChildren: () => import('./datos-basicos-entidad/datos-basicos-entidad.module').then(m => m.DatosBasicosEntidadModule),
  //   outlet: 'sidebar'
  // },
  // {
  //   path: 'alumno-unidad-centro',
  //   loadChildren: () => import('./contactos-entidad/contactos-entidad.module').then(m => m.ContactosEntidadModule),
  //   outlet: 'sidebar'}
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosEntidadRoutingModule { }
