# Registro de cambios

Una entrada por tarea terminada, la más reciente arriba. La escribe el agente al final de cada tarea; tú la revisas.

## 2026-11-07 · Prompt 23 · Souvenirs · Carrito y pago simulado
- Archivos: src/components/Carrito.astro (nuevo), src/scripts/carritoDatos.ts (nuevo), src/scripts/carrito.ts (nuevo), src/scripts/pago.ts (nuevo), src/components/pago/FinalizarCompra.astro (nuevo), src/pages/pago.astro (nuevo), src/components/souvenirs/Catalogo.astro, src/components/Encabezado.astro, src/layouts/Layout.astro, src/components/ui/Boton.astro, pack/brief.md, pack/prompts.md
- Qué cambió: el botón “Comprar” del Catálogo agrega el souvenir a un carrito (panel lateral con cantidades, quitar y total) que se abre al comprar o con el botón “Carrito” del encabezado, y se guarda en el navegador. “Ir a pagar” lleva a /pago, una página de pago simulada (nombre, correo y dirección; no se cobra nada ni se guarda ningún dato). El carrito se cierra con el botón, con Esc y con clic en el fondo. El botón admite atributos data-* y aria-label. Se actualizaron el brief y los prompts.

## 2026-11-07 · Ajuste · Botón “Cotiza tu idea” pasa al final de las páginas
- Archivos: src/components/Encabezado.astro, src/datos/sitio.ts, src/components/ui/BandaLlamado.astro, src/components/inicio/LlamadoAContactar.astro, src/components/nosotros/LlamadoAContactar.astro, pack/brief.md, pack/prompts.md
- Qué cambió: se quitó el botón “Cotiza tu idea” del encabezado (y de su menú desplegable). Ahora el botón oscuro del final de Inicio, Nosotros y Servicios dice “Cotiza tu idea” y lleva a /contacto, con la flecha que se desplaza a la derecha al pasar el mouse (ref. 2a). Se actualizaron el brief y los prompts para que coincidan.

## 2026-11-07 · Prompt 22 · Todas · Revisión final
- Archivos: src/pages/*.astro, src/components/**, src/scripts/animaciones.ts
- Qué cambió: revisión de las 5 páginas: un solo h1 por página, alt de cada imagen según el brief (íconos de Valores con alt vacío, son decorativos), botones de redes con destino # (marca ficticia), foco visible también sobre fondos oscuros y contraste de los textos sobre cada color de tarjeta. Se comprobó que todas las rutas de importación existen.

## 2026-11-07 · Prompt 21 · Contacto · Sección Botones de correo y redes
- Archivos: src/components/contacto/BotonesDeCorreoYRedes.astro (nuevo), src/pages/contacto.astro
- Qué cambió: tres tarjetas (Correo hola@sunixia.com, Instagram @sunixia, TikTok @sunixia) con los botones “Escribir” (enlace de correo) y “Seguir” (#, marca ficticia). En celular el botón de Correo va debajo del dato; en computadora las tarjetas quedan a la derecha del encabezado.

## 2026-11-07 · Prompt 20 · Contacto · Sección Encabezado
- Archivos: src/components/contacto/Encabezado.astro (nuevo), src/pages/contacto.astro
- Qué cambió: etiqueta “Contacto”, h1 “Cuéntanos tu idea” y el texto del brief; en computadora va a la izquierda de las tarjetas.

## 2026-11-07 · Prompt 19 · Souvenirs · Sección Catálogo
- Archivos: src/components/souvenirs/Catalogo.astro (nuevo), src/components/ui/Boton.astro, src/pages/souvenirs.astro
- Qué cambió: 4 tarjetas (Gorra $15, Termo $20, Camiseta $18, Portacelular $8) de colores distintos (azul, naranja, superficie y oscuro), con imagen y alt, y botón “Comprar” blanco hacia /contacto. Referencias 1a, 1b (el producto sube al pasar el mouse) y 2a (aro naranja claro y flecha). El botón admite la variante “claro” y clases extra.

## 2026-11-07 · Prompt 18 · Souvenirs · Sección Para concursos / A la venta
- Archivos: src/components/souvenirs/ParaConcursosALaVenta.astro (nuevo), src/pages/souvenirs.astro
- Qué cambió: dos tarjetas de color superficie con los textos del brief, apiladas en celular y lado a lado en computadora.

## 2026-11-07 · Prompt 17 · Souvenirs · Sección Encabezado
- Archivos: src/components/souvenirs/Encabezado.astro (nuevo), src/pages/souvenirs.astro
- Qué cambió: etiqueta “Souvenirs”, h1 “Piezas con identidad propia” y el texto del brief.

## 2026-11-07 · Prompt 16 · Servicios · Sección Llamado a contactar
- Archivos: src/components/servicios/LlamadoAContactar.astro (nuevo), src/components/ui/BandaLlamado.astro (nuevo), src/pages/servicios.astro
- Qué cambió: banda naranja con el título “Hablemos de tu proyecto” y el botón “Cotiza tu idea” hacia /contacto. La banda se hizo una pieza compartida (BandaLlamado) que usan también Inicio y Nosotros.

## 2026-11-07 · Prompt 15 · Servicios · Sección Fotografía
- Archivos: src/components/servicios/Fotografia.astro (nuevo), src/pages/servicios.astro
- Qué cambió: tarjeta con servicio-fotografia.jpg (con su alt), título y texto del brief.

## 2026-11-07 · Prompt 14 · Servicios · Sección Contenido en redes
- Archivos: src/components/servicios/ContenidoEnRedes.astro (nuevo), src/pages/servicios.astro
- Qué cambió: tarjeta con servicio-redes.jpg (con su alt), título y texto del brief.

## 2026-11-07 · Prompt 13 · Servicios · Sección Campañas
- Archivos: src/components/servicios/Campanas.astro (nuevo), src/pages/servicios.astro
- Qué cambió: tarjeta con servicio-campanas.jpg (con su alt), título y texto del brief.

## 2026-11-07 · Prompt 12 · Servicios · Sección Creación de marca
- Archivos: src/components/servicios/CreacionDeMarca.astro (nuevo), src/components/servicios/TarjetaServicio.astro (nuevo), src/pages/servicios.astro
- Qué cambió: tarjeta con servicio-marca.jpg (con su alt y la etiqueta del área), título y texto del brief. Las 4 áreas comparten la tarjeta TarjetaServicio y la página las ordena en una cuadrícula de 1 columna en celular y 2 desde tablet.

## 2026-11-07 · Prompt 11 · Servicios · Sección Encabezado
- Archivos: src/components/servicios/Encabezado.astro (nuevo), src/pages/servicios.astro
- Qué cambió: etiqueta “Servicios”, h1 “Un equipo, todas las áreas” y el texto del brief.

## 2026-11-07 · Prompt 10 · Nosotros · Sección Llamado a contactar
- Archivos: src/components/nosotros/LlamadoAContactar.astro (nuevo), src/pages/nosotros.astro
- Qué cambió: banda naranja con el título “Creemos algo juntos”, el texto “Cuéntanos tu proyecto.” y el botón “Contáctanos” hacia /contacto.

## 2026-11-07 · Prompt 09 · Nosotros · Sección Valores
- Archivos: src/components/nosotros/Valores.astro (nuevo), src/scripts/animaciones.ts, pack/imagenes/icono-*.svg, src/pages/nosotros.astro
- Qué cambió: título “Nuestros valores” y 3 tarjetas con su ícono dentro de un círculo naranja. Referencia 2b: las tarjetas aparecen subiendo y con fade, y al llegar a pantalla el ícono de Renacimiento gira, el de Luz interior pulsa y el de Evolución se inclina (data-icono en animaciones.ts, respeta la intensidad del brief y prefers-reduced-motion). Los tres SVG de íconos eran un trazado automático con fondo negro; se reemplazaron por SVG limpios (solo el trazo azul de la marca) con los mismos nombres.

## 2026-11-07 · Prompt 08 · Nosotros · Sección Misión y visión
- Archivos: src/components/nosotros/MisionYVision.astro (nuevo), src/pages/nosotros.astro
- Qué cambió: franja azul de ancho completo con las tarjetas Misión y Visión de color superficie (lado a lado en computadora, apiladas en celular), con los textos del brief.

## 2026-11-07 · Prompt 07 · Nosotros · Sección Historia
- Archivos: src/components/nosotros/Historia.astro (nuevo), src/components/ui/FotoConEtiqueta.astro (nuevo), src/pages/nosotros.astro
- Qué cambió: etiqueta “Nosotros”, h1 “Sunixia es evolución”, texto del brief y la imagen nosotros-equipo.jpg con su alt y la etiqueta “Foto: el equipo de Sunixia”. La foto con etiqueta se hizo una pieza compartida (FotoConEtiqueta) que usan también la Portada y Souvenirs de Inicio.

## 2026-11-04 · Ajustes visuales de Inicio
- Archivos: src/components/ui/Boton.astro, src/components/ui/Seccion.astro, src/components/inicio/Portada.astro, src/components/inicio/Souvenirs.astro, src/components/inicio/LlamadoAContactar.astro
- Qué cambió: los botones, la etiqueta “Agencia creativa” y las etiquetas sobre las imágenes pasan a Barlow Condensed (como en el boceto); los botones ya no llevan el borde naranja; se redujo el espacio vertical entre las secciones de Inicio.

## 2026-11-04 · Prompt 06 · Inicio · Sección Llamado a contactar
- Archivos: src/components/inicio/LlamadoAContactar.astro (nuevo), src/pages/index.astro
- Qué cambió: bloque naranja de ancho completo justo antes del pie, con el título “¿Listo para que tu idea renazca?”, el texto del brief y el botón oscuro “Contáctanos” hacia /contacto.

## 2026-11-04 · Prompt 05 · Inicio · Sección Souvenirs
- Archivos: src/components/inicio/Souvenirs.astro (nuevo), src/pages/index.astro
- Qué cambió: bloque de color superficie con la imagen souvenirs-inicio.jpg (con su alt y la etiqueta “Souvenirs Sunixia”), título, texto y botón “Ver souvenirs” hacia /souvenirs; la imagen se mueve un poco al pasar el mouse (ref. 1b).

## 2026-11-04 · Prompt 04 · Inicio · Sección Lo que hacemos
- Archivos: src/components/inicio/LoQueHacemos.astro (nuevo), src/components/ui/Seccion.astro, src/pages/index.astro
- Qué cambió: título y 4 tarjetas (Creación de marca, Campañas, Contenido en redes, Fotografía) con los textos del brief: 1 columna en celular, 2 en tablet y 4 en computadora. Los títulos de sección se muestran en mayúsculas, como en el boceto.

## 2026-11-04 · Prompt 03 · Inicio · Sección Portada
- Archivos: src/components/inicio/Portada.astro (nuevo), src/pages/index.astro
- Qué cambió: portada con la etiqueta “Agencia creativa”, el único h1 “Ideas que brillan, marcas que renacen”, el texto del brief, el botón “Ver servicios” hacia /servicios y la imagen equipo-sunixia.jpg con su alt y la etiqueta “Equipo creativo de Sunixia”; la imagen se mueve un poco al pasar el mouse (ref. 1b). Texto a la izquierda e imagen a la derecha en computadora.

## 2026-11-04 · Prompt 02 · Marco
- Archivos: src/datos/sitio.ts, src/components/Encabezado.astro, src/components/PiePagina.astro, src/components/ui/Boton.astro, src/pages/index.astro, src/pages/nosotros.astro (nuevo), src/pages/servicios.astro (nuevo), src/pages/souvenirs.astro (nuevo), src/pages/contacto.astro (nuevo). Borrados: src/components/inicio/Comprobacion.astro y Pasos.astro (la Portada de ejemplo se reemplazó en el Prompt 03).
- Qué cambió: datos del sitio (nombre, descripción, correo, pie, redes sin enlace real), menú desplegable con encabezado fijo, logo con alt “Sunixia”, botón “Cotiza tu idea” hacia /contacto con aro y flecha al pasar el mouse (ref. 2a), pie oscuro con nombre, eslogan, correo, redes y © Sunixia, y una página vacía por cada página del mapa con su título de pestaña. El botón admite la variante oscura y la flecha. Los dos SVG de pack/logos/ eran un trazado automático que se veía como un bloque negro; se reemplazaron por SVG que contienen el PNG original del logo (versión negra y versión blanca), con los mismos nombres.

## 2026-11-04 · Prompt 01 · Identidad
- Archivos: src/styles/global.css, src/components/ui/Contenedor.astro (revisado, ancho max-w-5xl)
- Qué cambió: paleta de 7 colores del brief, tipografías Barlow Condensed y Lora con @font-face desde pack/fuentes/, esquinas de 16px, borde de 2px, sombra suave y animación marcada.

## Inicio · Plantilla v3 sin estilo

- Archivos: todos
- Qué cambió: punto de partida. Diseño en grises a la espera del brief.
