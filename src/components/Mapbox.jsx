import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import GeotiffLayer from "./GeotiffLayer";

const position = [13.526830494006191, 79.98061189092697];

const Mapbox = ({ mapType, year }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
      minZoom={6}
      maxbounds={[
        [13.472884, 79.927048],
        [13.6019, 80.042541],
      ]}
    >
      <LayersControl position="bottomleft">
        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Topo View">
          <TileLayer
            url="https://c.tile.opentopomap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer checked name="Image View">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
            maxZoom={20}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Grey View">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.png"
            maxZoom={20}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Watercolor">
          <TileLayer
            url="http://a.tile.stamen.com/watercolor/{z}/{x}/{y}.png"
            maxZoom={20}
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <GeotiffLayer mapType={mapType} year={year} />
    </MapContainer>
  );
};

export default Mapbox;
