---
name: EntrenaEnCasa
description: Rutinas de fuerza en casa para mayores de 50 que empiezan, con un maniquí 3D que enseña cada ejercicio. Estilo «Nike oscuro».
colors:
  volt: "#D4FF00"
  volt-hover: "#E2FF4D"
  volt-wash: "rgb(212 255 0 / .12)"
  black: "#000000"
  shell: "rgb(255 255 255 / .045)"
  core: "#101010"
  core-raised: "#191919"
  core-high: "#262626"
  hairline: "rgb(255 255 255 / .09)"
  hairline-strong: "rgb(255 255 255 / .16)"
  ink: "#FFFFFF"
  muted: "#A3A3A3"
  faint: "#6B6B6B"
  danger: "#FF4D3D"
  zone-piernas: "#FF9F0A"
  zone-pecho: "#64D2FF"
  zone-espalda: "#BF5AF2"
  zone-brazos: "#FF375F"
  zone-hombros: "#FFD60A"
  zone-abdomen: "#0A84FF"
typography:
  poster:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 13vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 62.5"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.1rem, 8vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 0.92
    fontVariation: "'wdth' 62.5"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  numeral-hero:
    fontFamily: "Archivo, sans-serif"
    fontSize: "5.5rem"
    fontWeight: 900
    lineHeight: 0.85
    fontFeature: "tnum"
    fontVariation: "'wdth' 62.5"
rounded:
  sm: "16px"
  md: "24px"
  lg: "30px"
  pill: "999px"
spacing:
  gutter: "18px"
  bezel: "6px"
  card: "22px"
  section: "44px"
components:
  button-primary:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.black}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "56px"
  button-big:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.black}"
    rounded: "{rounded.pill}"
    padding: "0 8px 0 30px"
    height: "64px"
  button-soft:
    backgroundColor: "{colors.core-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "56px"
  card:
    backgroundColor: "{colors.core}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "22px"
  tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.black}"
    rounded: "{rounded.pill}"
  input-number:
    backgroundColor: "{colors.core-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    height: "58px"
---

# Design System: EntrenaEnCasa

## Overview

**Creative North Star: "Cartel de Nike en el salón"**

La app se ve como una app de entrenamiento profesional de Nike o Apple: negro total, titulares ultracondensados en mayúsculas que ocupan la pantalla, el maniquí 3D tratado como la foto de una campaña y un único amarillo volt para lo que hay que pulsar. Es para mayores de 50 que empiezan, así que la energía está en la tipografía y el color, nunca en el tamaño del texto ni en la dificultad: el texto de lectura es de 19 px y los botones de 56–64 px.

**Key Characteristics:**
- Fondo negro puro; tarjetas de doble bisel: carcasa translúcida de 6 px + filete de 1 px alrededor de un panel #101010.
- Titulares, nombres y cifras en Archivo ultracondensada (anchura 62,5 %, peso 900) y mayúsculas.
- Un solo acento: volt #D4FF00. El color de zona solo es un punto o la luz detrás del maniquí.
- Botón grande con la flecha en su propio círculo (botón dentro de botón).
- Isla de navegación flotante con la pestaña activa en blanco.

## Colors

### Primary
- **Volt** (#D4FF00): botón principal, fecha, cifra de la semana, barras de días entrenados, ✓ hecho, descanso a pantalla completa. Tinta encima: negro.

### Neutral
- **Negro** (#000000): fondo.
- **Panel** (#101010), **panel alto** (#191919), **panel más alto** (#262626): tarjetas, botones secundarios, campos.
- **Carcasa** (blanco al 4,5 %) y **filete** (blanco al 9 %; 16 % el fuerte): el doble bisel y los separadores.
- **Tinta** (#FFFFFF) y **gris** (#A3A3A3): texto y texto secundario.

### Named Rules
**The Volt Rule.** El volt es la única luz. Si dos cosas compiten en volt, una sobra.
**The Pilot Light Rule.** El color de zona solo marca (punto de 9 px) o ilumina el escenario del maniquí; nunca rellena botones ni texto.

## Typography

**Familia única:** Archivo (variable: anchura 62–125, peso 100–900). Condensada 62,5 % para carteles, nombres y cifras; anchura normal para leer.

### Hierarchy
- **Poster** (900, clamp(3rem, 13vw, 6.5rem), 0.92, mayúsculas): saludo y nombre de la rutina sobre el maniquí.
- **Headline** (900, clamp(2.1rem, 8vw, 2.75rem), mayúsculas): títulos de sección y de ejercicio.
- **Body** (400, 1.1875rem, 1.5): todo el texto de lectura; secundario a 1.0625rem como mínimo.
- **Label** (600, 0.95rem, 0.14em, mayúsculas): etiquetas cortas como «Hoy toca» o «Esta semana».
- **Numeral hero** (900, 5.5rem, tabular): cuenta atrás del descanso y cifra de la semana.

### Named Rules
**The Poster Rule.** Mayúsculas condensadas solo para frases cortas (títulos, nombres, cifras). Las frases largas, siempre en minúscula y anchura normal.

## Layout

Columna única en el móvil con 18 px de margen; secciones separadas 44 px. El inicio abre con fecha + saludo, el cartel de «Hoy toca» y la semana; las rutinas propias van en carrusel horizontal con imán. Desde 720 px: 40 px de margen, inicio en dos columnas y la isla de navegación centrada (560 px). Desde 1024 px el carrusel pasa a rejilla y el cartel se vuelve apaisado (16:10). Las rejillas usan `minmax(0,1fr)` para que el lienzo del maniquí nunca ensanche la tarjeta.

## Elevation & Depth

Sin sombras de caída. La profundidad es el doble bisel (carcasa + filete) y la escala de negros. El desenfoque translúcido se reserva para lo fijo: isla de navegación, cabecera del entreno, barra de zonas y velo de las hojas.

## Shapes

Tarjetas de 24 px dentro de carcasas de 30 px (curvas concéntricas); campos y miniaturas de 16 px; botones, chips y pestañas en píldora; ✓ y botones de icono circulares.

## Components

### Buttons
- **Grande:** píldora de 64 px, texto condensado en mayúsculas a la izquierda y flecha en un círculo de 48 px a la derecha, que se desplaza al pasar el ratón.
- **Primary:** volt con texto negro. **Soft:** panel alto con filete. **Ghost:** filete fuerte.
- Al pulsar: escala 0,97 con curva de muelle cubic-bezier(.32,.72,0,1).

### Cards
- Doble bisel; 22 px de relleno; sin bordes duros.

### Inputs
- Panel alto, filete, cifras condensadas de 2.1rem; foco con anillo volt de 2 px.

### Navigation
- Isla flotante redondeada a 12 px de los bordes, translúcida; la pestaña activa es una píldora blanca con texto negro.

### Descanso
- Bloque volt que sube desde abajo con «DESCANSA», lo siguiente a la derecha y la cifra en 5.5rem condensada.

## Do's and Don'ts

### Do:
- **Do** usar el volt solo para la acción principal y el progreso.
- **Do** escribir títulos y nombres en Archivo condensada 900 en mayúsculas.
- **Do** envolver las tarjetas principales en el doble bisel.
- **Do** mantener el texto de lectura en 19 px y los botones en 48 px o más.

### Don't:
- **Don't** poner frases largas en mayúsculas condensadas.
- **Don't** usar sombras de caída ni bordes grises gruesos.
- **Don't** rellenar botones o textos con el color de zona.
- **Don't** usar letra por debajo de 15 px.
