import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import ButtonAppBar from "../../components/appBar/ButtonAppBar";
import { useNavigate } from "react-router-dom";

import ClientList from "../../components/clientList/clientList";
import { useTheme } from "@emotion/react";

const useStyle = makeStyles((theme) => ({
  landingPage: {
    minHeight: "150vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(/img/assetOverlay1.jpeg)",
    color: "white",
  },

  welcomeText: {
    color: "white",
    fontFamily: "Nunito",
    position: "fixed",
    top: "35%",
    left: "45%",
  },
  headings: {
    color: "#00bdb8",
    fontFamily: "Nunito",
    position: "fixed",
    fontSize: "10vh",
    alignItems: "center",
    top: "40%",
    left: "30%",
  },

  clientList: {
    top: "60%",
    left: "80%",
  },
}));

const LandingPage = () => {
  const navigate = useNavigate();
  const [clientDD, setclientDD] = useState();

  const getDataa = (clientID) => {
    setclientDD(clientID);
    navigate("/home");
  };

  const classes = useStyle();
  return (
    <div className={classes.main}>
      <div className={classes.landingPage}>
        <CssBaseline></CssBaseline>
        <ButtonAppBar></ButtonAppBar>
      </div>
      <h1 className={classes.welcomeText}>
        Welcome to <br />
        <span className={classes.headings}>Asset Dashboard</span>
      </h1>

      {/* <h2 className={classes.clientList} sx={{}}>
        List of Clients :
      </h2> */}
      <ClientList getClientID={getDataa}></ClientList>
    </div>
  );
};

export default LandingPage;
