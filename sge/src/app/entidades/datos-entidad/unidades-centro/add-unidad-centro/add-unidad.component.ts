import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CLOSE, INVALID_FORM } from 'src/app/shared/messages';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { UnidadCentro } from 'src/app/shared/interfaces/unidad-centro';

@Component({
  selector: 'app-add-unidad',
  templateUrl: './add-unidad.component.html',
  styleUrls: ['./add-unidad.component.scss']
})
export class AddUnidadComponent implements OnInit {
  unidadForm: FormGroup;
  ciclos: UnidadCentro[];

  ENTIDAD: String;

  constructor(
    public dialogRef: MatDialogRef<AddUnidadComponent>,
    private servicioUnidades: UnidadesCentroService,
    private snackBar: MatSnackBar,

  ){ }

  ngOnInit(): void {
    this.unidadForm = new FormGroup({
      id_ciclo: new FormControl(null, Validators.required),
      unidad_centro: new FormControl(null, Validators.required),
      observaciones: new FormControl(null)
    });

    this.getCiclos();

  }

  async confirmAdd() {
    if (this.unidadForm.valid) {
      const unidad = this.unidadForm.value as UnidadCentro;

      const RESPONSE = await this.servicioUnidades.addUnidadCentro(unidad).toPromise();
      if (RESPONSE.ok) {
        this.snackBar.open(RESPONSE.message, CLOSE, { duration: 5000 });
        this.dialogRef.close({ok: RESPONSE.ok, data: RESPONSE.data});
      } else {
        this.snackBar.open(RESPONSE.message, CLOSE, { duration: 5000 });
      }
    } else {
      this.snackBar.open(INVALID_FORM, CLOSE, { duration: 5000 });
    }
  }

  async getCiclos(){
    const RESPONSE = await this.servicioUnidades.getAllUnidadesCentro().toPromise();
    if (RESPONSE.ok){
      this.ciclos = RESPONSE.data as UnidadCentro[];
    }
  }

  onNoClick() {
    this.dialogRef.close({ok: false});
  }
}
