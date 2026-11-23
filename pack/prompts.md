# Prompts

## Prompt 01 · Identidad · Paleta, tipografías, forma y animación

**Tarea:** Aplicar la paleta de 7 colores, las tipografías (con `@font-face` desde `pack/fuentes/`), la forma y la animación del brief.
**Datos:** brief, secciones 3, 4, 5 y 6.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/styles/global.css`
- `src/components/ui/Contenedor.astro`
- `src/datos/sitio.ts`
  **Devuélveme completos:**
- `src/styles/global.css` (REEMPLAZA)
- `src/components/ui/Contenedor.astro` (REEMPLAZA)
- `src/datos/sitio.ts` (REEMPLAZA)
  **Borrar:** nada
  **Terminado cuando:**
- El fondo es #FFFFFF y el texto principal es #0A0A0A.
- Los títulos se ven en Barlow Condensed y el texto en Lora (los 4 archivos de `pack/fuentes/` cargan sin error en la pestaña Red).
- Un elemento con borde muestra 2px, esquinas de 16px y la sombra suave.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 02 · Marco · Datos del sitio, menú, encabezado y páginas vacías

**Tarea:** Cargar los datos del sitio (nombre, descripción, correo, pie, redes), poner el menú desplegable con encabezado fijo y todas las páginas del mapa, crear una página vacía por cada página con su título de pestaña, y quitar de Inicio las secciones de ejemplo.
**Datos:** brief, secciones 1, 7, 8 y 10.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/datos/sitio.ts`
- `src/pages/index.astro`
- `src/components/Encabezado.astro` (hay logo)
  **Devuélveme completos:**
- `src/datos/sitio.ts` (REEMPLAZA)
- `src/pages/index.astro` (REEMPLAZA)
- `src/pages/nosotros.astro` (NUEVO)
- `src/pages/servicios.astro` (NUEVO)
- `src/pages/souvenirs.astro` (NUEVO)
- `src/pages/contacto.astro` (NUEVO)
- `src/components/Encabezado.astro` (REEMPLAZA)
  **Borrar:** `src/components/inicio/Portada.astro`, `src/components/inicio/Comprobacion.astro`, `src/components/inicio/Pasos.astro`
  **Terminado cuando:**
- El menú muestra Inicio, Nosotros, Servicios, Souvenirs y Contacto, y cada enlace lleva a su ruta.
- En celular el menú es un botón "Menú" desplegable; en computadora es una barra visible.
- El encabezado queda fijo arriba al bajar y muestra el logo.
- Cada página abre con el título de pestaña del brief (sección 8).
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 03 · Inicio · Sección Portada

**Tarea:** Crear la sección Portada de Inicio con el título principal (`<h1>`).
**Datos:** brief, sección 9, Página Inicio, Sección Portada.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/index.astro`
  **Devuélveme completos:**
- `src/components/inicio/Portada.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: etiqueta, título, texto y botón apilados, y la imagen debajo / computadora: dos columnas, texto a la izquierda e imagen a la derecha.
  **Referencia:** 1b · la imagen se mueve un poco al pasar el mouse.
  **Terminado cuando:**
- Se ve la etiqueta "Agencia creativa", el título "Ideas que brillan, marcas que renacen" como `<h1>` y el texto del brief.
- El botón "Ver servicios" lleva a `/servicios`.
- La imagen `equipo-sunixia.jpg` se ve con su texto alternativo y se mueve un poco al pasar el mouse.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 04 · Inicio · Sección Lo que hacemos

**Tarea:** Crear la sección Lo que hacemos de Inicio con sus 4 tarjetas.
**Datos:** brief, sección 9, Página Inicio, Sección Lo que hacemos.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/index.astro`
  **Devuélveme completos:**
- `src/components/inicio/LoQueHacemos.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: título y 4 tarjetas apiladas en una columna / computadora: título y 4 tarjetas en una fila de 4 columnas.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve el título "Lo que hacemos" y las 4 tarjetas con los textos exactos del brief.
- Las tarjetas son de color superficie, con borde de 2px y esquinas de 16px.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 05 · Inicio · Sección Souvenirs

**Tarea:** Crear la sección Souvenirs de Inicio.
**Datos:** brief, sección 9, Página Inicio, Sección Souvenirs.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/index.astro`
  **Devuélveme completos:**
- `src/components/inicio/Souvenirs.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: imagen, título, texto y botón apilados / computadora: bloque de ancho completo de color superficie, imagen a la izquierda y título, texto y botón a la derecha.
  **Referencia:** 1b · la imagen se mueve un poco al pasar el mouse.
  **Terminado cuando:**
- Se ve el título "Souvenirs con identidad", el texto del brief y la imagen `souvenirs-inicio.jpg` con su texto alternativo.
- El botón "Ver souvenirs" lleva a `/souvenirs`.
- La imagen se mueve un poco al pasar el mouse.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 06 · Inicio · Sección Llamado a contactar

**Tarea:** Crear la sección Llamado a contactar de Inicio.
**Datos:** brief, sección 9, Página Inicio, Sección Llamado a contactar.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/index.astro`
  **Devuélveme completos:**
- `src/components/inicio/LlamadoAContactar.astro` (NUEVO)
- `src/pages/index.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: bloque de ancho completo naranja con título, texto y botón oscuro apilados y centrados / computadora: POR DEFINIR (ver pregunta 10).
  **Referencia:** 2a · en el botón "Cotiza tu idea" la flecha se desplaza a la derecha al pasar el mouse.
  **Terminado cuando:**
- Se ve el título "¿Listo para que tu idea renazca?" y el texto "Cuéntanos tu proyecto y armamos la propuesta."
- El botón "Cotiza tu idea" lleva a `/contacto`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 07 · Nosotros · Sección Historia

**Tarea:** Crear la sección Historia de Nosotros con el título principal (`<h1>`).
**Datos:** brief, sección 9, Página Nosotros, Sección Historia.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/nosotros.astro`
  **Devuélveme completos:**
- `src/components/nosotros/Historia.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: etiqueta, título, texto e imagen apilados / computadora: dos columnas, texto a la izquierda e imagen a la derecha.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve la etiqueta "Nosotros", el título "Sunixia es evolución" como `<h1>` y el texto del brief.
- La imagen `nosotros-equipo.jpg` se ve con su texto alternativo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 08 · Nosotros · Sección Misión y visión

**Tarea:** Crear la sección Misión y visión de Nosotros.
**Datos:** brief, sección 9, Página Nosotros, Sección Misión y visión.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/nosotros.astro`
  **Devuélveme completos:**
- `src/components/nosotros/MisionYVision.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: dos tarjetas apiladas, Misión y luego Visión / computadora: franja azul de ancho completo con dos tarjetas de color superficie lado a lado.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ven las tarjetas Misión y Visión con los textos exactos del brief.
- En computadora las tarjetas van lado a lado sobre una franja azul de ancho completo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 09 · Nosotros · Sección Valores

**Tarea:** Crear la sección Valores de Nosotros con sus 3 tarjetas animadas.
**Datos:** brief, sección 9, Página Nosotros, Sección Valores.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/nosotros.astro`
  **Devuélveme completos:**
- `src/components/nosotros/Valores.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: título y 3 tarjetas apiladas, cada una con ícono, título y texto / computadora: título y 3 tarjetas en una fila de 3 columnas.
  **Referencia:** 2b · cada tarjeta aparece subiendo y con fade al bajar; el ícono de Renacimiento gira, el de Luz interior pulsa y el de Evolución se inclina; los íconos van dentro de círculos naranjas.
  **Terminado cuando:**
- Se ve el título "Nuestros valores" y las 3 tarjetas con los textos exactos del brief.
- Cada tarjeta aparece subiendo y con fade al hacer scroll.
- El ícono de Renacimiento gira, el de Luz interior pulsa y el de Evolución se inclina.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 10 · Nosotros · Sección Llamado a contactar

**Tarea:** Crear la sección Llamado a contactar de Nosotros.
**Datos:** brief, sección 9, Página Nosotros, Sección Llamado a contactar.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/nosotros.astro`
  **Devuélveme completos:**
- `src/components/nosotros/LlamadoAContactar.astro` (NUEVO)
- `src/pages/nosotros.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: bloque de ancho completo naranja con título, texto y botón oscuro apilados y centrados / computadora: bloque de ancho completo naranja con título y texto centrados.
  **Referencia:** 2a · en el botón "Cotiza tu idea" la flecha se desplaza a la derecha al pasar el mouse.
  **Terminado cuando:**
- Se ve el título "Creemos algo juntos" y el texto "Cuéntanos tu proyecto."
- El botón "Cotiza tu idea" lleva a `/contacto`.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 11 · Servicios · Sección Encabezado

**Tarea:** Crear la sección Encabezado de Servicios con el título principal (`<h1>`).
**Datos:** brief, sección 9, Página Servicios, Sección Encabezado.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/servicios.astro`
  **Devuélveme completos:**
- `src/components/servicios/Encabezado.astro` (NUEVO)
- `src/pages/servicios.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: etiqueta, título y texto apilados, alineados a la izquierda / computadora: igual, alineados a la izquierda.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve la etiqueta "Servicios", el título "Un equipo, todas las áreas" como `<h1>` y el texto del brief.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 12 · Servicios · Sección Creación de marca

**Tarea:** Crear la sección Creación de marca de Servicios (tarjeta con imagen).
**Datos:** brief, sección 9, Página Servicios, Sección Creación de marca.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/servicios.astro`
  **Devuélveme completos:**
- `src/components/servicios/CreacionDeMarca.astro` (NUEVO)
- `src/pages/servicios.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: tarjeta de color superficie con la imagen arriba (etiqueta pequeña con el nombre del área sobre la imagen), título y texto debajo / computadora: la misma tarjeta, en una cuadrícula de 2 columnas por 2 filas junto con las otras 3 áreas (arriba a la izquierda).
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve el título "Creación de marca", su texto exacto y la imagen `servicio-marca.jpg` con su texto alternativo.
- La tarjeta tiene borde de 2px y esquinas de 16px.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 13 · Servicios · Sección Campañas

**Tarea:** Crear la sección Campañas de Servicios (tarjeta con imagen).
**Datos:** brief, sección 9, Página Servicios, Sección Campañas.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/servicios.astro`
  **Devuélveme completos:**
- `src/components/servicios/Campanas.astro` (NUEVO)
- `src/pages/servicios.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: tarjeta de color superficie con la imagen arriba (etiqueta pequeña con el nombre del área sobre la imagen), título y texto debajo, apilada bajo la anterior / computadora: la misma tarjeta, en la cuadrícula de 2 columnas por 2 filas (arriba a la derecha).
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve el título "Campañas", su texto exacto y la imagen `servicio-campanas.jpg` con su texto alternativo.
- En computadora queda a la derecha de Creación de marca.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 14 · Servicios · Sección Contenido en redes

**Tarea:** Crear la sección Contenido en redes de Servicios (tarjeta con imagen).
**Datos:** brief, sección 9, Página Servicios, Sección Contenido en redes.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/servicios.astro`
  **Devuélveme completos:**
- `src/components/servicios/ContenidoEnRedes.astro` (NUEVO)
- `src/pages/servicios.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: tarjeta de color superficie con la imagen arriba (etiqueta pequeña con el nombre del área sobre la imagen), título y texto debajo, apilada bajo la anterior / computadora: la misma tarjeta, en la cuadrícula de 2 columnas por 2 filas (abajo a la izquierda).
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve el título "Contenido en redes", su texto exacto y la imagen `servicio-redes.jpg` con su texto alternativo.
- En computadora queda debajo de Creación de marca.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 15 · Servicios · Sección Fotografía

**Tarea:** Crear la sección Fotografía de Servicios (tarjeta con imagen).
**Datos:** brief, sección 9, Página Servicios, Sección Fotografía.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/servicios.astro`
  **Devuélveme completos:**
- `src/components/servicios/Fotografia.astro` (NUEVO)
- `src/pages/servicios.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: tarjeta de color superficie con la imagen arriba (etiqueta pequeña con el nombre del área sobre la imagen), título y texto debajo, apilada bajo la anterior / computadora: la misma tarjeta, en la cuadrícula de 2 columnas por 2 filas (abajo a la derecha).
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve el título "Fotografía", su texto exacto y la imagen `servicio-fotografia.jpg` con su texto alternativo.
- En computadora las 4 áreas forman una cuadrícula de 2 por 2.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 16 · Servicios · Sección Llamado a contactar

**Tarea:** Crear la sección Llamado a contactar de Servicios.
**Datos:** brief, sección 9, Página Servicios, Sección Llamado a contactar.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/servicios.astro`
  **Devuélveme completos:**
- `src/components/servicios/LlamadoAContactar.astro` (NUEVO)
- `src/pages/servicios.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: bloque de ancho completo naranja con título y botón oscuro apilados y centrados / computadora: bloque de ancho completo naranja con título y botón oscuro centrados.
  **Referencia:** 2a · en el botón "Cotiza tu idea" la flecha se desplaza a la derecha al pasar el mouse.
  **Terminado cuando:**
- Se ve el título "Hablemos de tu proyecto" y el botón "Cotiza tu idea".
- El botón lleva a `/contacto` y su flecha se desplaza a la derecha al pasar el mouse.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 17 · Souvenirs · Sección Encabezado

**Tarea:** Crear la sección Encabezado de Souvenirs con el título principal (`<h1>`).
**Datos:** brief, sección 9, Página Souvenirs, Sección Encabezado.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/souvenirs.astro`
  **Devuélveme completos:**
- `src/components/souvenirs/Encabezado.astro` (NUEVO)
- `src/pages/souvenirs.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: etiqueta, título y texto apilados, alineados a la izquierda / computadora: igual, alineados a la izquierda.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve la etiqueta "Souvenirs", el título "Piezas con identidad propia" como `<h1>` y el texto del brief.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 18 · Souvenirs · Sección Para concursos / A la venta

**Tarea:** Crear la sección Para concursos / A la venta de Souvenirs con sus 2 tarjetas.
**Datos:** brief, sección 9, Página Souvenirs, Sección Para concursos / A la venta.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/souvenirs.astro`
  **Devuélveme completos:**
- `src/components/souvenirs/ParaConcursosALaVenta.astro` (NUEVO)
- `src/pages/souvenirs.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: dos tarjetas de color superficie apiladas / computadora: las dos tarjetas lado a lado.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ven las tarjetas "Para concursos" y "A la venta" con los textos exactos del brief.
- En computadora las tarjetas van lado a lado.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 19 · Souvenirs · Sección Catálogo

**Tarea:** Crear la sección Catálogo de Souvenirs con 4 tarjetas de souvenirs, cada una con imagen, nombre, precio y botón Comprar.
**Datos:** brief, sección 9, Página Souvenirs, Sección Catálogo.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/souvenirs.astro`
  **Devuélveme completos:**
- `src/components/souvenirs/Catalogo.astro` (NUEVO)
- `src/pages/souvenirs.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: título y 4 tarjetas apiladas en una columna, con imagen, nombre, precio y botón centrados / computadora: título y 4 tarjetas en una fila de 4 columnas, cada una de un color distinto.
  **Referencia:** 1a · cada souvenir en una tarjeta de un color distinto con su ilustración; 1b · el producto se mueve un poco al pasar el mouse; 2a · en el botón Comprar aparece un aro naranja claro al pasar el mouse y la flecha se desplaza a la derecha.
  **Terminado cuando:**
- Se ven Gorra $15, Termo $20, Camiseta $18 y Portacelular $8, cada uno con su imagen y su texto alternativo.
- Cada tarjeta es de un color distinto y el producto se mueve un poco al pasar el mouse.
- El botón "Comprar" lleva a `/contacto`, muestra un aro naranja claro al pasar el mouse y su flecha se desplaza a la derecha.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 20 · Contacto · Sección Encabezado

**Tarea:** Crear la sección Encabezado de Contacto con el título principal (`<h1>`).
**Datos:** brief, sección 9, Página Contacto, Sección Encabezado.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/contacto.astro`
  **Devuélveme completos:**
- `src/components/contacto/Encabezado.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: etiqueta, título y texto apilados arriba / computadora: columna izquierda con etiqueta, título y texto, al lado de las tarjetas de la sección siguiente.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ve la etiqueta "Contacto", el título "Cuéntanos tu idea" como `<h1>` y el texto del brief.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 21 · Contacto · Sección Botones de correo y redes

**Tarea:** Crear la sección Botones de correo y redes de Contacto con 3 tarjetas (Correo, Instagram, TikTok).
**Datos:** brief, sección 9, Página Contacto, Sección Botones de correo y redes.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/contacto.astro`
  **Devuélveme completos:**
- `src/components/contacto/BotonesDeCorreoYRedes.astro` (NUEVO)
- `src/pages/contacto.astro` (REEMPLAZA)
  **Borrar:** nada
  **Disposición:** celular: tres tarjetas de color superficie apiladas; en Correo el botón va debajo del dato, en Instagram y TikTok el botón queda a la derecha / computadora: tres tarjetas apiladas en la columna derecha, con nombre y dato a la izquierda y botón azul a la derecha.
  **Referencia:** ninguna
  **Terminado cuando:**
- Se ven Correo (hola@sunixia.com), Instagram (@sunixia) y TikTok (@sunixia) con sus botones "Escribir", "Seguir" y "Seguir".
- "Escribir" abre un correo a hola@sunixia.com; "Seguir" abre instagram.com y tiktok.com.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 22 · Todas · Revisión final

**Tarea:** Revisar cada página (Inicio, Nosotros, Servicios, Souvenirs y Contacto) a 360, 768 y 1280 px, comprobar `alt`, enlaces y botones, y corregir solo errores, sin cambiar textos, colores ni diseño.
**Datos:** brief completo (secciones 2 a 10).
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/pages/index.astro` y todos los archivos de `src/components/inicio/`
- `src/pages/nosotros.astro` y todos los archivos de `src/components/nosotros/`
- `src/pages/servicios.astro` y todos los archivos de `src/components/servicios/`
- `src/pages/souvenirs.astro` y todos los archivos de `src/components/souvenirs/`
- `src/pages/contacto.astro` y todos los archivos de `src/components/contacto/`
- `src/components/Encabezado.astro`
  **Devuélveme completos:** solo los archivos que tengan un error, cada uno marcado (REEMPLAZA), con una lista de qué corregiste.
  **Borrar:** nada
  **Terminado cuando:**
- Cada imagen tiene `alt` según el brief y cada enlace y botón lleva al destino del brief.
- Cada página tiene un solo `<h1>` y su título de pestaña correcto.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 23 · Souvenirs · Carrito y pago simulado

**Tarea:** Agregar un carrito (panel lateral) que se abre al pulsar “Comprar” en el Catálogo o con el botón “Carrito” del encabezado, y una página de pago simulada.
**Datos:** brief, sección 8 (fila Pago) y sección 9, Página Souvenirs (Sección Catálogo) y Página Pago.
**Pega estos archivos (versión actual, con su ruta):**

- `brief.md` (completo)
- `src/components/souvenirs/Catalogo.astro`
- `src/components/Encabezado.astro`
- `src/layouts/Layout.astro`
- `src/components/ui/Boton.astro`

**Devuélveme completos:**

- `src/components/Carrito.astro` (NUEVO)
- `src/scripts/carritoDatos.ts` (NUEVO)
- `src/scripts/carrito.ts` (NUEVO)
- `src/scripts/pago.ts` (NUEVO)
- `src/components/pago/FinalizarCompra.astro` (NUEVO)
- `src/pages/pago.astro` (NUEVO)
- `src/components/souvenirs/Catalogo.astro`, `src/components/Encabezado.astro`, `src/layouts/Layout.astro` y `src/components/ui/Boton.astro` (REEMPLAZA)

**Borrar:** nada
**Disposición:** celular: el carrito ocupa todo el ancho; el pedido y el formulario van apilados / computadora: el carrito es un panel a la derecha; en Pago, pedido a la izquierda y formulario a la derecha.
**Referencia:** 2a · los botones llevan flecha que se desplaza a la derecha al pasar el mouse.
**Terminado cuando:**

- Al pulsar “Comprar” se abre el carrito con el producto, su cantidad y el total; se puede sumar, restar y quitar.
- El número del botón “Carrito” del encabezado coincide con los productos del carrito y se mantiene al cambiar de página.
- “Ir a pagar” lleva a `/pago`; con datos válidos, “Confirmar compra” muestra el agradecimiento y vacía el carrito.
- El carrito se cierra con el botón “Cerrar”, con la tecla Esc y con clic en el fondo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.
