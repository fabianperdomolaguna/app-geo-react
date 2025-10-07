import { WMSTileLayer } from "react-leaflet";
import type { WMSParams } from "leaflet";
import L from "leaflet";
import { forwardRef } from "react";
import { AUTH_KEY } from "@/config/config";

interface AuthWMSParams extends WMSParams {
  authkey?: string;
}

interface WMSLayerProps {
  layerName: string;
}

export const WMSLayer = forwardRef<L.TileLayer.WMS, WMSLayerProps>(({ layerName }, ref) => {
  const wmsParams: AuthWMSParams = {
    layers: layerName,
    format: "image/png",
    transparent: true,
    authkey: AUTH_KEY,
  };

  return (
    <WMSTileLayer
      ref={ref}
      url="https://gesstorservices.com/geoserver/wms"
      params={wmsParams}
    />
  );
});
