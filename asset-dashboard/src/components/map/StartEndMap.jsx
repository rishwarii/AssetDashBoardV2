import React from "react";
import useState from "react";
import {
  GoogleMap,
  InfoWindow,
  Polyline,
  useLoadScript,
  Marker,
  LoadScript,
} from "@react-google-maps/api";

// import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
// import L, { Point, DivIcon } from "leaflet";
// import mapMarkerHis from "../../imgAsset/icons8-location-40.png";
// import "leaflet/dist/leaflet.css";

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

const mapContainerStyle = {
  width: "1000px",
  height: "400px",
};

const StartEndMap = (props, positionStart, positionEnd) => {
  console.log(props.positionStart.lng);

  const [isLoading, setisLoading] = useState(true);

  // if (props.positionStart) setisLoading(false);

  // const markerIcon = new L.Icon({
  //   iconUrl: require("../../imgAsset/icons8-location-40.png"),
  //   iconSize: [40, 40],
  //   iconAnchor: [17, 46], //[left/right, top/bottom]
  //   popupAnchor: [0, -46], //[left/right, top/bottom]
  // });

  return (
    <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerRight}
        zoom={5}
        center={center}
      >
        <Marker position={props.positionStart}></Marker>
        <Marker position={props.positionEnd}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default StartEndMap;

// !isLoading ? (
//   <MapContainer
//     style={mapContainerRight}
//     center={center}
//     zoom={1}
//     scrollWheelZoom={false}
//   >
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     />
//     <Marker icon={markerIcon} position={props.positionStart}></Marker>
//     <Marker icon={markerIcon} position={props.positionEnd}></Marker>
//   </MapContainer>
// ) : (
//   <div>loading ... </div>
// );
