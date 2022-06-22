import { useRef, useState, useEffect, createContext } from "react";
import "./single.scss";
import React from "react";
import StartEndMap from "../../components/map/StartEndMap";
import CircularProgress from "@mui/material/CircularProgress";
import MapHistory from "../../components/map/historyMap";
import MiniDrawer from "../../components/sidebar/sidebar2coll2";
import { Box } from "@material-ui/core";

import { useParams } from "react-router-dom";

import axios from "axios";

import { LiveTracking, LiveView } from "../../components/map/liveLocation";

export const SerialNumberD = createContext();
export const PositionStart = createContext();
export const positionEnd = createContext();

const Single = () => {
  const API_KEY_GMAPS = process.env.NEXT_GMAPS_APP_API_KEY;

  // const { apiLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.GMAPS_APP_API_KEY,
  // });

  const { AssetID } = useParams();

  //map prt

  //calling api again after
  //TODO: call api only in one place

  const [SingleAsset, setSingleAsset] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //API call for single asset info fetch
  useEffect(() => {
    const getSingleAsset = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://x6fxeu21qb.execute-api.ap-south-1.amazonaws.com/test/clientasset?AssetID=${AssetID}`
        );
        setSingleAsset(response.data[0]);
        console.log(SingleAsset.AssetID);
      } catch (error) {
        console.log("ERROR");
      }
    };
    getSingleAsset();

    setLoading(false);
  }, []);

  const deviceId = SingleAsset.DeviceSerialNumber;

  console.log(deviceId);
  const latitudeStart = parseFloat(SingleAsset.StartLatitude, 10);
  const longitudeStart = parseFloat(SingleAsset.StartLongitude, 10);

  const latitudeEnd = parseFloat(SingleAsset.EndLatitude, 10);
  const longitudeEnd = parseFloat(SingleAsset.EndLongitude, 10);

  const positionStart = {
    lat: latitudeStart,
    lng: longitudeStart,
  };

  const positionEnd = {
    lat: latitudeEnd,
    lng: longitudeEnd,
  };

  //API call for location history info

  const onLoad = (marker) => {
    // console.log("marker: ", marker);
  };

  const clientID = deviceId;

  return isLoading ? (
    <div className="loader">
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  ) : (
    <div className="single">
      <MiniDrawer />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{SingleAsset.AssetName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Asset Type:</span>
                  <span className="itemValue">{SingleAsset.AssetType}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Expected Delivery :</span>
                  <span className="itemValue">
                    {SingleAsset.expectedDeliveryDateTime}
                  </span>
                  <span className="itemValue">
                    {SingleAsset.startLocationLatitude}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1 className="title">Start and End Location</h1>
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
            {/* <PositionStart.Provider>  */}
            <StartEndMap
              positionStart={positionStart}
              positionEnd={positionEnd}
            ></StartEndMap>
            {/* </PositionStart.Provider> */}
          </div>
        </div>

        {/* for the time putting map here will make component when get api single  */}
        <div className="bottom">
          <div>{}</div>

          {/* //TODO: extract to component */}
          <h1 className="title">Location History</h1>
          <div className="map">
            <SerialNumberD.Provider value={deviceId}>
              <MapHistory />
            </SerialNumberD.Provider>
          </div>
        </div>
        {/* THIS IS LiIVE TRACKIGGG */}
        <div className="bottom">
          <h1 className="title">Live Tracking</h1>
          <div id="map" className="map">
            <SerialNumberD.Provider value={deviceId}>
              <LiveTracking />
            </SerialNumberD.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
