import { useEffect } from "react";
import L, { Map } from "leaflet";
import type { GeoJsonObject } from "geojson";

interface Feature {
  type: "Feature";
  geometry: GeoJsonObject;
}

function usePredioHighlight(
  map: Map | null,
  feature: Feature | null
) {
  useEffect(() => {
    if (!map || !feature?.geometry) return;

    const layer = L.geoJSON(feature.geometry, {
      style: {
        color: "#e67e22",
        weight: 2,
        fillOpacity: 0.3,
      },
    }).addTo(map);

    // Unmount or feature change
    return () => {
      map.removeLayer(layer);
    };
  }, [map, feature]);
}

export default usePredioHighlight;
