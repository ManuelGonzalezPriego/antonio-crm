import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadesService } from 'src/app/services/unidades.service';
import { Unidad } from 'src/app/shared/interfaces/unidad';
import { CLOSE, ENTIDAD_UNIDAD, ERROR } from 'src/app/shared/messages';
import { Ciclo } from 'src/app/shared/interfaces/ciclo';
import { CiclosService } from 'src/app/services/ciclos.service';
import { UnidadDual } from 'src/app/shared/interfaces/unidad-dual';
import { UnidadesDualService } from 'src/app/services/unidades-dual.service';
import { MotivoNodual } from 'src/app/shared/interfaces/motivo-nodual';
import { MotivosNodualService } from 'src/app/services/motivos-nodual.service';
import { UnidadCentro } from 'src/app/shared/interfaces/unidad-centro';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';

@Component({
  selector: 'app-edit-unidad',
  templateUrl: './edit-unidad.component.html',
  styleUrls: ['./edit-unidad.component.scss']
})
export class EditUnidadComponent implements OnInit {

  unidadForm: FormGroup;
  ciclos: UnidadCentro[];

  // Para autocompletar...
  //familias: any[]
  //arrayFiltradoAutocomplete: any[] = [];
  //filteredOptions: Observable<any[]>;

  ENTIDAD: String;
  esDual = true;
  unidad:UnidadCentro;
  constructor(
    public dialogRef: MatDialogRef<EditUnidadComponent>,
    private snackBar: MatSnackBar,
    private servicioUnidades: UnidadesCentroService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { this.unidad=data.unidad_centro }

  ngOnInit(): void {
    this.setForm();

    // this.datosBasicosForm.valueChanges.subscribe(form => {
    //   this.entidadService.setDatosBasicosEntidad(form);
    // });

    this.unidadForm.valueChanges.subscribe(form => {
      this.servicioUnidades.setUnidadCentro(form);
    });
  }

  setForm() {
    this.ENTIDAD = ENTIDAD_UNIDAD;

    this.unidadForm = new FormGroup({
      unidad_centro: new FormControl(this.unidad.unidad_centro),
      id_ciclo: new FormControl(this.unidad.id_ciclo, Validators.required),
      observaciones: new FormControl(this.unidad.observaciones),
      id_unidad_centro: new FormControl(this.unidad.id_unidad_centro)
    });
  }

  async confirmEdit(){
    if (this.unidadForm.valid) {
      const unidadForm = this.unidadForm.value;

      const RESPONSE = await this.servicioUnidades.editUnidadCentro(unidadForm).toPromise();
      if (RESPONSE.ok) {
        this.snackBar.open(RESPONSE.message, CLOSE, { duration: 5000 });
        this.dialogRef.close({ ok: RESPONSE.ok, data: RESPONSE.data });
      } else {
        this.snackBar.open(RESPONSE.message, CLOSE, { duration: 5000 });
      }
    } else {
      this.snackBar.open(ERROR, CLOSE, { duration: 5000 });
    }
  }

  onNoClick() {
    this.dialogRef.close({ ok: false });
  }
}
