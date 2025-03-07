import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { EditarUnidadCentro } from 'src/app/shared/interfaces/unidad-centro-editar';
import { CLOSE } from 'src/app/shared/messages';


@Component({
  selector: 'app-datos-unidadcentro',
  templateUrl: './datos-entidad.component.html',
  styleUrls: ['./datos-entidad.component.scss']
})
export class DatosUnidadCentroComponent implements OnInit {

  @ViewChild(RouterOutlet, {static: false}) outlet: RouterOutlet;
  rutaSeleccionada: string;
  lastRoute = '';
  entidadForm: FormGroup;

  constructor(
            private router: Router,
            @Inject(MAT_DIALOG_DATA) public editarUnidadCentro: EditarUnidadCentro,
            private unidadesCentroService: UnidadesCentroService,
            private snackBar: MatSnackBar,
            public dialogRef: MatDialogRef<DatosUnidadCentroComponent>,
            ) { }

  ngOnInit(): void {
    this.rutaSeleccionada = this.router.url.substring(1);
    this.rutaSeleccionada = this.rutaSeleccionada.split('/')[0];
    this.router.navigate([`/${ this.rutaSeleccionada }`, { outlets: { sidebar: 'datos-basicos-entidad' } }]);

    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet !== this.lastRoute) {
        this.lastRoute = this.rutaSeleccionada;
        this.outlet.deactivate();
      }
    });
    this.unidadesCentroService.setUnidadCentro(this.editarUnidadCentro.unidadCentro);
  }

  navega(ruta: string) {
    this.router.navigate([`/${ this.rutaSeleccionada }`, { outlets: { sidebar: ruta } }]);
  }

  async save() {
      const RESPONSE = await this.unidadesCentroService.editUnidadCentro(this.editarUnidadCentro.unidadCentro).toPromise();
      if (RESPONSE.ok) {
        this.snackBar.open(RESPONSE.message, CLOSE, { duration: 5000 });
        this.dialogRef.close({ok: RESPONSE.ok, entidad: this.editarUnidadCentro.unidadCentro});
        //this.entidadService.entidades = (await this.entidadService.getAllEntidades().toPromise()).data;
      } else {
        this.snackBar.open(RESPONSE.message, CLOSE, { duration: 5000 });
      }
    }

  onNoClick() {
    this.dialogRef.close({entidad: this.unidadesCentroService.unidadCentro});
  }
}
