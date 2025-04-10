import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../Firebase/Firebase";
import { useHistory } from "react-router-dom";
import loginImg from "../Assets/login.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
    paddingBottom: "25px",
    color: "#f0f0f0",
  },
  heading: {
    fontSize: "2.2em",
    fontWeight: "700",
    color: "#22273B",
    fontFamily: "Bebas Neue, sans-serif",
  },
  subHeading: {
    fontSize: "1.6em",
    color: "#22273B",
  },
  mainImg: {
    width: "200px",
    height: "auto",
  },
  channelDiv: {
    padding: "15px",
  },
  channelContent: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "20px",
    alignItems: "center",
  },
  square: {
    height: "80px",
    width: "80px",
    backgroundColor: "#8fabbd66",
    fontSize: "2rem",
    borderRadius: "50%",
  },
  rootChannel: {
    height: "calc(100vh - 185px)",
    position: "relative",
    padding: "15px",
    overflowY: "scroll",
  },
  channelText: {
    paddingTop: "10px",
    fontSize: "1.2rem",
  },
  channelCard: {
    backgroundColor: "rgb(131,58,180)",
    background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(110,95,193,1) 50%, rgba(172,163,230,1) 100%)",
    boxShadow:
      "0px 3px 4px -1px rgb(0 0 0 / 17%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    color: "rgb(220, 221, 222)",
    borderRadius: "25px",
    transition: "all 1s",
    "&:hover": {
      background: "linear-gradient(270deg, rgba(131,58,180,1) 0%, rgba(110,95,193,1) 50%, rgba(172,163,230,1) 100%)",
      scale: "1.1",
      tranition: "all 0.5s",
    }
  },
}));

function Home() {
  const classes = useStyles();
  const [channels, setChannels] = useState([]);
  const history = useHistory();

  useEffect(() => {
    db.collection("channels")
      .orderBy("channelName", "asc")
      .onSnapshot((snapshot) => {
        setChannels(
          snapshot.docs.map((channel) => ({
            channelName: channel.data().channelName,
            id: channel.id,
          }))
        );
      });
  }, []);

  const goToChannel = (id) => {
    history.push(`/channel/${id}`);
  };

  return (
    <div style={{ backgroundColor: "#E1E1E1" }}>
      <Grid container className={classes.root}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
        <img src={loginImg} className={classes.mainImg} alt="signup img" />
          <Typography component="h1" className={classes.heading}>
            Welcome to ChatNest
          </Typography>
          <Typography component="h4" className={classes.subHeading}>
          Where Conversations Take Flight: Join or Create a Nest and Connect with Your Community in Real Time!
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={classes.rootChannel}>
        {channels.map((channel) => (
          <Grid
            item
            xs={6}
            md={3}
            className={classes.channelDiv}
            key={channel.id}
          >
            <Card className={classes.channelCard}>
              <CardActionArea
                style={{ display: "flex" }}
                onClick={() => goToChannel(channel.id)}
              >
                <CardContent className={classes.channelContent}>
                  <Avatar
                    variant="square"
                    className={classes.square}
                    style={{ backgroundColor: "#6a9ec066" }}
                  >
                    {channel.channelName.substr(0, 1).toUpperCase()}
                  </Avatar>
                  <Typography className={classes.channelText}>
                    {channel.channelName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
