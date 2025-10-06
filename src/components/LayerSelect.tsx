import { LayersControl } from "react-leaflet";
import { BASE_LAYERS, type ConfigBaseLayer } from "@/layers/BaseLayers";
import { OVERLAY_LAYERS, type ConfigWMSLayer } from "@/layers/WmsLayers";

function LayerSelect() {
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

      {OVERLAY_LAYERS.map((layer: ConfigWMSLayer) => (
        <Overlay
          key={layer.identifier}
          name={layer.identifier}
          checked={layer.checked || false}
        >
          {layer.layer}
        </Overlay>
      ))}
    </LayersControl>
  );
}

export default LayerSelect;
