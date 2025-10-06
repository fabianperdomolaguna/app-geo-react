import React from "react";
import L from "leaflet"
import { TileLayer } from "react-leaflet";

export const standardOSMmm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '©OpenStreetMap, ©Standard',
	minZoom: 0,
	maxZoom: 24,
	crossOrigin: true,
});

export type ConfigBaseLayer = {
  identifier: string;
  layer: React.ReactElement;
  checked: boolean;
};

const CartoLight: React.ReactElement = (
  <TileLayer
    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
    attribution="&copy;OpenStreetMap, &copy;CartoDB"
    subdomains="abcd"
    maxZoom={24}
    crossOrigin={true}
  />
);

const OSMStandard: React.ReactElement = (
  <TileLayer
    url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy;OpenStreetMap, &copy;Standard"
    minZoom={0}
    maxZoom={24}
    crossOrigin={true}
  />
);

const OSMStandardHumanitarian: React.ReactElement = (
  <TileLayer
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    attribution="&copy;OpenStreetMap, &copy;Humanitarian"
    subdomains="abc"
    maxZoom={20}
    crossOrigin={true}
  />
);

const OpenTopoMap: React.ReactElement = (
  <TileLayer
    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
    attribution="&copy;OpenStreetMap, &copy;OpenTopoMap"
    subdomains="abc"
    maxZoom={17}
    crossOrigin={true}
  />
);

const ESRISatellite: React.ReactElement = (
  <TileLayer
    url={
      `https://server.arcgisonline.com/ArcGIS/rest/services/` +
      `World_Imagery/MapServer/tile/{z}/{y}/{x}`
    }
    attribution="Tile &copy; ESRI"
    maxZoom={19}
    crossOrigin={true}
  />
);

const ESRIStreet: React.ReactElement = (
  <TileLayer
    url={
      `https://server.arcgisonline.com/ArcGIS/rest/services/` +
      `World_Street_Map/MapServer/tile/{z}/{y}/{x}`
    }
    attribution="&copy;OpenStreetMap, &copy;CartoDB"
    subdomains="abcd"
    maxZoom={24}
    crossOrigin={true}
  />
);

const CartoDark: React.ReactElement = (
  <TileLayer
    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    attribution="Tile &copy; ESRI"
    maxZoom={19}
    crossOrigin={true}
  />
);

export const BASE_LAYERS: ConfigBaseLayer[] = [
  { identifier: "Carto Light", layer: CartoLight, checked: true },
  { identifier: "OSM Standard", layer: OSMStandard, checked: false },
  { identifier: "OSM Humanitarian", layer: OSMStandardHumanitarian, checked: false },
  { identifier: "Open Topo Map", layer: OpenTopoMap, checked: false },
  { identifier: "ESRI Satélite", layer: ESRISatellite, checked: false },
  { identifier: "ESRI Callejero", layer: ESRIStreet, checked: false },
  { identifier: "Carto Dark", layer: CartoDark, checked: false },
];
