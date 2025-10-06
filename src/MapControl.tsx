import { useEffect, useRef } from "react";
import { MapContainer, ZoomControl, ScaleControl } from "react-leaflet";
import LayerSelect from "@/components/LayerSelect";
import StatsPanel from "@/components/StatsPanel";
import MinimapControl from "@/controls/MinimapControl";
import CaptureMapButton from "@/controls/CaptureMapButton";
import { initialCoords } from "@/config/config";
import { standardOSMmm } from "@/layers/BaseLayers";
import "leaflet/dist/leaflet.css";

function MapControl() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapContainerRef.current = mapRef.current.getContainer();
    }
  }, [mapRef.current]);

  return (
    <MapContainer
      center={initialCoords}
      zoom={15}
      zoomControl={true}
      id="map"
      ref={mapRef}
    >
      <ZoomControl position="topright" />
      <ScaleControl imperial={false} position="bottomleft" />

      <LayerSelect />
      <StatsPanel />

      <MinimapControl
        baseLayer={standardOSMmm}
        options={{
          position: "bottomleft",
          toggleDisplay: true,
          minimized: false,
        }}
      />

      <CaptureMapButton
        mapContainerRef={mapContainerRef}
        filename="captura_mapa.pdf"
      />
    </MapContainer>
  );
}

export default MapControl;
