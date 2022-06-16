import React, { createContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { CardHeader } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { Link as RouterLink } from "react-router-dom";

const NoteCard = ({ note }) => {
  const clientID = note.ClientID;

  return (
    <Card sx={{ bgColor: "#375f5f" }}>
      {/* <CardActionArea component={RouterLink} to={`/home${note.ClientI}`}> */}
      <CardActionArea>
        <CardHeader title="Client's Details" />
        <CardContent>
          <Typography color="inherit" gutterBottom variant="h6" component="div">
            Client Name : <span>{note.ClientName}</span>
          </Typography>
          <Typography variant="body2">
            Client ID : <span>{note.ClientID}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
