import React from "react";
import useColor from "../useColor";
import { Grid, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  rangeGrid: {
    width: "100%",
    height: 50,
  },
  rangeTypo: {
    color: "rgba(0,0,0,0.43)",
    fontWeight: 700,
  },
});
const ColorPicker = ({ value, rangeName, shadow, handler, styles }) => {
  const { r, g, b } = useColor(value);
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.rangeGrid}
    >
      <Grid item sm={2} className={classes.rangeitem}>
        {r <= 190 && g <= 190 && b <= 190 ? (
          <Typography
            variant="subtitle1"
            className={classes.rangeTypo}
            style={{ color: "white" }}
          >
            {rangeName}
          </Typography>
        ) : (
          <Typography
            variant="subtitle1"
            className={classes.rangeTypo}
            style={{ color: "rgba(0,0,0,0.43)" }}
          >
            {rangeName}
          </Typography>
        )}
      </Grid>
      <Grid item sm={9}>
        <input
          type="color"
          className={styles}
          name={rangeName}
          value={value}
          onChange={(e) => handler(e)}
          style={{
            cursor: "pointer",
            boxShadow: [shadow],
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ColorPicker;
