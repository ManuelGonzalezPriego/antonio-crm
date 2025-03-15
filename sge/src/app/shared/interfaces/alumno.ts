export interface Alumno {
  id_unidad_centro: number;
  nombre: string;
  apellidos: string;
  fecha_nacimiento: Date;
  id_documento: string; // DNI, NIE o Pasaporte (PK en BBDD)
  linkedin?: string; // Validar URL antes de guardar
  nivel_ingles: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  minusvalia: number; // Rango de 0 a 100
  otraFormacion?: string;
}
