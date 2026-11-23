/*
  Datos generales del sitio, en un solo lugar.
  Salen del brief (pack/brief.md): secciones 1, 6, 7, 8 y 10.
  Encabezado, pie de página y <head> leen de aquí: si cambias algo, cambia en todo el sitio.
*/

export const sitio = {
  nombre: "Sunixia",
  descripcion:
    "Agencia creativa: ayudamos a emprender con marca propia, creamos campañas, contenido y fotografía, y diseñamos souvenirs.",
  correo: "hola@sunixia.com",
  pie: "Ideas que brillan, marcas que renacen.",
  animacion: "marcada" as "ninguna" | "sutil" | "marcada",
};

/*
  Tipo de menú (sección 7 del brief):
  - "barra": enlaces siempre visibles (en celular bajan a otra línea si no caben).
  - "desplegable": botón "Menú" en celular y tablet; barra desde computadora.
  - "desplegable-siempre": botón "Menú" en todas las pantallas.
  fijo: true = el encabezado queda pegado arriba al bajar.
*/
export const encabezado = {
  menu: "desplegable" as "barra" | "desplegable" | "desplegable-siempre",
  fijo: true,
};

/* Menú principal: un enlace por página del mapa del sitio (sección 8 del brief). */
export const menu: { texto: string; href: string }[] = [
  { texto: "Inicio", href: "/" },
  { texto: "Nosotros", href: "/nosotros" },
  { texto: "Servicios", href: "/servicios" },
  { texto: "Souvenirs", href: "/souvenirs" },
  { texto: "Contacto", href: "/contacto" },
];

/* Redes sociales (sección 10 del brief). Marca ficticia: sin enlace real (#). */
export const redes: { nombre: string; href: string }[] = [
  { nombre: "Instagram", href: "#" },
  { nombre: "TikTok", href: "#" },
  { nombre: "Facebook", href: "#" },
];
