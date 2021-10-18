import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  experiencesStyle: {
    backgroundColor: "#000",
    height: "1100px",
  },
  experiencesBodyStyle: {
    backgroundColor: "#FFF",
    fontFamily: "'Libre Caslon Text', serif",
    height: "50%",
  },
  experiencesTextBoxStyle: {
    height: "100%",
    padding: "2rem 5rem",
  },
  experiencesTextBodyStyle: {
    textAlign: "left",
    fontFamily: "'Lato', sans-serif",
    lineHeight: "1.3",
  },
});

export default function Experiences() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.experiencesStyle}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        className={classes.experiencesBodyStyle}
        item
        xs={8}
        textAlign="center"
      >
        <div className={classes.experiencesTextBoxStyle}>
          <h1>Experiences</h1>
          <hr
            style={{
              border: "none",
              backgroundColor: "#CCC",
              height: "1px",
              margin: "7px auto 0",
              width: "20%",
            }}
          />
          <br />
          <br />
          <div className={classes.experiencesTextBodyStyle}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <h3>Qualitest</h3>
              </Grid>
              <Grid item>
                <h3>August 2021 - Current</h3>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <Grid item>
                <h4>Graduate Engineer</h4>
              </Grid>
              <Grid item>
                <h4>Austin, TX</h4>
              </Grid>
            </Grid>
            <ul>
              <li>
                Leverages data integration tool components performing test data
                set up for Google Assistant product line improving deployment
                time by 90%
              </li>
              <li>
                Collaborates with all business units and engineering teams to
                develop strategy for long term data platform architecture to
                certify the stability and usability of Chromecast with Google TV
                launch
              </li>
              <li>
                Designs data integrations and data quality framework,
                accomplishing a successful Google Assistant migration in Korea,
                working with a team of frontend and backend engineers, product
                managers, and analysts
              </li>
              <li>
                Collaborates with analytics and business teams to improve data
                models that feed business intelligence tools, increasing data
                accessibility and fostering data-driven decision making across
                the organization
              </li>
            </ul>
          </div>
          <br />
          <br />
          <div className={classes.experiencesTextBodyStyle}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <h3>IC-1 Solutions</h3>
              </Grid>
              <Grid item>
                <h3>May 2019 - August 2019</h3>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <Grid item>
                <h4>Software Engineer Intern</h4>
              </Grid>
              <Grid item>
                <h4>Herndon, VA</h4>
              </Grid>
            </Grid>
            <ul>
              <li>
                Designed and created company website using Angular, HTML/CSS,
                and JavaScript
              </li>
              <li>
                Developed internal communications software that provides
                administrative feedback and achievements tool in which managers
                and employee could post private or public notes, events, and
                certifications through authenticated profiles
              </li>
              <li>
                Developed internal software that allowed HR to group candidate
                applications through GUI, improving recruitment efficiency and
                recording accuracy
              </li>
              <li>
                Configured backend relational database using SQL to support the
                website’s features
              </li>
            </ul>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
