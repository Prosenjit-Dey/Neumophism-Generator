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
const Range = (props) => {
  const { r, g, b } = useColor(props.color);
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.rangeGrid}
    >
      <Grid item xs={2} className={classes.rangeitem}>
        {/* write a condition for color change of the text */}
        {r <= 190 && g <= 190 && b <= 190 ? (
          <Typography
            variant="subtitle1"
            className={classes.rangeTypo}
            style={{ color: "white" }}
          >
            {props.rangeName}
          </Typography>
        ) : (
          <Typography
            variant="subtitle1"
            className={classes.rangeTypo}
            style={{ color: "rgba(0,0,0,0.43)" }}
          >
            {props.rangeName}
          </Typography>
        )}
      </Grid>
      <Grid item xs={9}>
        <input
          type="range"
          min={props.min}
          max={props.max}
          steps=""
          name={props.rangeName}
          value={props.value}
          onChange={(e) => props.handler(e)}
          // this classname import from style.css
          className={props.styles}
        />
      </Grid>
    </Grid>
  );
};

export default Range;
