import { Injectable } from '@angular/core';
import { Contacto } from '../shared/interfaces/contacto';
import { ApiResponse } from '../shared/interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../shared/common.service';
import { URL_API } from 'src/environments/environment';
import { Alumno } from '../shared/interfaces/alumno';

const ENDPOINT = 'alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumno: Alumno[];

  constructor(private http: HttpClient, private commonService: CommonService) { }
/*
  get() {
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, { headers: this.commonService.headers });
  }
*/
  getAlumnosIdCentro(idAlumnoCentro: number) {
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php?unidadCentro=${idAlumnoCentro}`, { headers: this.commonService.headers });
  }

  getAllAlumnos() {
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, { headers: this.commonService.headers });
  }

  addAlumno(alumno: Alumno) {
    const body = JSON.stringify(alumno);
    return this.http.post<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
  }

  editAlumno(alumno: Alumno) {
    const body = JSON.stringify(alumno);
    return this.http.put<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
  }

  deleteAlumno(id: number|string) {
    return this.http.delete<ApiResponse>(`${URL_API}/${ENDPOINT}.php?id=${id}`, {headers: this.commonService.headers });
  }


}
