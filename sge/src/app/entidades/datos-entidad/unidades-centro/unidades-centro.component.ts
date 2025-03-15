import { UnidadCentro } from './../../../shared/interfaces/unidad-centro';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { Permises } from 'src/app/shared/interfaces/api-response';


import { AddUnidadComponent } from './add-unidad-centro/add-unidad.component';
import { EditUnidadComponent } from './edit-unidad-centro/edit-unidad.component';
import { DeleteUnidadComponent } from './delete-unidad-centro/delete-unidad.component';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { EditarUnidadCentro } from 'src/app/shared/interfaces/unidad-centro-editar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosUnidadCentroComponent } from './datos-unidad-centro/datos-unidades-centro.component';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/app/shared/interfaces/alumno';

@Component({
  selector: 'app-unidades-centro',
  templateUrl: './unidades-centro.component.html',
  styleUrls: ['./unidades-centro.component.scss']
})
export class UnidadesCentroComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<UnidadCentro> = new MatTableDataSource();

  idUnidadCentro = new FormControl();
  unidadCentro = new FormControl();
  idCiclo = new FormControl();
  observaciones = new FormControl();

  permises: Permises;

  selection: SelectionModel<UnidadCentro>;
  unidadCentroInterface: UnidadCentro;

  unidadesCentroSelected: UnidadCentro [] = [];
  isChecked = false;
  isCheckedAll = false;
  pageSizeChecked: number;
  pageIndexChecked: number;

  displayedColumns: string[];
  private filterValues = {id_unidad_centro: '', unidad_centro: '', id_ciclo: '', observaciones: ''};

  constructor(
    public dialog: MatDialog,
    private unidadesService: UnidadesCentroService,
    private alumnosService: AlumnosService,
    private overlay: Overlay,
    private snackBar: MatSnackBar,

  ) {  }

  ngOnInit(): void {
    this.getUnidadesCentro();
    this.createFilter();
    this.onChanges();

  }

  async getUnidadesCentro() {
    const RESPONSE = await this.unidadesService.getAllUnidadesCentro().toPromise();
    this.permises = RESPONSE.permises;

    if (RESPONSE.ok) {
      this.permises = RESPONSE.permises;
      this.unidadesService.unidadCentro = RESPONSE.data as UnidadCentro[];
      this.displayedColumns = ['id_unidad_centro', 'unidad_centro', 'id_ciclo', 'observaciones','actions'];
      this.dataSource.data = this.unidadesService.unidadCentro;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.createFilter();

      this.selection = new SelectionModel<UnidadCentro>(false, [this.unidadCentroInterface]);
      this.onChanges();
    }
  }

  async addUnidadCentro() {
    const dialogRef = this.dialog.open(AddUnidadComponent, { scrollStrategy: this.overlay.scrollStrategies.noop() });
    const RESULT = await dialogRef.afterClosed().toPromise();
    if (RESULT) {
      if (RESULT.ok) {
        this.ngOnInit();
      }
    }
  }

  async editUnidadCentro(unidad: UnidadCentro) {
    const dialogRef = this.dialog.open(EditUnidadComponent, { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
    const RESULT = await dialogRef.afterClosed().toPromise();
    if (RESULT) {
       if (RESULT.ok) {
        this.ngOnInit();
      }
    }
  }

  // async editUnidadCentro(unidad: UnidadCentro) {
  //   const dialogRef = this.dialog.open(EditUnidadComponent, { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
  //   const RESULT = await dialogRef.afterClosed().toPromise();
  //   if (RESULT) {
  //     if (RESULT.ok) {
  //       this.ngOnInit();
  //     }
  //   }
  // }

  async deleteUnidadCentro(unidad: UnidadCentro) {
    const dialogRef = this.dialog.open(DeleteUnidadComponent, { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
    const RESULT = await dialogRef.afterClosed().toPromise();
    if (RESULT) {
      if (RESULT.ok) {
        this.ngOnInit();
      }
    }
  }

  async getAlumnos(id:number){
    const RESPONSE = await this.alumnosService.getAlumnosIdCentro(id).toPromise();
    if (RESPONSE.ok){
      return RESPONSE.data as Alumno[];
    }
  }

  async datosUnidadCentro(unidadCentro: UnidadCentro) {
    const UNIDADCENTRO = unidadCentro;
    const ALUMNOS = await this.getAlumnos(unidadCentro.id_unidad_centro);
    if (UNIDADCENTRO) {
        const dialogRef = this.dialog.open(DatosUnidadCentroComponent, {
          width: '70em',
          maxWidth: '70em',
          scrollStrategy: this.overlay.scrollStrategies.noop(),
          disableClose: true,
          data: {
            unidad_centro:UNIDADCENTRO,
            alumnos: ALUMNOS
          }
        });

        const RESULT = await dialogRef.afterClosed().toPromise();
        await this.getUnidadesCentro();

        // let var_reunion;
        // var_reunion = this.originalDatasource.filter(reunion => {
        //   return reunion.id_reunion === RESULT.reunion.id_reunion;
        // });

        // this.ngOnInit();
        // this.selection = new SelectionModel<PublicacionDHL>(false, [publicacio[0]]);
        // this.fiterEstados();

        // this.selection = new SelectionModel<Reunion>(false, [publicacio[0]]);

      }
    }

  openSnackbarChooseAllPublicacion() {
    const snackBarRef = this.snackBar.open(
      `Deseas Seleccionar los ${this.dataSource.filteredData.length} resultados`,
      'Seleccionar',
      { duration: 5000 }
    );
    snackBarRef.afterDismissed().subscribe(info => {
      if (info.dismissedByAction === true) {
        this.isCheckedAll = true;
        this.unidadesCentroSelected = [];
        this.dataSource.filteredData.forEach(publicacion => {
          this.unidadesCentroSelected.push(publicacion);
        });
      }
    });
  }

  createFilter(): (unidad: UnidadCentro, filter: string) => boolean {
    const filterFunction = (unidad: UnidadCentro, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);

      return unidad.id_ciclo.toString().indexOf(searchTerms.id_ciclo) !== -1
        && unidad.observaciones.toLowerCase().indexOf(searchTerms.observaciones.toLowerCase()) !== -1
        && unidad.unidad_centro.toLowerCase().indexOf(searchTerms.unidad_centro.toLowerCase()) !== -1;
        // TODO Arreglar esto
    };

    return filterFunction;
  }

  onChanges() {
    this.idUnidadCentro.valueChanges.subscribe(value => {
        this.filterValues.id_unidad_centro = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.unidadCentro.valueChanges
    .subscribe(value => {
        this.filterValues.unidad_centro = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.idCiclo.valueChanges
    .subscribe(value => {
        this.filterValues.id_ciclo = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.observaciones.valueChanges
    .subscribe(value => {
        this.filterValues.observaciones = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }
}



