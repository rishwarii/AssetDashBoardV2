import { Container } from "@material-ui/core";
import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import NoteCard from "./noteCard";
import axios from "axios";
import { Typography, Box, Button } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";

const ClientList = () => {
  const [clientD, setclientD] = useState([{}]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://x6fxeu21qb.execute-api.ap-south-1.amazonaws.com/test/allclients"
        );

        setclientD(response.data);
        setLoading(false);
        console.log(clientD);
      } catch (err) {
        console.error("ERROR IN client");
      }
    };
    getData();
  }, []);

  return !Loading ? (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Client List : </h2>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {clientD.map((note) => (
          <Grid key={note.ClientID} item xs={2} sm={4} md={4}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <div className="loader">
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  );
};

export default ClientList;
