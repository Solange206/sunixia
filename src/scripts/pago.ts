/*
  Página de pago (simulada): muestra el pedido guardado en el carrito, valida el formulario
  y, al confirmar, vacía el carrito y muestra el mensaje de agradecimiento.
  No se envía ni se guarda ningún dato personal, y no se cobra nada.
*/

import { formatearPrecio, guardarCarrito, leerCarrito, totalCarrito } from "./carritoDatos";

export function iniciarPago(): void {
  const contenido = document.querySelector<HTMLElement>("[data-pago-contenido]");
  const vacio = document.querySelector<HTMLElement>("[data-pago-vacio]");
  const exito = document.querySelector<HTMLElement>("[data-pago-exito]");
  const lista = document.querySelector<HTMLElement>("[data-pago-lista]");
  const total = document.querySelector<HTMLElement>("[data-pago-total]");
  const formulario = document.querySelector<HTMLFormElement>("[data-pago-formulario]");
  const mensaje = document.querySelector<HTMLElement>("[data-pago-mensaje]");
  const titulo = document.querySelector<HTMLElement>("[data-pago-exito-titulo]");
  if (!contenido || !vacio || !exito || !lista || !total || !formulario || !mensaje || !titulo) {
    return;
  }

  function dibujar(): void {
    const carrito = leerCarrito();
    const hayProductos = carrito.length > 0;
    contenido!.hidden = !hayProductos;
    vacio!.hidden = hayProductos;

    lista!.replaceChildren();
    carrito.forEach((producto) => {
      const fila = document.createElement("li");
      fila.className = "flex items-center justify-between gap-4 border-b border-borde py-3";

      const nombre = document.createElement("span");
      nombre.textContent = `${producto.nombre} × ${producto.cantidad}`;

      const subtotal = document.createElement("span");
      subtotal.className = "font-bold";
      subtotal.textContent = formatearPrecio(producto.precio * producto.cantidad);

      fila.append(nombre, subtotal);
      lista!.append(fila);
    });

    total!.textContent = formatearPrecio(totalCarrito(carrito));
  }

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (leerCarrito().length === 0) return;

    const datos = new FormData(formulario);
    const nombre = String(datos.get("nombre") ?? "").trim();
    mensaje.textContent = `Pedido simulado para ${nombre}. Sunixia es una marca ficticia: no se cobró nada ni se envió ningún producto.`;

    guardarCarrito([]); // vacía el carrito
    contenido.hidden = true;
    exito.hidden = false;
    titulo.focus();
  });

  window.addEventListener("carrito:cambio", () => {
    if (exito.hidden) dibujar();
  });
  dibujar();
}
