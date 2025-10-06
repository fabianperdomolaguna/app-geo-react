import { WMSTileLayer } from "react-leaflet";
import type { WMSParams } from "leaflet";
import { AUTH_KEY } from "@/config/config";

export type ConfigWMSLayer = {
  identifier: string;
  layer: React.ReactElement;
  checked?: boolean;
}

interface AuthWMSParams extends WMSParams {
  authkey?: string;
}

function CreateWMSLayer(layerName: string) {
  const wmsParams: AuthWMSParams = {
    layers: layerName,
    format: "image/png",
    transparent: true,
    authkey: AUTH_KEY,
  };

  return (
    <WMSTileLayer
      url="https://gesstorservices.com/geoserver/wms"
      params={wmsParams}
    />
  );
}

export const OVERLAY_LAYERS: ConfigWMSLayer[] = [
  { identifier: "Zona Homogenea", layer: CreateWMSLayer("repelon:av_zonahomogeneafisicarural"), checked: true },
  { identifier: "Terrneo", layer: CreateWMSLayer("repelon:lc_terreno") },
  { identifier: "Sector Rural", layer: CreateWMSLayer("repelon:cc_sectorrural") },
];
