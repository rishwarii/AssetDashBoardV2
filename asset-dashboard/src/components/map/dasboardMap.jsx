import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import "../../pages/single/Single";
import LocationMarker from "../locationMarker/locationMarker";
import "./map.scss";
import CircularColor from "../loading-spinner/LoadingSpinner";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

const mapContainerStyle = {
  width: "500px",
  height: "300px",
};

const center = {
  lat: 67,
  lng: 87,
};

//TODO: Add if check foe device id / client id

const MapsComponentDash = (props) => {
  const [AllAsset, setAllAsset] = useState([]);
  const [Loading, setLoading] = useState(false);

  const clientIDRoute = useSelector((state) => state.client);
  const dispatch = useState();

  const { fetchClientId } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    async function getAllAssets() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://ehkwpzkqme.execute-api.ap-south-1.amazonaws.com/prod/allassets"
        );

        const AllAsset = await response.data;
        // if (componentMounted.current) {
        setAllAsset(AllAsset);
        setLoading(false);

        // return () => {
        //   // This code runs when component is unmounted
        //   componentMounted.current = false;
        // };
      } catch (error) {
        console.log("ERROR DMAp");
      }
    }
    getAllAssets();
  }, [setAllAsset]);

  //TODO: add spiiner for loading
  return (
    //   <CircularColor color="secondary" />
    // ) : (
    <div className="mapDash">
      <LoadScript googleMapsApiKey="AIzaSyCqnsYyCrtslXT09ZGHvzQPu6f2biBEFR4">
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={center}
        >
          {AllAsset.map((marker, i) => (
            <Marker
              key={i}
              title={`Device ID : ${marker.ClientID}`}
              position={{
                lat: parseFloat(marker.Latitude),
                lng: parseFloat(marker.Longitude),
              }}
            ></Marker>
          ))}
          {/* <Marker position={center}></Marker> */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapsComponentDash;
