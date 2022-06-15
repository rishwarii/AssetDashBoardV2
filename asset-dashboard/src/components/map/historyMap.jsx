import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@material-ui/core";
import axios from "axios";

const center = {
  lat: 27.1753738514716,
  lng: 78.04209928206996,
};

const mapContainerStyle = {
  width: "1000px",
  height: "400px",
};

const MapHistory = (props) => {
  const deviceId = props.deviceId;

  console.log(deviceId);

  //API call for location history info
  const [addBluePath, setaddBluePath] = useState([]);
  const [LoadingBluePath, setLoadingBluePath] = useState(true);

  useEffect(() => {
    getBluePath();
  }, [LoadingBluePath]);

  const getBluePath = async (deviceId) => {
    try {
      const response = await axios.get(
        `https://ehkwpzkqme.execute-api.ap-south-1.amazonaws.com/prod/trackhistory?deviceSerialNumber=${deviceId}`
      );
      const aRes = await response.data.path;
      setaddBluePath(aRes);
      setLoadingBluePath(false);

      //data.path is necessary
    } catch (error) {
      console.log("ERROR 2");
    }
  };

  return LoadingBluePath ? (
    <div className="loader">
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  ) : (
    <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
      >
        {addBluePath.map((marker, i) => (
          <Marker
            key={i}
            position={{
              lat: parseFloat(marker.Latitude),
              lng: parseFloat(marker.Longitude),
            }}
            icon={{
              path:
                "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
              fillColor: "blue",
              fillOpacity: 0.6,
              strokeWeight: 0.5,
              rotation: 0,
              scale: 2,
            }}
            title={`Crossed On: ${marker.TimeDate}`}
          ></Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapHistory;
