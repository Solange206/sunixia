/*
  Datos del carrito de compras: se guardan en el navegador (localStorage) para que
  el carrito se mantenga al cambiar de página. Lo usan carrito.ts y pago.ts.
  Es una compra simulada: no hay servidor ni cobro real.
*/

export interface ProductoCarrito {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

const CLAVE = "sunixia-carrito";

function esProducto(valor: unknown): valor is ProductoCarrito {
  if (typeof valor !== "object" || valor === null) return false;
  const p = valor as Record<string, unknown>;
  return (
    typeof p.id === "string" &&
    typeof p.nombre === "string" &&
    typeof p.precio === "number" &&
    typeof p.cantidad === "number" &&
    p.cantidad > 0
  );
}

export function leerCarrito(): ProductoCarrito[] {
  try {
    const crudo = localStorage.getItem(CLAVE);
    if (!crudo) return [];
    const datos: unknown = JSON.parse(crudo);
    return Array.isArray(datos) ? datos.filter(esProducto) : [];
  } catch {
    return [];
  }
}

export function guardarCarrito(carrito: ProductoCarrito[]): void {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(carrito));
  } catch {
    // Si el navegador no deja guardar, el carrito solo dura hasta cambiar de página.
  }
  window.dispatchEvent(new CustomEvent("carrito:cambio"));
}

export function totalCarrito(carrito: ProductoCarrito[]): number {
  return carrito.reduce((suma, p) => suma + p.precio * p.cantidad, 0);
}

export function cantidadCarrito(carrito: ProductoCarrito[]): number {
  return carrito.reduce((suma, p) => suma + p.cantidad, 0);
}

export function formatearPrecio(valor: number): string {
  return `$${valor}`;
}
