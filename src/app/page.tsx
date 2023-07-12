"use client";

import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { LineLayer } from "react-map-gl";
import type { FeatureCollection } from "geojson";

import geojsonData from "../data/data.json";

const layerStyle: LineLayer = {
  id: "line",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-width": 2,
    "line-color": "#007cbf",
  },
};

console.log(geojsonData);

export default function Home() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -112.4,
        latitude: 37.8,
        zoom: 2.5,
      }}
      style={{ width: 900, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id="my-data" type="geojson" data={geojsonData}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );
}
