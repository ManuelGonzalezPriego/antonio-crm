import { Alumno } from './alumno';
import { UnidadCentro } from './unidad-centro';

export interface EditarUnidadCentro {
  unidadCentro: UnidadCentro;
  alumnos?: Alumno[];
}
