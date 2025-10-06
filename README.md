# GEO APP

Aplicación web para visualización y control de mapas interactivos desarrollada por Geoproyecciones SAS.

## Descripción

GEO APP es una aplicación desarrollada con Typescript, React y Vite que permite visualizar mapas, agregar marcadores y controlar capas de información geográfica. Está pensada para facilitar la gestión y visualización de datos espaciales de manera sencilla e intuitiva, con enfoque en la visualización de terrenos y sectores rurales.

## Características principales

-    Visualización de mapas interactivos.
-    Control de capas (mostrar/ocultar diferentes fuentes de datos):
     -    Mapas base: Carto Light/Dark, OSM Standard/Humanitarian, OpenTopoMap, Esri Satélite/Callejero.
     -    Capas superpuestas: Terreno, Sector Rural y otras capas WMS.
-    Agregado y gestión de marcadores personalizados:
     -    Marcadores dinámicos con capacidad de rotación.
     -    Popups informativos con coordenadas geográficas.
     -    Interacción con elementos del mapa (terrenos, sectores rurales).
-    Consulta de información geográfica:
     -    Servicio WMS para obtener datos de predios y sectores.
     -    Visualización de información detallada en ventanas modales.
     -    Resaltado visual de elementos seleccionados en el mapa.
-    Mini-mapa y controles adicionales:
     -    Mini-mapa interactivo para navegación rápida.
     -    Control de escala para mediciones precisas.
     -    Funcionalidad de captura y exportación a PDF del mapa.
-    Interfaz moderna y responsiva.

## Requisitos del sistema

-    Node.js (v20.0.0 o superior)
-    npm (v10.0.0 o superior)

## Instalación

1. Clona este repositorio:

     ```bash
     git clone <https://github.com/fabianperdomolaguna/app-geo-react.git>
     cd APP
     ```

2. Instala las dependencias:

     ```bash
     npm install
     ```

## Uso

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

Esto levantará un servidor local en [http://localhost:5173](http://localhost:5173).

Para construir la aplicación para producción:

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`, listos para ser desplegados en cualquier servidor web estático.

## Estructura del proyecto

-    `src/` — Código fuente de la aplicación.
     -    `components/` — Componentes reutilizables del mapa.
     -    `controls/` — Controles personalizados (marcadores, minimapa, captura).
     -    `events/` — Manejadores de eventos (clicks, popups).
     -    `layers/` — Definición de capas base y superpuestas.
     -    `services/` — Datos simulados para estadística.
     -    `ui/` — Elementos de interfaz de usuario (modales).
     -    `config.ts` — Configuración inicial (coordenadas).
     -    `MapControl.tsx` — Componente principal del mapa - Controlador.
     -    `map.scss` — Estilos específicos del mapa.
     -    `assets/` — Imágenes y recursos estáticos.
     -    `img/` — Imágenes utilizadas en la aplicación (favicon, marcadores).
     -    `scss/` — Estilos en SASS.
     -    `colors.scss` — Variables de colores.
     -    `sizes.scss` — Variables de tamaños.
     -    `loading.scss` — Estilos para el indicador de carga.
     -    `index.scss` — Archivo principal de estilos.
-    `package.json` — Dependencias y scripts del proyecto.

## Dependencias principales

-    [Leaflet](https://leafletjs.com/) (v1.9.4) — Biblioteca JavaScript para mapas interactivos.
-    [React Leaflet](https://react-leaflet.js.org/) (5.0.0) — Biblioteca de componentes de React para mapas de Leaflet.
-    [Bootstrap](https://getbootstrap.com/) (v5.3.3) — Framework CSS para diseño responsivo.
-    [Leaflet-MiniMap](https://github.com/Norkart/Leaflet-MiniMap) (v3.6.1) — Plugin para mostrar un mini-mapa.
-    [Leaflet-Marker-Rotation](https://github.com/bbecquet/Leaflet.RotatedMarker) (v0.3.0) — Plugin para rotación de marcadores.
-    [Leaflet.Awesome-Markers](https://github.com/lvoogdt/Leaflet.awesome-markers) (v2.0.5) — Marcadores personalizados con iconos.
-    [Leaflet-Image](https://github.com/mapbox/leaflet-image) (v0.4.0) — Para capturar imágenes del mapa.
-    [html2canvas](https://html2canvas.hertzen.com/) (v1.4.1) — Para capturar el mapa como imagen.
-    [jsPDF](https://github.com/parallax/jsPDF) (v3.0.3) — Para exportar el mapa a PDF.
-    [Font Awesome](https://fontawesome.com/) (v7.1.0) — Iconos vectoriales.

## Despliegue

Para desplegar la aplicación en un entorno de producción:

1. Construye la aplicación:

     ```bash
     npm run build
     ```

2. Los archivos generados en la carpeta `dist/` pueden ser desplegados en cualquier servidor web estático como:

     - Netlify
     - Vercel
     - GitHub Pages
     - Amazon S3
     - Servidor Apache/Nginx

3. Si deseas probar localmente los archivos de producción antes de desplegarlos, puedes usar:

     ```bash
     npx serve -s dist
     ```

## Configuración

La aplicación está configurada para mostrar inicialmente un mapa centrado en las coordenadas definidas en `src/config/config.ts`. Puedes modificar estas coordenadas para ajustar la vista inicial del mapa según tus necesidades.

```javascript
// Coordenadas iniciales (latitud, longitud)
export const initialCoords: [number, number] = [10.494762, -75.123706]
```
