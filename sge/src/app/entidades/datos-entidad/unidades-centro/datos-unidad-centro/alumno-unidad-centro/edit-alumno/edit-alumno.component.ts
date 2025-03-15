import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ALUMNOS_UNIDAD_CENTRO, CLOSE, ERROR } from 'src/app/shared/messages';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/app/shared/interfaces/alumno';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.scss']
})
export class DatosEditAlumnoComponent implements OnInit {

  alumnoForm: FormGroup;
  ENTIDAD: String;
  reg = /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/i;

  constructor(
    public dialogRef: MatDialogRef<DatosEditAlumnoComponent>,
    private snackBar: MatSnackBar,
    private alumnosService: AlumnosService,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno,
  ) { }

  ngOnInit(): void {
    this.setForm();
  }



  setForm() {
    console.log(this.alumno);
    this.alumnoForm = new FormGroup({
      id_unidad_centro:new FormControl(this.alumno.id_unidad_centro, Validators.required),
      nombre: new FormControl(this.alumno.nombre, [Validators.required, Validators.maxLength(100)]),
      apellidos: new FormControl(this.alumno.apellidos, [Validators.required, Validators.maxLength(100)]),
      fecha_nacimiento: new FormControl(new Date(this.alumno.fecha_nacimiento),[Validators.required]),
      id_documento: new FormControl(this.alumno.id_documento, [Validators.required, Validators.maxLength(20)]),
      linkedin: new FormControl(this.alumno.linkedin, [Validators.pattern(this.reg),Validators.maxLength(255)]),
      nivel_ingles: new FormControl(this.alumno.nivel_ingles),
      minusvalia: new FormControl(this.alumno.minusvalia, [Validators.min(0), Validators.max(100)]),
      otra_formacion: new FormControl(this.alumno.otraFormacion, Validators.maxLength(500))
    });
    this.ENTIDAD = ALUMNOS_UNIDAD_CENTRO;
  }

  async confirmEdit() {
    if (this.alumnoForm.valid) {
      const alumnoFormulario = this.alumnoForm.value;

      // Esto lo hacemos de esta forma devido a que la fecha que manda el formulario es una fehca con muchos datos,
      // y la forma en la que tenemos que mandar los datos al backend es YYYY-MM-DD y no YYYY-MM-DDTHH:MM:SSZ
      //(dicho formato se ve así por consola Fri Jan 01 2016 00:00:00 GMT+0100 (hora estándar de Europa central))
      alumnoFormulario.fecha_nacimiento = alumnoFormulario.fecha_nacimiento.toISOString().split('T')[0];
      try {
        const RESPONSE = await this.alumnosService.editAlumno(alumnoFormulario).toPromise();
        console.log('Respuesta del backend:', RESPONSE);

        if (RESPONSE.ok) {
          this.snackBar.open(RESPONSE.message, CLOSE, { duration: 5000 });
          this.dialogRef.close({ ok: RESPONSE.ok, data: RESPONSE.data });
        } else {
          this.snackBar.open(RESPONSE.message || ERROR, CLOSE, { duration: 5000 });
        }
      } catch (error) {
        console.error('Error al llamar al servicio:', error);
        this.snackBar.open(ERROR, CLOSE, { duration: 5000 });
      }
    } else {
      this.snackBar.open(ERROR, CLOSE, { duration: 5000 });
    }
  }

  onNoClick() {
    this.dialogRef.close({ ok: false });
  }
}
