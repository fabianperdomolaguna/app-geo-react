import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Control {
    class MiniMap extends L.Control {
      constructor(layer: L.TileLayer, options?: MiniMapOptions);
    }

    interface MiniMapOptions extends L.ControlOptions {
      toggleDisplay?: boolean;
      minimized?: boolean;
    }
  }
}