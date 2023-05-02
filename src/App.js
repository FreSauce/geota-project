import React from "react";
import "./App.css";
import Mapbox from "./components/Mapbox";
import { Form, Card } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [mapType, setMapType] = useState("agro");
  const [year, setYear] = useState(2020);

  return (
    <div className="App">
      {console.log(mapType, year)}
      <Card
        style={{
          width: "300px",
          height: "200px",
          padding: "10px",
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1000,
        }}
      >
        <Form>
          <Form.Label>Select Map Type</Form.Label>
          <Form.Select
            value={mapType}
            onChange={(e) => setMapType(e.target.value)}
          >
            <option value="water">Water Shape Files</option>
            <option value="agro">Agricultural land Shape Files</option>
            <option value="industry">Industrial area Shape Files</option>
            <option value="road">Road Network Shape File</option>
          </Form.Select>
          <Form.Label>Select Year</Form.Label>
          <Form.Select
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
            <option value="2010">2010</option>
            <option value="2015">2015</option>
            <option value="2020">2020</option>
          </Form.Select>
        </Form>
      </Card>

      {/* add legends here colorcode with corresponding values*/}

      <Mapbox mapType={mapType} year={year} />
    </div>
  );
}

export default App;
