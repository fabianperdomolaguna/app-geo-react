import L from "leaflet";
import { AUTH_KEY } from "@/config/config";

interface WMSLayerInternal extends L.TileLayer.WMS {
  _url: string;
  wmsParams: {
    layers: string;
    format?: string;
    transparent?: boolean;
    version?: string;
    [key: string]: string | number | boolean | undefined;
  };
}

export function getFeatureInfoUrl(
  map: L.Map,
  layerRef: React.RefObject<L.TileLayer.WMS>,
  latlng: L.LatLng
): string {
  const layer = layerRef.current as WMSLayerInternal | null;
  if (!layer) return "";

  const { _url: baseUrl, wmsParams } = layer;

  const point = map.latLngToContainerPoint(latlng);
  const size = map.getSize();

  const params = {
    ...wmsParams,
    request: "GetFeatureInfo",
    service: "WMS",
    srs: "EPSG:4326",
    bbox: map.getBounds().toBBoxString(),
    height: size.y,
    width: size.x,
    layers: wmsParams.layers,
    query_layers: wmsParams.layers,
    info_format: "application/json",
    x: Math.floor(point.x),
    y: Math.floor(point.y),
    feature_count: 1,
    authkey: AUTH_KEY,
  };

  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value != null)
      url.searchParams.append(key.toUpperCase(), String(value));
  });

  return url.toString();
}