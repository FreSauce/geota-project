import { useEffect, useState } from "react";
import { kmlData } from "../kmlData";
import * as tj from "@mapbox/togeojson";
import rewind from "@mapbox/geojson-rewind";
import { GeoJSON } from "react-leaflet";

const GeotiffLayer = ({ mapType, year }) => {
  const [layer, setLayer] = useState(null);

  const parseTextAsKml = (text) => {
    const dom = new DOMParser().parseFromString(text, "text/xml"); // create xml dom object
    const converted = tj.kml(dom); // convert xml dom to geojson
    rewind(converted, false); // correct right hand rule
    console.log(converted);
    setLayer(converted); // save converted geojson to hook state
  };

  const hashString = (str) => {
    var hash = 0,
      i,
      chr;
    for (i = 0; i < Math.min(str.length, 255); i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  useEffect(() => {
    const kml = kmlData[mapType][year];
    parseTextAsKml(kml);
  }, [mapType, year]);

  return (
    layer && <GeoJSON key={hashString(JSON.stringify(layer))} data={layer} />
  );
};

export default GeotiffLayer;
