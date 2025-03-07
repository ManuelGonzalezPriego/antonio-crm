export interface Alumno {
  nombre: string;
  apellidos: string;
  fechaNacimiento: Date;
  idDocumento: string; // DNI, NIE o Pasaporte (PK en BBDD)
  linkedin?: string; // Validar URL antes de guardar
  nivelIngles: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  minusvalia: number; // Rango de 0 a 100
  otraFormacion?: string;
}
