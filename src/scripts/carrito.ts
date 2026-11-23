/*
  Carrito de compras (panel lateral).
  - Un botón con data-comprar (y data-id, data-nombre, data-precio) agrega el producto y abre el carrito.
  - Un botón con data-abrir-carrito lo abre; uno con data-cerrar-carrito lo cierra.
  - Los elementos con data-carrito-cantidad muestran cuántos productos hay (encabezado).
  El panel es un <dialog>: el navegador se encarga del foco y de cerrar con la tecla Esc.
*/

import { animate } from "motion";
import {
  cantidadCarrito,
  formatearPrecio,
  guardarCarrito,
  leerCarrito,
  totalCarrito,
  type ProductoCarrito,
} from "./carritoDatos";

export function iniciarCarrito(): void {
  const dialogo = document.querySelector<HTMLDialogElement>("#carrito");
  const plantilla = document.querySelector<HTMLTemplateElement>("#carrito-item");
  const lista = dialogo?.querySelector<HTMLElement>("[data-carrito-lista]");
  const vacio = dialogo?.querySelector<HTMLElement>("[data-carrito-vacio]");
  const pie = dialogo?.querySelector<HTMLElement>("[data-carrito-pie]");
  const total = dialogo?.querySelector<HTMLElement>("[data-carrito-total]");
  if (!dialogo || !plantilla || !lista || !vacio || !pie || !total) return;

  function dibujar(): void {
    const carrito = leerCarrito();

    document.querySelectorAll<HTMLElement>("[data-carrito-cantidad]").forEach((contador) => {
      contador.textContent = String(cantidadCarrito(carrito));
    });

    lista!.replaceChildren();
    carrito.forEach((producto) => {
      const fila = plantilla!.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
      if (!fila) return;
      fila.dataset.id = producto.id;
      fila.querySelector("[data-nombre]")!.textContent = producto.nombre;
      fila.querySelector("[data-precio]")!.textContent = formatearPrecio(producto.precio);
      fila.querySelector("[data-cantidad]")!.textContent = String(producto.cantidad);
      fila
        .querySelector("[data-accion='menos']")
        ?.setAttribute("aria-label", `Quitar una unidad de ${producto.nombre}`);
      fila
        .querySelector("[data-accion='mas']")
        ?.setAttribute("aria-label", `Agregar una unidad de ${producto.nombre}`);
      fila
        .querySelector("[data-accion='quitar']")
        ?.setAttribute("aria-label", `Quitar ${producto.nombre} del carrito`);
      lista!.append(fila);
    });

    vacio!.hidden = carrito.length > 0;
    pie!.hidden = carrito.length === 0;
    total!.textContent = formatearPrecio(totalCarrito(carrito));
  }

  function abrir(): void {
    if (dialogo!.open) return;
    dialogo!.showModal();
    const nivel = document.documentElement.dataset.animacion;
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducir && (nivel === "sutil" || nivel === "marcada")) {
      animate(dialogo!, { x: ["100%", "0%"] }, { duration: 0.35, ease: "easeOut" });
    }
  }

  function agregar(producto: Omit<ProductoCarrito, "cantidad">): void {
    const carrito = leerCarrito();
    const existente = carrito.find((p) => p.id === producto.id);
    if (existente) existente.cantidad += 1;
    else carrito.push({ ...producto, cantidad: 1 });
    guardarCarrito(carrito);
  }

  document.addEventListener("click", (evento) => {
    const objetivo = evento.target;
    if (!(objetivo instanceof Element)) return;

    const comprar = objetivo.closest<HTMLElement>("[data-comprar]");
    if (comprar) {
      const { id, nombre, precio } = comprar.dataset;
      if (id && nombre && precio) {
        agregar({ id, nombre, precio: Number(precio) });
        abrir();
      }
      return;
    }

    if (objetivo.closest("[data-abrir-carrito]")) abrir();
    if (objetivo.closest("[data-cerrar-carrito]")) dialogo.close();
    if (objetivo === dialogo) dialogo.close(); // clic en el fondo oscuro
  });

  lista.addEventListener("click", (evento) => {
    const objetivo = evento.target;
    if (!(objetivo instanceof Element)) return;
    const boton = objetivo.closest<HTMLElement>("[data-accion]");
    const fila = objetivo.closest<HTMLElement>("li[data-id]");
    if (!boton || !fila) return;

    const carrito = leerCarrito();
    const producto = carrito.find((p) => p.id === fila.dataset.id);
    if (!producto) return;

    if (boton.dataset.accion === "mas") producto.cantidad += 1;
    if (boton.dataset.accion === "menos") producto.cantidad -= 1;
    if (boton.dataset.accion === "quitar") producto.cantidad = 0;

    guardarCarrito(carrito.filter((p) => p.cantidad > 0));
  });

  window.addEventListener("carrito:cambio", dibujar);
  window.addEventListener("storage", dibujar); // si cambia en otra pestaña
  dibujar();
}
