import React, { useState, useEffect, useContext } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import CircularProgress from "@mui/material/CircularProgress";
import { SerialNumberD } from "../../pages/single/Single";
import { Box } from "@material-ui/core";
import axios from "axios";
import { MapContainer, TileLayer, useMap, Popup } from "react-leaflet";

const mapContainerStyle = {
  width: "1000px",
  height: "400px",
};

const center = {
  lat: 27.1753738514716,
  lng: 78.04209928206996,
};

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

  // console.log(addBluePath);

  // const center1 = {
  //   lat: parseFloat(addBluePath[0].Latitude),
  //   lng: parseFloat(addBluePath[0].Longitude),
  // };

  // console.log(center1);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
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
          path={addBluePath}
        ></Polyline> */}
      </GoogleMap>
    </LoadScript>
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
