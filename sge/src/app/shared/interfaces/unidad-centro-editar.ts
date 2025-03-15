import { Alumno } from './alumno';
import { UnidadCentro } from './unidad-centro';

export interface EditarUnidadCentro {
  unidad_centro: UnidadCentro;
  alumnos?: Alumno[];
}
