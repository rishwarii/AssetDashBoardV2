import "./new.scss";
import { useState } from "react";
import "./New1.scss";
import { Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AssetList from "../list/AssetList";
import MiniDrawer from "../../components/sidebar/sidebar2coll2";
import axios from "axios";
import { Box, Grid, MenuItem, TextField, Button } from "@material-ui/core";

const NewAsset = () => {
  const [newAsset, setnewAsset] = useState({
    ClientID: "",
    AssetName: "",
    AssetSerialNumber: "",
    AssetType: " ",
    DeviceSerialNumber: "",
    EndLatitude: "",
    EndLongitude: "",
    StartLatitude: "",
    StartLongitude: "",
  });

  const [status, setStatus] = useState();
  // const [selectDateTime, setselectDateTime] = (useState < Date) | (null > null);

  function onTextFieldChange(e) {
    setnewAsset({
      ...newAsset,
      [e.target.name]: String(e.target.value),
    });

    console.log(newAsset);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        `https://x6fxeu21qb.execute-api.ap-south-1.amazonaws.com/test/clientassets`,
        newAsset
      );
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  if (status) {
    return (
      <div>
        <AssetList></AssetList>
      </div>
    );
  }

  return (
    <div className="home">
      <MiniDrawer />
      <div className="homeContainer">
        <div className="widgets">{/* <Widget type="order" /> */}</div>
        <div className="listContainer">
          <div>
            <div className="listTitle">
              <h1>Add New Asset </h1>
            </div>
          </div>

          <form>
            <div>
              <Grid
                spacing={3}
                container
                rowSpacing={10}
                columnSpacing={{ xs: 5, sm: 5, md: 5 }}
                marginRight={10}
              >
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="ClientID"
                      name="ClientID"
                      variant="outlined"
                      required
                      fullWidth
                      id="ClientID"
                      label=" Client ID"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="assetName"
                      name="AssetName"
                      variant="outlined"
                      required
                      fullWidth
                      id="AssetName"
                      label=" Asset Name"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="assetSerialNumber"
                      name="AssetSerialNumber"
                      variant="outlined"
                      required
                      fullWidth
                      id="AssetSerialNumber"
                      label="Asset Serial Number"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="DeviceSerialNumber"
                      name="DeviceSerialNumber"
                      variant="outlined"
                      required
                      fullWidth
                      id="DeviceSerialNumber"
                      label="DeviceSerialNumber"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      name="Asset Type"
                      label="Asset Type"
                      required
                      variant="outlined"
                      // value={newAsset.AssetType}
                      fullWidth
                      id="AssetType"
                      onChange={(e) => onTextFieldChange(e)}
                    >
                      {/* <MenuItem value="">
                        <em>None Selected </em>
                      </MenuItem>
                      <MenuItem value={"Delicate"}>Delicate</MenuItem>
                      <MenuItem value={"Not Delcicate"}>Not Delicate</MenuItem> */}
                    </TextField>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="EndLocationLatitude"
                      name="EndLocationLatitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="EndLocationLatitude"
                      label="End Location Latitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="EndLocationLongitude"
                      name="EndLocationLongitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="EndLocationLongitude"
                      label=" EndLocationLongitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="StartLocationLatitude"
                      name="StartLocationLatitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="StartLocationLatitude"
                      label=" StartLocationLatitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="formInput">
                    <TextField
                      autoComplete="StartLocationLongitude"
                      name="StartLocationLongitude"
                      variant="outlined"
                      required
                      fullWidth
                      id="StartLocationLongitude"
                      label="StartLocationLongitude"
                      onChange={(e) => onTextFieldChange(e)}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>

            <Box m={3}>
              <Button
                width="150px"
                type="submit"
                align="center"
                variant="contained"
                color="primary"
                onClick={(e) => onFormSubmit(e)}
              >
                Add Asset
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewAsset;
