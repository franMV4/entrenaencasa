---
name: EntrenaEnCasa
description: Rutinas de fuerza en casa para mayores de 50 que empiezan, con un maniquí 3D que enseña cada ejercicio.
colors:
  lime-move: "#B6F23E"
  lime-move-hover: "#C9FF5E"
  lime-ink: "#0B1200"
  lime-wash: "rgb(182 242 62 / .14)"
  black-screen: "#000000"
  rail-black: "#0E0E10"
  graphite: "#1C1C1E"
  graphite-raised: "#2C2C2E"
  graphite-high: "#3A3A3C"
  hairline: "rgb(84 84 88 / .5)"
  ink-white: "#FFFFFF"
  ash: "#A1A1A6"
  smoke: "#6E6E73"
  alarm-red: "#FF453A"
  zone-piernas: "#FF9F0A"
  zone-pecho: "#64D2FF"
  zone-espalda: "#BF5AF2"
  zone-brazos: "#FF375F"
  zone-hombros: "#FFD60A"
  zone-abdomen: "#0A84FF"
  maple-wood: "#D9A774"
typography:
  display:
    fontFamily: "Lexend, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 8.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
  numeral:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    fontFeature: "tnum"
  numeral-hero:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
rounded:
  sm: "10px"
  md: "12px"
  lg: "16px"
  sheet: "20px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "20px"
  section: "36px"
components:
  button-primary:
    backgroundColor: "{colors.lime-move}"
    textColor: "{colors.lime-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.lime-move-hover}"
  button-primary-big:
    backgroundColor: "{colors.lime-move}"
    textColor: "{colors.lime-ink}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "60px"
  button-soft:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "54px"
  button-soft-hover:
    backgroundColor: "{colors.graphite-high}"
  card:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.lg}"
    padding: "20px"
  list-row:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.ink-white}"
    padding: "10px 14px 10px 12px"
    height: "76px"
  input-number:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.ink-white}"
    typography: "{typography.numeral}"
    rounded: "{rounded.md}"
    height: "56px"
  check-button:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.ash}"
    rounded: "{rounded.pill}"
    size: "56px"
  check-button-done:
    backgroundColor: "{colors.lime-move}"
    textColor: "{colors.lime-ink}"
  chip:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.ink-white}"
    textColor: "{colors.black-screen}"
---

# Design System: EntrenaEnCasa

## Overview

**Creative North Star: "El foco sobre el maniquí"**

EntrenaEnCasa es la app de entreno estándar hecha con oficio, a la altura de Apple Fitness, Nike Training Club y Google Fit: pantalla negra, superficies grises rellenas y una sola luz verde lima para lo que hay que hacer ahora. Lo único con color propio es el escenario del maniquí, iluminado con el color de la zona del cuerpo que trabaja, como un foco de estudio.

Es para mayores de 50 que empiezan, de pie en el salón con el móvil apoyado: todo se lee a distancia (texto de 19 px, cifras grandes en Lexend), cada pantalla tiene una acción principal y nada compite con ella. La densidad es baja; se agrupa con listas al estilo de iOS en vez de con tarjetas con borde. Rechazos confirmados por el usuario: nada recargado, nada de letra pequeña, nada de estética agresiva de gimnasio, nada infantil.

**Key Characteristics:**
- Negro puro (#000) con superficies grafito, sin bordes ni sombras.
- Un único acento lima para la acción principal, lo hecho y el progreso.
- Color por zona del cuerpo solo como piloto (puntos) y como foco detrás del maniquí.
- Títulos y todas las cifras en Lexend; el texto, en Atkinson Hyperlegible Next.
- Botones en píldora, hojas que suben desde abajo en el móvil.

## Colors

Negro de pantalla OLED, tres grises de superficie y un acento lima; los colores de zona son los colores de sistema de iOS.

### Primary
- **Lima movimiento** (#B6F23E): Empezar, Guardar, el ✓ de serie hecha, la barra de progreso, el anillo semanal, la pestaña activa y los enlaces. Tinta encima: #0B1200. Hover: #C9FF5E. En fondo suave: lima al 14 % para filas hechas y selección.

### Neutral
- **Negro pantalla** (#000000): fondo de toda la app.
- **Negro raíl** (#0E0E10): riel lateral de pestañas en escritorio.
- **Grafito** (#1C1C1E): tarjetas, listas agrupadas, hojas.
- **Grafito alto** (#2C2C2E): botones secundarios, campos, chips, barra de descanso.
- **Grafito más alto** (#3A3A3C): hover de secundarios, contorno de botón fantasma.
- **Filete** (rgb(84 84 88 / .5)): separadores de fila de 1 px dentro de listas agrupadas.
- **Blanco tinta** (#FFFFFF): texto principal.
- **Ceniza** (#A1A1A6): texto secundario (≥6,5:1 sobre grafito).
- **Humo** (#6E6E73): solo chevrons y elementos no textuales.
- **Rojo alarma** (#FF453A): borrar y errores.

### Zonas del cuerpo
- **Piernas** (#FF9F0A), **Pecho** (#64D2FF), **Espalda** (#BF5AF2), **Brazos** (#FF375F), **Hombros** (#FFD60A), **Abdomen** (#0A84FF): se aplican con la variable `--z` a puntos de 10 px y al foco radial del escenario (30 % del color sobre grafito).

### Named Rules
**The One Light Rule.** El lima es la única luz de la interfaz. Si dos cosas de la misma pantalla están en lima, una sobra.
**The Pilot Light Rule.** El color de zona nunca rellena botones ni textos: es un piloto (un punto) o la luz del escenario del maniquí.

## Typography

**Display Font:** Lexend (con system-ui)
**Body Font:** Atkinson Hyperlegible Next (con system-ui)

**Character:** Lexend geométrica y amable para títulos y números (sin el cero tachado); Atkinson para leer de corrido sin confundir letras.

### Hierarchy
- **Display** (700, clamp(2.25rem, 8.5vw, 3.25rem), 1.12, -0.03em): el saludo y los títulos de pestaña.
- **Headline** (700, 1.5rem; 1.75rem en el nombre de la rutina y el ejercicio): títulos de sección y de tarjeta.
- **Title** (600, 1.2rem): subtítulos de ficha y nombres en filas.
- **Body** (400, 1.1875rem, 1.5): todo el texto. Secundario a 1.0625rem como mínimo.
- **Label** (500–600, 1rem): pestañas, chips, etiquetas de botón.
- **Numeral** (Lexend 600, cifras tabulares): kg, repeticiones, tiempos, días; 1.35rem en campos y 2.75rem en el descanso.

### Named Rules
**The Readable Distance Rule.** Ningún texto por debajo de 1rem (16 px); el texto de lectura es de 19 px.
**The Lexend Numbers Rule.** Toda cifra va en Lexend con números tabulares.

## Layout

Columna única en el móvil con margen de 16 px y una barra de pestañas fija abajo; el contenido termina 116 px por encima de ella. Las secciones se separan 36 px; dentro, 14 px. Desde 720 px: margen de 32 px, inicio en dos columnas (rutina de hoy 1,25fr y semana + mis rutinas 1fr) y rejillas de dos columnas. Desde 900 px: editor, historial, ficha y entreno en dos columnas con el panel izquierdo fijo. Desde 1024 px: la barra de pestañas pasa a un riel lateral de 104 px con la marca arriba. Ninguna rejilla puede pasar del ancho de pantalla (`grid-template-columns:minmax(0,1fr)`).

## Elevation & Depth

Plano: no hay sombras. La profundidad sale de la escala tonal (negro → grafito → grafito alto → grafito más alto) y de un desenfoque translúcido solo en lo que flota sobre el contenido: barra de pestañas, cabecera del entreno, barra de descanso y botones sobre el maniquí.

### Named Rules
**The Tone-Not-Shadow Rule.** Para elevar algo, súbelo un escalón de gris; nunca le pongas sombra ni borde.

## Shapes

Esquinas suaves de 16 px en tarjetas y listas, 12 px en campos y bloques internos, 10 px en miniaturas del maniquí, 20 px en la parte de arriba de las hojas. Botones, chips y el ✓ son píldoras o círculos. El único contorno permitido es el anillo interior de 2 px en lima para lo seleccionado o lo que toca ahora.

## Components

### Buttons
- **Shape:** píldora (999px), 54 px de alto (60 px el grande).
- **Primary:** lima con tinta casi negra, Lexend 600.
- **Hover / Focus:** lima más clara; foco con contorno lima de 3 px; al pulsar, escala 0,97.
- **Soft:** grafito alto con texto blanco. **Ghost:** transparente con anillo interior de 1,5 px.

### Chips
- **Style:** grafito alto, Lexend 500, 44 px; punto de color de zona delante.
- **State:** el seleccionado es blanco con texto negro.

### Cards / Containers
- **Corner Style:** 16 px.
- **Background:** grafito, sin borde ni sombra; 20 px de relleno.
- **Listas agrupadas:** filas de 76 px con miniatura, título Lexend y chevron, separadas por un filete de 1 px.

### Inputs / Fields
- **Style:** grafito alto, sin borde, 12 px de radio; números en Lexend 1.35rem centrados.
- **Focus:** anillo interior lima de 2 px.

### Navigation
- **Style:** barra translúcida con desenfoque, cuatro pestañas con icono de 28 px y etiqueta de 1rem; la activa en lima. En escritorio, riel lateral.

### Escenario del maniquí
El maniquí 3D de madera sobre un foco radial con el color de su zona. En el inicio ocupa la cabecera de la tarjeta de la rutina de hoy (16:10).

### Anillo semanal
Anillo lima de 11 px de trazo con los días entrenados frente a la meta de 3; junto al saludo en el móvil y en la tarjeta «Esta semana».

## Do's and Don'ts

### Do:
- **Do** usar el lima (#B6F23E) solo para la acción principal, lo hecho y el progreso.
- **Do** elevar con la escala de grises (#1C1C1E → #2C2C2E → #3A3A3C).
- **Do** poner todas las cifras en Lexend con números tabulares.
- **Do** dar a cada botón al menos 48 px de alto.

### Don't:
- **Don't** usar letra por debajo de 1rem: los usuarios son mayores.
- **Don't** poner bordes, sombras ni tarjetas dentro de tarjetas.
- **Don't** colocar etiquetas o chips encima de un título.
- **Don't** rellenar botones o textos con el color de zona.
- **Don't** usar estética de gimnasio agresiva (rojos de alarma, mayúsculas gritonas) ni infantil.
