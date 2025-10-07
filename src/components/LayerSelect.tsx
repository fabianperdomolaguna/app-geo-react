import React from "react"
import { LayersControl } from "react-leaflet";
import { BASE_LAYERS, type ConfigBaseLayer } from "@/layers/BaseLayers";
import { WMSLayer } from "@/layers/WmsLayers";

function LayerSelect({ terrenoRef, sectorRuralRef }: { terrenoRef: React.RefObject<any>, sectorRuralRef: React.RefObject<any> }) {
  const { BaseLayer, Overlay } = LayersControl;

  return (
    <LayersControl position="topright">
      {BASE_LAYERS.map((layer: ConfigBaseLayer) => (
        <BaseLayer
          key={layer.identifier}
          checked={layer.checked}
          name={layer.identifier}
        >
          {layer.layer}
        </BaseLayer>
      ))}

      <Overlay name="Zona Homogenea" checked={true}>
        <WMSLayer layerName="repelon:av_zonahomogeneafisicarural" />
      </Overlay>

      <Overlay name="Terreno">
        <WMSLayer layerName="repelon:lc_terreno" ref={terrenoRef} />
      </Overlay>

      <Overlay name="Sector Rural">
        <WMSLayer layerName="repelon:cc_sectorrural" ref={sectorRuralRef} />
      </Overlay>
    </LayersControl>
  );
}

export default LayerSelect;
