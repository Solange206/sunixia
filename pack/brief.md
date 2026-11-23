# Brief de la marca

> **Estudiante:** este archivo lo genera la IA (fase 2) a partir de tu plan aprobado. Revísalo antes de usar Cline: todo lo que dice aquí es lo que se va a construir.
> Si algo dice `POR DEFINIR`, decídelo tú y pídele a la IA que lo actualice.
>
> **Agente:** este brief es la única fuente de decisiones de diseño y contenido.
> Si un campo que necesitas dice `POR DEFINIR` o está vacío, **detente y pregunta**: no inventes, no busques en otros archivos, no supongas.
> Copia los textos tal cual están escritos (no los reescribas ni "mejores").

## 1. Marca

| Campo                                         | Decisión                                                                                                                                                                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nombre de la marca                            | Sunixia                                                                                                                                                                                                                                                       |
| Tipo                                          | Ficticia                                                                                                                                                                                                                                                      |
| Qué hace, en una frase                        | Sunixia es una agencia creativa con un equipo de especialistas que ayuda a emprendimientos a crear su marca propia, desarrolla campañas de marketing, contenido para redes sociales y fotografía, y diseña souvenirs para premios de concursos y para vender. |
| Para quién es (público)                       | Emprendedores, marcas y organizadores de concursos o eventos que necesitan comunicar mejor su idea, y personas que quieren comprar souvenirs con diseño propio.                                                                                               |
| Personalidad (3 adjetivos)                    | Luminosa, auténtica y en constante evolución.                                                                                                                                                                                                                 |
| Eslogan                                       | Ideas que brillan, marcas que renacen.                                                                                                                                                                                                                        |
| Descripción para Google (máx. 155 caracteres) | Agencia creativa: ayudamos a emprender con marca propia, creamos campañas, contenido y fotografía, y diseñamos souvenirs.                                                                                                                                     |

## 2. Referencias

Qué tomar de cada sitio de referencia (las capturas están en el plan, `pack/Plan del sitio · Sunixia02smcm.pdf`).

| Ref | Sitio                                       | Detalle que tomamos                                                                                                                                                                                                                 | Dónde se aplica                                                                                           |
| --- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1a  | Proud Punch (https://proudandpunch.com.au/) | Cada producto va sobre un fondo de un solo color intenso con título grande y, al lado, su ilustración o imagen.                                                                                                                     | Página Souvenirs, sección Catálogo: cada souvenir con su tarjeta de un color distinto con su ilustración. |
| 1b  | Proud Punch (https://proudandpunch.com.au/) | El producto aparece delante de un título grande sobre fondo de color y cambia de posición; en Sunixia se moverá un poco al pasar el mouse.                                                                                          | Tarjetas de souvenirs (Souvenirs) e imágenes de Inicio.                                                   |
| 2a  | Duck.Design (https://duck.design/)          | Al pasar el mouse aparece un aro alrededor del botón; en Sunixia el aro será naranja claro y la flecha del botón se desplazará a la derecha.                                                                                        | Botones “Cotiza tu idea” del final de las páginas (llevan a `/contacto`) y botones “Comprar” de Souvenirs.                   |
| 2b  | Duck.Design (https://duck.design/)          | Íconos simples dentro de círculos naranjas que aparecen con una animación sencilla al hacer scroll: cada tarjeta aparece subiendo y con fade; el ícono de Renacimiento gira, el de Luz interior pulsa y el de Evolución se inclina. | Página Nosotros, en los tres valores.                                                                     |

## 3. Paleta de color

Exactamente estos 7 colores, en hex (`#1a1a1a`). No se agregan otros.
`npm run verificar` exige contraste 4.5:1 o más en: `texto` sobre `fondo` y `superficie`, `texto-suave` sobre `fondo`, `marca-contraste` sobre `marca`.

| Token             | Hex     | Para qué se usa               |
| ----------------- | ------- | ----------------------------- |
| `fondo`           | #FFFFFF | Fondo de toda la página       |
| `superficie`      | #FFE6D2 | Tarjetas y bloques destacados |
| `texto`           | #0A0A0A | Texto principal               |
| `texto-suave`     | #4A4F5C | Texto secundario              |
| `borde`           | #F06A17 | Líneas y bordes               |
| `marca`           | #0066FF | Botones y resaltados          |
| `marca-contraste` | #FFFFFF | Texto encima del azul         |

## 4. Tipografías

Archivos (`.woff2`, `.woff`, `.ttf` u `.otf`) en `pack/fuentes/`. Solo fuentes con licencia libre.

| Uso     | Nombre de la fuente | Archivo(s) en `pack/fuentes/`                                                        | Grosores  |
| ------- | ------------------- | ------------------------------------------------------------------------------------ | --------- |
| Títulos | Barlow Condensed    | `pack/fuentes/BarlowCondensed-SemiBold.ttf`, `pack/fuentes/BarlowCondensed-Bold.ttf` | 600 y 700 |
| Texto   | Lora                | `pack/fuentes/Lora-Regular.ttf`, `pack/fuentes/Lora-Bold.ttf`                        | 400 y 700 |

## 5. Forma

| Decisión                   | Opciones                                                                          | Decisión                       |
| -------------------------- | --------------------------------------------------------------------------------- | ------------------------------ |
| Esquinas (`radio`)         | `0px` recto · `4px` · `8px` · `16px` · `9999px` píldora                           | `16px`                         |
| Grosor de borde            | `0px` sin borde · `1px` · `2px` · `3px`                                           | `2px`                          |
| Sombra                     | `none` · suave `0 4px 12px rgb(0 0 0 / 0.12)` · dura `4px 4px 0 0 <hex de borde>` | `0 4px 12px rgb(0 0 0 / 0.12)` |
| Ancho máximo del contenido | `max-w-3xl` estrecho · `max-w-5xl` medio · `max-w-7xl` ancho                      | `max-w-5xl`                    |

## 6. Animación

| Decisión   | Opciones                        | Decisión  |
| ---------- | ------------------------------- | --------- |
| Intensidad | `ninguna` · `sutil` · `marcada` | `marcada` |

## 7. Logo y menú

| Decisión                                            | Opciones                                                                                                                                                           | Decisión                                                                                                                  |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Logo (archivo en `pack/logos/` + texto alternativo) | o "sin logo, solo nombre"                                                                                                                                          | `pack/logos/logo-sunixia.svg` (versión blanca opcional: `pack/logos/logo-sunixia-blanco.svg`); texto alternativo: Sunixia |
| Tipo de menú                                        | `barra` (enlaces siempre visibles) · `desplegable` (botón "Menú" en celular y tablet, barra en computadora) · `desplegable-siempre` (botón en todas las pantallas) | `desplegable`                                         |
| Encabezado fijo arriba al bajar                     | `sí` · `no`                                                                                                                                                        | `sí`                                                                                                                      |

## 8. Mapa del sitio

Una fila por página. La primera es Inicio.

| Página    | Ruta         | Archivo                     | Texto en el menú | Título de la pestaña                             |
| --------- | ------------ | --------------------------- | ---------------- | ------------------------------------------------ |
| Inicio    | `/`          | `src/pages/index.astro`     | Inicio           | Sunixia \| Ideas que brillan, marcas que renacen |
| Nosotros  | `/nosotros`  | `src/pages/nosotros.astro`  | Nosotros         | Nosotros \| Sunixia                              |
| Servicios | `/servicios` | `src/pages/servicios.astro` | Servicios        | Servicios \| Sunixia                             |
| Souvenirs | `/souvenirs` | `src/pages/souvenirs.astro` | Souvenirs        | Souvenirs \| Sunixia                             |
| Contacto  | `/contacto`  | `src/pages/contacto.astro`  | Contacto         | Contacto \| Sunixia                              |
| Pago      | `/pago`      | `src/pages/pago.astro`      | (no va en el menú) | Pago \| Sunixia |

## 9. Contenido por página

Una sub-sección por página del mapa, y dentro sus secciones en orden de arriba hacia abajo.
La **disposición** describe el boceto en palabras (el agente no ve imágenes).
La primera sección de Inicio lleva el título principal (`<h1>`); en las demás páginas, la primera sección también lleva el `<h1>` de esa página.

### Página: Inicio (`/`)

#### Sección: Portada

- **id:** portada
- **Título:** Ideas que brillan, marcas que renacen
- **Texto:** Un equipo de especialistas que crea tu marca, tus campañas, tu contenido y tus souvenirs.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta: Agencia creativa
  - Etiqueta sobre la imagen: Equipo creativo de Sunixia
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/equipo-sunixia.jpg` — El equipo creativo trabajando en una mesa con laptops y bocetos
- **Botones** (texto → destino, o "ninguno"): Ver servicios → Servicios (`/servicios`)
- **Disposición** (celular / computadora): celular: etiqueta, título, texto y botón apilados, y la imagen debajo; computadora: dos columnas, texto a la izquierda (etiqueta, título, texto, botón) e imagen a la derecha. La imagen tiene esquinas redondeadas y la etiqueta blanca pequeña sobre su esquina inferior izquierda.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b

#### Sección: Lo que hacemos

- **id:** lo-que-hacemos
- **Título:** Lo que hacemos
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Creación de marca: Te ayudamos a crear tu marca propia: nombre, identidad y todo lo que la hace única.
  - Campañas: Campañas de marketing con una idea clara, pensadas para que tu marca se note.
  - Contenido en redes: Publicaciones y contenido para redes con la voz y la luz de tu marca.
  - Fotografía: Fotografía de producto, de marca y de eventos para contar tu historia.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: título y las 4 tarjetas apiladas en una columna; computadora: título y las 4 tarjetas en una sola fila de 4 columnas. Las tarjetas son de color superficie, con borde.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Souvenirs

- **id:** souvenirs
- **Título:** Souvenirs con identidad
- **Texto:** Premios para concursos creados por nosotros, y piezas que también puedes comprar.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta sobre la imagen: Souvenirs Sunixia
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/souvenirs-inicio.jpg` — Varios souvenirs juntos, en los colores de la marca
- **Botones** (texto → destino, o "ninguno"): Ver souvenirs → Souvenirs (`/souvenirs`)
- **Disposición** (celular / computadora): celular: imagen, título, texto y botón apilados; computadora: bloque de ancho completo de color superficie, con la imagen a la izquierda y el título, texto y botón a la derecha. La imagen lleva la etiqueta blanca pequeña sobre su esquina inferior izquierda.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1b

#### Sección: Llamado a contactar

- **id:** llamado-a-contactar
- **Título:** ¿Listo para que tu idea renazca?
- **Texto:** Cuéntanos tu proyecto y armamos la propuesta.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Cotiza tu idea → Contacto (`/contacto`)
- **Disposición** (celular / computadora): celular y computadora: bloque de ancho completo de color naranja, justo antes del pie de página, con título, texto y botón oscuro apilados y centrados.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2a

### Página: Nosotros (`/nosotros`)

#### Sección: Historia

- **id:** historia
- **Título:** Sunixia es evolución
- **Texto:** Es cada proyecto que dejamos atrás para dar vida a uno mejor, y cada renacer que nos mueve a crear.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta: Nosotros
  - Etiqueta sobre la imagen: Foto: el equipo de Sunixia
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/nosotros-equipo.jpg` — El equipo celebrando un proyecto terminado
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: etiqueta, título, texto e imagen apilados; computadora: dos columnas, texto a la izquierda (centrado en vertical respecto a la imagen) e imagen a la derecha. La imagen lleva la etiqueta blanca pequeña sobre su esquina inferior izquierda.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Misión y visión

- **id:** mision-y-vision
- **Título:** ninguno
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Misión: Impulsar la creatividad a través de la reinvención constante, usando el diseño y la expresión visual para transformar experiencias en proyectos con identidad y propósito.
  - Visión: Ser una agencia reconocida por su autenticidad y su evolución constante, que inspire a otros a descubrir su propia voz creativa.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: dos tarjetas apiladas, Misión y luego Visión; computadora: franja azul de ancho completo con dos tarjetas de color superficie lado a lado, Misión a la izquierda y Visión a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Valores

- **id:** valores
- **Título:** Nuestros valores
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Renacimiento: Reinventarnos siempre: cada idea y cada proceso nos permite empezar de nuevo con más fuerza y claridad. (ícono: `pack/imagenes/icono-renacimiento.svg`)
  - Luz interior: La energía creativa que ilumina cada proyecto, guía las decisiones y mantiene vivo el propósito. (ícono: `pack/imagenes/icono-luz-interior.svg`)
  - Evolución: Una creatividad que nunca se queda quieta: experimenta, cambia y crece. (ícono: `pack/imagenes/icono-evolucion.svg`)
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/icono-renacimiento.svg`, `pack/imagenes/icono-luz-interior.svg`, `pack/imagenes/icono-evolucion.svg` — texto alternativo vacío (decorativos); cada ícono va dentro de un círculo naranja
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: título y 3 tarjetas apiladas, cada una con ícono, título y texto; computadora: título y 3 tarjetas en una fila de 3 columnas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2b

#### Sección: Llamado a contactar

- **id:** llamado-a-contactar
- **Título:** Creemos algo juntos
- **Texto:** Cuéntanos tu proyecto.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Cotiza tu idea → Contacto (`/contacto`)
- **Disposición** (celular / computadora): celular y computadora: bloque de ancho completo de color naranja con título, texto y botón oscuro apilados y centrados.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2a

### Página: Servicios (`/servicios`)

#### Sección: Encabezado

- **id:** encabezado
- **Título:** Un equipo, todas las áreas
- **Texto:** Cada área trabaja con la misma idea: que tu marca tenga luz propia.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta: Servicios
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular y computadora: etiqueta, título y texto apilados, alineados a la izquierda, sobre las tarjetas de las áreas.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Creación de marca

- **id:** creacion-de-marca
- **Título:** Creación de marca
- **Texto:** Te ayudamos a crear tu marca propia: nombre, identidad y todo lo que la hace única.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta sobre la imagen: Creación de marca
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/servicio-marca.jpg` — Bocetos de logos y una paleta de colores sobre una mesa
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tarjeta de color superficie con la imagen dentro, con margen, arriba (la etiqueta blanca pequeña sobre su esquina inferior izquierda), y título y texto debajo; las 4 áreas apiladas en una columna; computadora: la misma tarjeta, dentro de una cuadrícula de 2 columnas por 2 filas con las otras 3 áreas (arriba a la izquierda).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Campañas

- **id:** campanas
- **Título:** Campañas
- **Texto:** Campañas de marketing con una idea clara, pensadas para que tu marca se note.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta sobre la imagen: Campañas
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/servicio-campanas.jpg` — Pieza publicitaria
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tarjeta de color superficie con la imagen dentro, con margen, arriba (la etiqueta blanca pequeña sobre su esquina inferior izquierda), y título y texto debajo, apilada bajo la tarjeta anterior; computadora: la misma tarjeta, en la cuadrícula de 2 columnas por 2 filas (arriba a la derecha).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Contenido en redes

- **id:** contenido-en-redes
- **Título:** Contenido en redes
- **Texto:** Publicaciones y contenido para redes con la voz y la luz de tu marca.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta sobre la imagen: Contenido en redes
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/servicio-redes.jpg` — Publicaciones de redes sociales en un celular
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tarjeta de color superficie con la imagen dentro, con margen, arriba (la etiqueta blanca pequeña sobre su esquina inferior izquierda), y título y texto debajo, apilada bajo la tarjeta anterior; computadora: la misma tarjeta, en la cuadrícula de 2 columnas por 2 filas (abajo a la izquierda).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Fotografía

- **id:** fotografia
- **Título:** Fotografía
- **Texto:** Fotografía de producto, de marca y de eventos para contar tu historia.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta sobre la imagen: Fotografía
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): `pack/imagenes/servicio-fotografia.jpg` — Fotografía: una sesión de producto con una cámara
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: tarjeta de color superficie con la imagen dentro, con margen, arriba (la etiqueta blanca pequeña sobre su esquina inferior izquierda), y título y texto debajo, apilada bajo la tarjeta anterior; computadora: la misma tarjeta, en la cuadrícula de 2 columnas por 2 filas (abajo a la derecha).
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Llamado a contactar

- **id:** llamado-a-contactar
- **Título:** Hablemos de tu proyecto
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"): ninguno
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): Cotiza tu idea → Contacto (`/contacto`)
- **Disposición** (celular / computadora): celular y computadora: bloque de ancho completo de color naranja con título y botón oscuro apilados y centrados.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2a

### Página: Souvenirs (`/souvenirs`)

#### Sección: Encabezado

- **id:** encabezado
- **Título:** Piezas con identidad propia
- **Texto:** Creamos souvenirs para premiar en concursos, y también puedes comprarlos.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta: Souvenirs
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular y computadora: etiqueta, título y texto apilados, alineados a la izquierda.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Para concursos / A la venta

- **id:** para-concursos-a-la-venta
- **Título:** ninguno
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Para concursos: Premios diseñados por Sunixia para tu concurso o evento.
  - A la venta: Souvenirs disponibles para comprar, con diseño propio.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: dos tarjetas de color superficie apiladas, Para concursos y luego A la venta; computadora: las dos tarjetas lado a lado, Para concursos a la izquierda y A la venta a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Catálogo

- **id:** catalogo
- **Título:** Catálogo
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Gorra: $15
  - Termo: $20
  - Camiseta: $18
  - Portacelular: $8
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"):
  - `pack/imagenes/souvenir-gorra.jpg` — Gorra
  - `pack/imagenes/souvenir-termo.jpg` — Termo
  - `pack/imagenes/souvenir-camiseta.jpg` — Camiseta
  - `pack/imagenes/souvenir-portacelular.jpg` — Portacelular
- **Botones** (texto → destino, o "ninguno"): Comprar → agrega el souvenir al carrito y lo abre (uno en cada souvenir); en el carrito, “Ir a pagar” → Pago (`/pago`)
- **Disposición** (celular / computadora): celular: título y 4 tarjetas apiladas en una columna; cada tarjeta tiene la imagen, el nombre, el precio y el botón Comprar centrados; computadora: título y las 4 tarjetas en una sola fila de 4 columnas, cada una de un color distinto (azul, naranja, color superficie y oscuro, en ese orden: Gorra, Termo, Camiseta, Portacelular), con el botón Comprar en blanco.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 1a, 1b, 2a

### Página: Contacto (`/contacto`)

#### Sección: Encabezado

- **id:** encabezado
- **Título:** Cuéntanos tu idea
- **Texto:** Escríbenos o síguenos y te respondemos con una propuesta.
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta: Contacto
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"): ninguno
- **Disposición** (celular / computadora): celular: etiqueta, título y texto apilados arriba, y las tarjetas de la sección siguiente debajo; computadora: columna izquierda con etiqueta, título y texto, al lado de las tarjetas de la sección siguiente.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

#### Sección: Botones de correo y redes

- **id:** botones-de-correo-y-redes
- **Título:** ninguno
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Correo: hola@sunixia.com
  - Instagram: @sunixia
  - TikTok: @sunixia
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"):
  - Escribir → hola@sunixia.com (enlace de correo)
  - Seguir → `#` (Instagram @sunixia; marca ficticia, sin enlace real)
  - Seguir → `#` (TikTok @sunixia; marca ficticia, sin enlace real)
- **Disposición** (celular / computadora): celular: tres tarjetas de color superficie apiladas (Correo, Instagram, TikTok); en Correo el botón va debajo del dato, en Instagram y TikTok el botón queda a la derecha; computadora: tres tarjetas apiladas en la columna derecha, cada una con el nombre y el dato a la izquierda y el botón azul a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): ninguna

### Página: Pago (`/pago`)

El carrito es un panel lateral que está en todas las páginas: se abre con el botón “Carrito” del encabezado (muestra cuántos productos hay) o al pulsar “Comprar” en un souvenir. Permite cambiar cantidades, quitar productos, ver el total y llegar a esta página con “Ir a pagar”. Es una compra simulada (marca ficticia): no se cobra nada y no se guarda ningún dato.

#### Sección: Finalizar compra

- **id:** finalizar-compra
- **Título:** Finalizar compra
- **Texto:** ninguno
- **Elementos** (lista: título + descripción de cada uno, o "ninguno"):
  - Etiqueta: Pago
  - Tu pedido: lista de productos con cantidad y subtotal, y el total
  - Tus datos: formulario con Nombre completo, Correo y Dirección de entrega (todos obligatorios)
  - Aviso: Compra simulada: Sunixia es una marca ficticia. No se cobra nada ni se guarda ningún dato.
  - Si el carrito está vacío: No hay productos en tu carrito.
- **Imágenes** (archivo en `pack/imagenes/` + texto alternativo, o "ninguna"): ninguna
- **Botones** (texto → destino, o "ninguno"):
  - Confirmar compra → muestra el mensaje de agradecimiento y vacía el carrito
  - Ver souvenirs → Souvenirs (`/souvenirs`), solo si el carrito está vacío
  - Volver al inicio → Inicio (`/`), después de confirmar
- **Disposición** (celular / computadora): celular: etiqueta, título, pedido y formulario apilados; computadora: pedido a la izquierda y formulario a la derecha.
- **Referencia aplicada** (1a, 1b, 2a, 2b o "ninguna"): 2a

## 10. Contacto y pie de página

| Campo                   | Decisión                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| Correo                  | hola@sunixia.com                                                                                              |
| Redes (nombre → enlace) | Instagram → `#`; TikTok → `#`; Facebook → `#` (marca ficticia, sin enlace real; usuario @sunixia en las tres) |
| Texto del pie           | Ideas que brillan, marcas que renacen. · Derechos: © Sunixia (el pie va en todas las páginas)                 |
