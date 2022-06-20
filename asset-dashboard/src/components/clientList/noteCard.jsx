import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ClientNoteCard } from "../clientList/clientList";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useTheme } from "@emotion/react";
import { CardHeader } from "@material-ui/core";
// import { Link as RouterLink } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";

const NoteCard = (props) => {
  const note = useContext(ClientNoteCard);

  const [clientID, setclientID] = useState(note.ClientID);

  const handleClick = (e) => {
    e.preventDefault();
    setclientID(e.target.value);
    props.handleClick(clientID);
  };

  return (
    <Card sx={{ bgColor: "#375f5f" }}>
      {/* <CardActionArea component={RouterLink} to="/home"> */}
      {/* <CardActionArea> */}
      <CardHeader title="Client's Details" />
      <CardContent>
        <Typography color="inherit" gutterBottom variant="h6" component="div">
          Client Name : <span>{note.ClientName}</span>
        </Typography>
        <Typography variant="body2">
          Client ID : <span>{note.ClientID}</span>
        </Typography>
      </CardContent>
      {/* <CardActions> */}
      <Typography>
        {" "}
        <Button
          component={Link}
          to="/home"
          value={note.ClientID}
          onClick={handleClick}
          color="secondary"
          size="small"
        >
          Go to Client Dashboard
        </Button>{" "}
      </Typography>
      {/* </CardActions> */}
      {/* </CardActionArea> */}
    </Card>
  );
};

export default NoteCard;
