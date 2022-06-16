import React from "react";
import {
  GoogleMap,
  InfoWindow,
  Polyline,
  useLoadScript,
  Marker,
  LoadScript,
} from "@react-google-maps/api";

const lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 4,
};

const center = {
  lat: 27.1753738514716,
  lng: 78.04209928206996,
};

const mapContainerRight = {
  width: "700px",
  height: "350px",
};

const StartEndMap = (props, positionStart, positionEnd) => {
  // console.log(props.positionStart.lng);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerRight}
        zoom={2}
        center={center}
      >
        <Marker label="Start Position" position={props.positionStart}></Marker>
        <Marker label="End Position" position={props.positionEnd}></Marker>
        {/* <Polyline
          geodesic="true"
          strokeColor="#0000D1"
          icons={[
            {
              icon: lineSymbol,
              offset: "0",
              repeat: "1px",
            },
          ]}
          strokeOpacity="1.0"
          strokeWeight="2"
          path={[props.positionStart, props.positionEnd]}
        ></Polyline> */}
      </GoogleMap>
    </LoadScript>
  );
};

export default StartEndMap;
