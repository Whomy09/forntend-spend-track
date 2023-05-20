import { ref } from "vue";

export function validarFecha(fecha: string) {
  if (!fecha) return "El campo fecha no puede estar vacio";
  return true;
}

export function validarTipoDePago(tipoPago: string) {
  if (!tipoPago) return 'El campo tipo de pago no puede estar vacio';
  if (!isNaN(Number(tipoPago))) return 'No puede ingresar un número en el campo tipo de pago';
  return true;
}

export function validarCategoria(categoria: string) {
  if (!categoria) return 'El campo categoria no puede estar vacio';
  if (!isNaN(Number(categoria))) return 'No puede ingresar un número en el campo categoria';
  return true;
}

export function validarCantidad(cantidad: number) {
  if (!cantidad) return 'El campo cantidad no puede ser 0'
  if (cantidad < 0) return 'La cantidad no puede ser un número negativo'
  return true
}

