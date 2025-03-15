import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { Permises } from 'src/app/shared/interfaces/api-response';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { UnidadCentro } from 'src/app/shared/interfaces/unidad-centro';
import { Alumno } from 'src/app/shared/interfaces/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { DatosEditAlumnoComponent } from './edit-alumno/edit-alumno.component';
import { DeleteAlumnoComponent } from './delete-alumno/delete-alumno.component';
import { ResetPasswordComponent } from '../../../../../home/reset-password/reset-password.component';

@Component({
  selector: 'app-alumnos-entidad',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnosComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // Los datos de cada alumno
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource();

  // Filtros que vamos a usar
  nombre = new FormControl('');
  apellidos = new FormControl('');
  fechaNacimiento = new FormControl('');
  linkedin = new FormControl('');

  unidadCentro: UnidadCentro;
  permises: Permises;

  private filterValues = {
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    linkedin: ''
  };

  displayedColumns: string[];

  constructor(
    public dialog: MatDialog,
    private alumnosService: AlumnosService,
    private overlay: Overlay,
    public unidadesCentroService: UnidadesCentroService,
  ) {}

  ngOnInit(): void {
    this.unidadCentro = this.unidadesCentroService.unidadcentro;
    this.getAlumnosUnidadCentro(this.unidadCentro);
  }

  async addAlumno(idUnidadCentro: number) {
    const dialogRef = this.dialog.open(AddAlumnoComponent, {
      data: idUnidadCentro,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    const RESULT = await dialogRef.afterClosed().toPromise();
    if (RESULT && RESULT.ok) {
      this.ngOnInit();
    }
  }

  async deleteAlumno(alumno: Alumno) {
    const dialogRef = this.dialog.open(DeleteAlumnoComponent, {
      data: alumno,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    const RESULT = await dialogRef.afterClosed().toPromise();
    if (RESULT && RESULT.ok) {
      this.ngOnInit();
    }
  }

  async editAlumno(alumno: Alumno) {
    const dialogRef = this.dialog.open(DatosEditAlumnoComponent, {
      data: alumno,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    const RESULT = await dialogRef.afterClosed().toPromise();
    if (RESULT && RESULT.ok) {
      this.ngOnInit();
    }
  }

  async getAlumnosUnidadCentro(unidadCentro: UnidadCentro) {
    const RESPONSE = await this.alumnosService.getAlumnosIdCentro(unidadCentro.id_unidad_centro).toPromise();
    this.permises = RESPONSE.permises;

    if (RESPONSE.ok) {
      this.alumnosService.alumno = RESPONSE.data as Alumno[];

      this.displayedColumns = ['nombre', 'apellidos', 'edad', 'linkedin', 'actions'];
      this.dataSource.data = this.alumnosService.alumno;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.createFilter();
      this.onChanges();
    }
  }

  createFilter(): (alumno: Alumno, filter: string) => boolean {
    const filterFunction = (alumno: Alumno, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      return (
        alumno.nombre.toLowerCase().includes(searchTerms.nombre.toLowerCase()) &&
        alumno.apellidos.toLowerCase().includes(searchTerms.apellidos.toLowerCase()) &&
        alumno.fecha_nacimiento.toDateString().includes(searchTerms.fecha_nacimiento) &&
        alumno.linkedin.toLowerCase().includes(searchTerms.linkedin.toLowerCase())
      );
    };
    return filterFunction;
  }

  onChanges() {
    this.nombre.valueChanges.subscribe(value => {
      this.filterValues.nombre = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.apellidos.valueChanges.subscribe(value => {
      this.filterValues.apellidos = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.fechaNacimiento.valueChanges.subscribe(value => {
      this.filterValues.fechaNacimiento = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.linkedin.valueChanges.subscribe(value => {
      this.filterValues.linkedin = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

}
