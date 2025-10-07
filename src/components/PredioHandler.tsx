import { useMapEvent } from "react-leaflet";
import { useState } from "react";
import type { Feature, Polygon } from "geojson";
import PredioModal from "@/components/modal/PredioModal";
import usePredioHighlight from "@/hooks/usePredioHighlight";
import { getFeatureInfoUrl } from "@/helpers/feature-info";
import type * as L from "leaflet";

interface LeafletMouseEventWithOriginal extends L.LeafletMouseEvent {
  originalEvent: MouseEvent;
}

interface PredioProperties {
  etiqueta?: string;
  area_terreno?: number | string;
}

function PredioHandler({ terrenoRef, sectorRuralRef }: { terrenoRef: React.RefObject<any>, sectorRuralRef: React.RefObject<any> }) {
  const [selectedFeature, setSelectedFeature] = useState<Feature<Polygon, PredioProperties> | null>(null);

  const map = useMapEvent("click", async (e: LeafletMouseEventWithOriginal) => {
    // Avoid close modal clicking in capture button or inside the modal
    // @types/leaflet doesn't expose DOM event -> extend LeafletMouseEvent
    const orig = e.originalEvent;
    const targetEl = orig?.target as HTMLElement | null;

    if (
      targetEl?.closest?.("#capture-map-btn") ||
      targetEl?.closest?.(".predio-modal") 
    ) {
      return;
    }
    
    const layers = [
      { name: "repelon:lc_terreno", ref: terrenoRef },
      { name: "repelon:cc_sectorrural", ref: sectorRuralRef },
    ];

    const activeLayers = layers.filter(
      (l) => l.ref.current && map.hasLayer(l.ref.current)
    );

    if (activeLayers.length === 0) return;

    const results = await Promise.all(
      activeLayers.map(async (layer) => {
        const url = getFeatureInfoUrl(map, layer.ref, e.latlng);
        const res = await fetch(url);
        const data = await res.json();
        return data.features?.[0] ?? null;
      })
    );

    const firstFeature = results.find((f) => f !== null);
    setSelectedFeature(firstFeature || null);
  });

  usePredioHighlight(map, selectedFeature);

  return (
    <PredioModal
      visible={selectedFeature ? true : false}
      info={selectedFeature?.properties}
      onClose={() => setSelectedFeature(null)}
    />
  );
}

export default PredioHandler
