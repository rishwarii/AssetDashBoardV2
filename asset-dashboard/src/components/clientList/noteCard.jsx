import React, { useState, useEffect, useContext } from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Card from "../cardClient/clientCard";
import { ClientNoteCard } from "../clientList/clientList";
import "./clientCard.css";
import { useNavigate } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useTheme } from "@emotion/react";
import { CardHeader } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

const NoteCard = (props) => {
  const note = useContext(ClientNoteCard);

  // const [clientID, setclientID] = useState(note.ClientID);
  const [clientID, setclientID] = useState(note.id);
  const dispatch = useState();

  const { fetchClientId } = bindActionCreators(actionCreators, dispatch);

  const handleClick = (e) => {
    e.preventDefault();
    setclientID(e.target.value);
    props.handleClick(clientID);
  };

  return (
    <div className="card">
      {/* <img src={this.props.img} /> */}
      <div className="card-body">
        <h2>
          Client Name : <span>{note.ClientName}</span>
        </h2>
        <h5>
          {" "}
          Client ID : <span>{note.ClientID}</span>
        </h5>
        <Link to="/home">
          <Button
            value={note.ClientID}
            onClick={handleClick}
            // onClick={}
            // color="secondary"
            // size="small"
          >
            Go to Client Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
