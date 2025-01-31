import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { Permises } from 'src/app/shared/interfaces/api-response';


import { AddUnidadComponent } from './add-unidad-centro/add-unidad.component';
import { EditUnidadComponent } from './edit-unidad-centro/edit-unidad.component';
import { DeleteUnidadComponent } from './delete-unidad-centro/delete-unidad.component';
import { Entidad } from '../../../shared/interfaces/entidad';
import { EntidadesService } from '../../../services/entidades.service';
import { UnidadCentro } from 'src/app/shared/interfaces/unidad-centro';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';

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

  displayedColumns: string[];
  private filterValues = {id_unidad_centro: '', unidad_centro: '', id_ciclo: '', observaciones: ''};

  constructor(
    public dialog: MatDialog,
    private unidadesService: UnidadesCentroService,
    private overlay: Overlay,

  ) { }

  ngOnInit(): void {
    this.getUnidadesCentro();
    this.createFilter();
    this.onChanges();
  }


  async getUnidadesCentro() {
    const RESPONSE = await this.unidadesService.get().toPromise();
    this.permises = RESPONSE.permises;

    if (RESPONSE.ok) {
      this.permises = RESPONSE.permises;
      this.unidadesService.unidadCentro = RESPONSE.data as UnidadCentro[];
      this.displayedColumns = ['id_unidad_centro', 'unidad_centro', 'id_ciclo', 'observaciones'];
      this.dataSource.data = this.unidadesService.unidadCentro;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.createFilter();
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

  async deleteUnidadCentro(unidad: UnidadCentro) {
    const dialogRef = this.dialog.open(DeleteUnidadComponent, { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
    const RESULT = await dialogRef.afterClosed().toPromise();
    if (RESULT) {
      if (RESULT.ok) {
        this.ngOnInit();
      }
    }
  }


  createFilter(): (unidad: UnidadCentro, filter: string) => boolean {
    const filterFunction = (unidad: UnidadCentro, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);

      return unidad.id_ciclo.toString().indexOf(searchTerms.id_ciclo) !== -1
        && unidad.id_unidad_centro.toString().indexOf(searchTerms.id_unidad_centro) !== -1
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
