import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";
import empire from "./../images/empire.jpg";

const useStyles = makeStyles({
  aboutStyle: {
    fontFamily: "'Libre Caslon Text', serif",
    backgroundColor: "#000",
    height: "800px",
  },
  aboutDescriptionStyle: {
    backgroundColor: "#FFF",
    height: "100%",
  },
  empireImg: {
    width: "450px",
    height: "600px",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    left: "11.5%",
  },
  textBoxStyle: {
    textAlign: "center",
    position: "relative",
    height: "600px",
    right: "10%",
    padding: "2.5rem 5rem",
  },
  textStyle: {
    textAlign: "left",
    fontFamily: "'Lato', sans-serif",
    marginTop: "2rem",
  },
  spaceStyle: {
    display: "inline-block",
    minWidth: "50px",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.aboutStyle}
      style={{ border: "none" }}
      container
      justifyContent="flex-end"
    >
      <img
        className={classes.empireImg}
        src={empire}
        alt="empire state building"
      />
      <Grid className={classes.aboutDescriptionStyle} item xs={9}>
        <Grid
          style={{ height: "100%" }}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid className={classes.textBoxStyle} item xs={8}>
            <h1>About me</h1>
            <hr
              style={{
                marginTop: "1px",
                border: "none",
                backgroundColor: "#CCC",
                height: "1px",
                margin: "0 auto",
                width: "20%",
              }}
            />
            <div className={classes.textStyle}>
              <p>
                &emsp;I enjoy coding, and I would like to help people in the
                future by using my programming knowledge to aid the advancement
                of medicine.
              </p>
              <br />
              <br />
              <h3 style={{ textAlign: "center" }}>Contact</h3>
              <br />
              <p>
                <span className={classes.spaceStyle}>
                  <strong>Name</strong>:
                </span>
                Jay Lee
              </p>
              <p>
                <span className={classes.spaceStyle}>
                  <strong>Email</strong>:
                </span>
                jyl7094@gmail.com
              </p>
              <br />
              <br />
              <h3 style={{ textAlign: "center" }}>Education</h3>
              <br />
              <p>
                <strong>George Mason University</strong>
              </p>
              <p>
                <em>Bachelor of Science</em>
              </p>
              <p>Computer Science</p>
              <br />
              <br />
              <h3 style={{ textAlign: "center" }}>Skills</h3>
              <br />
              Java, Javascript, Python, C, HTML/CSS, Bootstrap, Material UI, jQuery, EJS, SCSS, Node.js, React, Angular, Express, Mongoose, SQL, NoSQL, MongoDB, Git, Unix, Windows, & iOS
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
