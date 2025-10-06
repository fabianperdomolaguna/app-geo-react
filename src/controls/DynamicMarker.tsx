import { useEffect } from 'react';
import { createRoot } from "react-dom/client";
import { useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet-rotatedmarker';
//import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const redMarkerIconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png";

const defaultIcon = L.icon({
  iconUrl: redMarkerIconUrl,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -35],
});

interface DynamicMarkerProps {
  position: L.LatLngExpression;
  angle?: number;
  popupContent?: string | React.ReactNode;
}

function DynamicMarker({ position, angle = 0, popupContent }: DynamicMarkerProps) {
  const map = useMap();

  useEffect(() => {
    const marker = L.marker(position, {
      icon: defaultIcon,
      rotationAngle: angle,
      rotationOrigin: 'center',
    }).addTo(map);

    if (popupContent) {
      if (typeof popupContent === "string") {
        marker.bindPopup(popupContent);
      } else {
        const div = L.DomUtil.create("div");
        const root = createRoot(div);
        root.render(popupContent);
        marker.bindPopup(div);
      }
    }

    return () => {
      map.removeLayer(marker);
    };
  }, [map, position, angle, popupContent]);

  return null;
}

export default DynamicMarker