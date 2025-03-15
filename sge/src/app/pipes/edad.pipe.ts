import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(fecha:string): number|null {
    const fechaNacimiento = new Date(fecha);
    if(!fechaNacimiento) return;

    const toDay = new Date();


    let edad = toDay.getFullYear() - fechaNacimiento.getFullYear();

    // Si el cumpleaños aún no ha ocurrido este año, restamos 1 a la edad
    if (toDay.getMonth() < fechaNacimiento.getMonth() || (toDay.getMonth() === fechaNacimiento.getMonth() && toDay.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  }

}
