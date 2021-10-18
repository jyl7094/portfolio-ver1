import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";
import city from "./../images/city.jpg";

const useStyles = makeStyles({
  headerStyle: {
    backgroundColor: "#000",
    height: "100vh",
  },
  cityFrameStyle: {
    width: "100%",
    height: "50vh",
    overflow: "hidden",
  },
  cityStyle: {
    width: "125%",
    animation: "$renderAnimate 3200ms",
    objectPosition: "0 -26.563rem",
  },
  titleStyle: {
    minHeight: "3rem",
    color: "#FFF",
    fontFamily: "'Libre Caslon Text', serif",
    fontSize: "3.5rem",
    lineHeight: "3.75rem",
    marginBottom: "10px",
    animation: "$blink 4000ms infinite",
    "@media screen and (max-width: 600px)": {
      fontSize: "1.75rem",
      lineHeight: "1.5rem",
      marginBottom: "15px"
    },
  },
  lineStyle: {
    border: "none",
    backgroundColor: "#FFF",
    height: "1px",
    width: "5rem",
  },
  bodyStyle: {
    color: "#888",
    fontFamily: "'Lato', sans-serif",
    fontSize: "16px",
    lineHeight: "1.75",
    marginBottom: "10rem",
  },
  renderAnimation: {
    animation: "$renderAnimate 3200ms",
  },
  "@keyframes blink": {
    "0%": {
      opacity: "0",
    },
    "80%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
    },
  },
  "@keyframes renderAnimate": {
    "0%": {
      opacity: "0",
    },
    100: {
      opacity: "1",
    },
  },
});

const messages = [
  "Hello, my name is Jay.",
  "I am a full-stack software engineer.",
  "Welcome to my website!",
];

export default function Header() {
  const classes = useStyles();
  const [index, setIndex] = useState(1);
  const [message, setMessage] = useState(messages[0]);

  const getMessage = () => {
    if (index === 0) {
      setMessage(messages[0]);
      setIndex(1);
    } else if (index === 1) {
      setMessage(messages[1]);
      setIndex(2);
    } else {
      setMessage(messages[2]);
      setIndex(0);
    }
  };

  function renderText({ message }) {
    return (
      <h1 key={message} className={classes.titleStyle}>
        {message}
      </h1>
    );
  }

  useEffect(() => {
    const intervalID = setInterval(getMessage, 4000);
    return () => clearInterval(intervalID);
  });

  return (
    <Grid
      className={classes.headerStyle}
      container
      justifyContent="center"
      alignItems="flex-end"
    >
      {/* className={classes.stars} */}
      <Grid className={classes.cityFrameStyle} item xs={10}>
        <img className={classes.cityStyle} src={city} alt="city" />
      </Grid>
      <Grid item xs={10}>
        {/* <h1 className={classes.titleStyle}>{message}</h1> */}
        {renderText({ message })}
        <hr className={`${classes.lineStyle} ${classes.renderAnimation}`} />
        <p className={`${classes.bodyStyle} ${classes.renderAnimation}`}>
          scroll down
        </p>
        <div className={classes.ball}></div>
      </Grid>
    </Grid>
  );
}
