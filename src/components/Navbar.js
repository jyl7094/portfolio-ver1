import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  navbar: {
    position: "fixed",
    color: "#FFF",
    fontFamily: "'Lato', sans-serif",
    fontSize: "1.25rem",
    visibility: "hidden",
  },
  itemStyle: {
    padding: "1rem",
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.navbar}
      container
      justifyContent="center"
    >
      <Grid item xs={10}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item className={classes.itemStyle}>
            <a href="#">Jay</a>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-around">
              <Grid item className={classes.itemStyle}>
                <a href="#">About</a>
              </Grid>
              <Grid item className={classes.itemStyle}>
                <a href="#">Experiences</a>
              </Grid>
              <Grid item className={classes.itemStyle}>
                <a href="#">Contact</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
