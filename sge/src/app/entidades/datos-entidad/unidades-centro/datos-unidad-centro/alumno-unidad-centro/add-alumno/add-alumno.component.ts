import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contacto } from 'src/app/shared/interfaces/contacto';
import { ContactosService } from 'src/app/services/contactos.service';
import { CLOSE, INVALID_FORM, ALUMNOS_UNIDAD_CENTRO } from 'src/app/shared/messages';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { Provincia } from 'src/app/shared/interfaces/provincia';
import { ZonasService } from 'src/app/services/zonas.service';
import { Zona } from 'src/app/shared/interfaces/zona';
import { EntidadesService } from 'src/app/services/entidades.service';
import { Entidad } from 'src/app/shared/interfaces/entidad';
import { FamiliasService } from 'src/app/services/familias.service';
import { Familia } from 'src/app/shared/interfaces/familia';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/app/shared/interfaces/alumno';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.scss']
})
export class AddAlumnoComponent implements OnInit {
  alumnoForm: FormGroup;


  ENTIDAD: String;
  reg = /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/i;
  constructor(public dialogRef: MatDialogRef<AddAlumnoComponent>,
    private snackBar: MatSnackBar,
    private servicioAlumno: AlumnosService,
    @Inject(MAT_DIALOG_DATA) public idUnidadCentro: number,

  ){ }

  ngOnInit(): void {
    this.alumnoForm = new FormGroup({
      id_unidad_centro:new FormControl(this.idUnidadCentro, Validators.required),
      nombre:new FormControl(null,Validators.required),
      apellidos:new FormControl(null,Validators.required),
      fecha_nacimiento:new FormControl(null,Validators.required),
      id_documento:new FormControl(null,Validators.required), // DNI, NIE o Pasaporte (PK en BBDD)
      linkedin:new FormControl(null,Validators.pattern(this.reg)), // Validar URL antes de guardar
      nivel_ingles:new FormControl(null,Validators.required),
      minusvalia:new FormControl(null,Validators.required),// Rango de 0 a 100
      otraFormacion:new FormControl(null),
    });
    this.ENTIDAD = ALUMNOS_UNIDAD_CENTRO;

  }

  async confirmAdd() {
    if (this.alumnoForm.valid) {
      const alumno = this.alumnoForm.value as Alumno;
      const RESPONSE = await this.servicioAlumno.addAlumno(alumno).toPromise();
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

  onNoClick() {
    this.dialogRef.close({ok: false});
  }


}
