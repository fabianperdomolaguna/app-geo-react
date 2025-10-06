import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-minimap';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';

type MinimapControlProps = {
  baseLayer: L.TileLayer;
  options?: L.Control.MiniMapOptions;
};

function MinimapControl({ baseLayer, options }: MinimapControlProps) {
  const map = useMap();

  useEffect(() => {
    const minimap = new L.Control.MiniMap(baseLayer, options);

    minimap.addTo(map);

    return () => {
      map.removeControl(minimap);
    };
  }, [map, baseLayer, options]);

  // return is required due to minimap render directly to the canvas
  return null;
}

export default MinimapControl