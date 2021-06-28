import React from "react";
import useColor from "../useColor";
import { Container, Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  header: {
    background: "#e0e0e0",
    width: "100%",
    padding: "15px 0px",
    height: 65,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "rgba(0,0,0,0.43)",
    textAlign: "center",
    textShadow: "3px 4px 6px rgb(109 109 109 / 67%), -3px -4px 6px #ffffff",
  },
  box: {
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 6,
  },
});
const Header = ({ value, shadow }) => {
  const { r, g, b, lightShadow, darkShadow } = useColor(value.color);
  const classes = useStyles();
  return (
    <Container maxWidth="xl" disableGutters>
      <header
        className={classes.header}
        style={{
          background: [`${value.color}`],
        }}
      >
        <Box
          className={classes.box}
          style={{
            boxShadow: `4px 2px 10px  ${darkShadow}, -4px -2px 10px  ${lightShadow}`,
          }}
        />
        {/* write a condition for color change of the text */}
        {r <= 190 && g <= 190 && b <= 190 ? (
          <Typography
            variant="h4"
            className={classes.title}
            style={{ color: "white", textShadow: shadow }}
          >
            Neumophism Generator
          </Typography>
        ) : (
          <Typography
            variant="h4"
            className={classes.title}
            style={{ color: "rgba(0,0,0,0.43)", textShadow: shadow }}
          >
            Neumophism Generator
          </Typography>
        )}
      </header>
    </Container>
  );
};

export default Header;
