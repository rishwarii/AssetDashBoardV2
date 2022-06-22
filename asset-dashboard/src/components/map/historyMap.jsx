import React, { useState, useEffect, useContext } from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import CircularProgress from "@mui/material/CircularProgress";
import { SerialNumberD } from "../../pages/single/Single";
import { Box } from "@material-ui/core";
import axios from "axios";
// import { MapContainer, TileLayer, useMap, Popup } from "react-leaflet";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import L, { Point, DivIcon } from "leaflet";
import mapMarkerHis from "../../imgAsset/icons8-location-40.png";

import "leaflet/dist/leaflet.css";

const mapContainerStyle = {
  width: "1000px",
  height: "400px",
};

const center = {
  lat: 26.898,
  lng: 75.81734,
};

const markerIcon = new L.Icon({
  iconUrl: require("../../imgAsset/icons8-location-40.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MapHistory = () => {
  const deviceserialNum = useContext(SerialNumberD);
  // const deviceserialNum = props.deviceId;
  // const deviceId = "randomgps01";

  console.log(deviceserialNum);

  //API call for location history info
  const [addBluePath, setaddBluePath] = useState([]);
  const [LoadingBluePath, setLoadingBluePath] = useState(true);

  useEffect(() => {
    getBluePath();
  }, [deviceserialNum]);

  const getBluePath = async () => {
    try {
      const response = await axios.get(
        `https://ehkwpzkqme.execute-api.ap-south-1.amazonaws.com/prod/trackhistory?deviceSerialNumber=${deviceserialNum}`
      );
      const aRes = await response.data.path;
      setaddBluePath(aRes);
      setLoadingBluePath(false);

      //data.path is necessary
    } catch (error) {
      console.log("ERROR 2");
    }
  };

  console.log(addBluePath);

  return (
    <MapContainer
      style={mapContainerStyle}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {addBluePath.map((marker, i) => (
        <Marker
          key={i}
          position={{
            lat: parseFloat(marker.Latitude),
            lng: parseFloat(marker.Longitude),
          }}
          icon={markerIcon}
        >
          {" "}
          <Popup>`Crossed On: ${marker.TimeDate}`</Popup>
        </Marker>
      ))}

      <Marker position={center} icon={markerIcon}></Marker>
    </MapContainer>
  );
};

export default MapHistory;

// LoadingBluePath ? (
//   <div className="loader">
//     <Box sx={{ display: "flex" }}>
//       <CircularProgress color="secondary" />
//     </Box>
//   </div>
// ) :
