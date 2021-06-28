import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import Header from "../comonents/Header";
import Range from "../comonents/Range";
import ColorPicker from "../comonents/ColorPicker";
import ShowCode from "../comonents/ShowCode";
import Format from "../comonents/Format";
import useColor from "../useColor";
import { Grid, Container, Box, makeStyles, Tooltip } from "@material-ui/core";
const navbarHeight = 66;
const useStyle = makeStyles({
  content: {
    width: "100%",
    MinHeight: `calc(100vh - ${navbarHeight}px)`,
    background: "#e0e0e0",
  },
  contentBox: {
    width: "100%",
    MinHeight: "100%",
    position: "relative",
    padding: 15,
    height: `calc(100vh - ${navbarHeight}px)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boxses1: {
    position: "absolute",
    // border: "2px solid rgba(0,0,0,0.43)",
    top: 20,
    left: 20,
    height: 30,
    width: 30,
    // borderRadius: "10px 2px 52px 0px",
    cursor: "pointer",
  },
  boxses2: {
    position: "absolute",
    top: 20,
    right: 20,
    height: 30,
    width: 30,
    cursor: "pointer",
  },
  boxses3: {
    position: "absolute",
    bottom: 20,
    left: 20,
    height: 30,
    width: 30,
    cursor: "pointer",
  },
  boxses4: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 30,
    width: 30,
    cursor: "pointer",
  },
  boxBG: {
    background: "lightgreen",
  },
  rangeBox: {
    minHeight: "100%",
    width: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "31px",
  },
  rangeHeading: {
    fontWeight: 700,
    marginBottom: 20,
    color: "rgba(0,0,0,0.43)",
  },
  rangeitem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
const Main = () => {
  const [value, setValue] = useState({
    width: "200",
    height: "200",
    blur: "47",
    radius: "20",
    color: "#e0e0e0",
    distance: "15",
    // flat: "true",
    // concave: "false",
    // convex: "false",
    // pressed: "false",
  });
  const [leftTop, setLeftTop] = useState(true);
  const [rightTop, setRightTop] = useState(false);
  const [leftButtom, setLeftButtom] = useState(false);
  const [rightButtom, setRightButtom] = useState(false);
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  // console.log("box", boxRef.current);

  const handleChange = (data) => {
    const { name, value } = data.target;
    setValue((state) => ({
      ...state,
      [name]: value,
    }));
  };
  // console.log("val", value);
  const { width, height, blur, radius, color, distance } = value;
  // console.log("width", width);
  const { lightShadow, darkShadow } = useColor(color);

  const handlerAngle = () => {
    switch (true) {
      case leftTop:
        return `${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `;
        break;
      case rightTop:
        return `${darkShadow} -${distance}px ${distance}px ${blur}px ,${lightShadow}  ${distance}px -${distance}px ${blur}px `;
        break;
      case leftButtom:
        return `${darkShadow} ${distance}px -${distance}px ${blur}px ,${lightShadow}  -${distance}px ${distance}px ${blur}px `;
        break;
      case rightButtom:
        return `${darkShadow} -${distance}px -${distance}px ${blur}px ,${lightShadow}  ${distance}px ${distance}px ${blur}px `;
        break;
      default:
        return `${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `;
    }
  };

  const classes = useStyle();
  return (
    <>
      <Header
        value={value}
        shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
      />

      <Container
        className={classes.content}
        style={{
          background: [`${color}`],
        }}
        maxWidth="xl"
        disableGutters
      >
        <Grid container justify="center" alignItems="center">
          <Grid item lg={8} md={6} className={classes.contentBox}>
            <Box className={classes.contentBox}>
              <Tooltip title="Left Top">
                <Box
                  className={classNames([classes.boxses1], {
                    [classes.boxBG]: leftTop,
                  })}
                  style={{
                    boxShadow: `4px 2px 10px ${darkShadow},${lightShadow}  -4px -2px 10px`,
                  }}
                  name="leftTop"
                  ref={box1Ref}
                  onClick={() => {
                    setLeftTop(true);
                    setRightTop(false);
                    setLeftButtom(false);
                    setRightButtom(false);
                  }}
                />
              </Tooltip>
              <Tooltip title="Right Top">
                <Box
                  className={classNames([classes.boxses2], {
                    [classes.boxBG]: rightTop,
                  })}
                  style={{
                    boxShadow: `${darkShadow} -4px 2px 10px ,${lightShadow}  4px -2px 10px `,
                  }}
                  name="rightTop"
                  ref={box2Ref}
                  onClick={() => {
                    setLeftTop(false);
                    setRightTop(true);
                    setLeftButtom(false);
                    setRightButtom(false);
                    console.log("rightTop");
                  }}
                />
              </Tooltip>
              <Tooltip title="Left Buttom">
                <Box
                  className={classNames([classes.boxses3], {
                    [classes.boxBG]: leftButtom,
                  })}
                  style={{
                    boxShadow: `${darkShadow} 4px -2px 10px ,${lightShadow}  -4px 2px 10px `,
                  }}
                  name="leftButtom"
                  ref={box3Ref}
                  onClick={() => {
                    setLeftTop(false);
                    setRightTop(false);
                    setLeftButtom(true);
                    setRightButtom(false);
                  }}
                />
              </Tooltip>
              <Tooltip title="Right Bottom">
                <Box
                  className={classNames([classes.boxses4], {
                    [classes.boxBG]: rightButtom,
                  })}
                  style={{
                    boxShadow: `${darkShadow} -4px -2px 10px ,${lightShadow}  4px 2px 10px `,
                  }}
                  name="rightButtom"
                  ref={box4Ref}
                  onClick={() => {
                    setLeftTop(false);
                    setRightTop(false);
                    setLeftButtom(false);
                    setRightButtom(true);
                  }}
                />
              </Tooltip>
              <Box //center div
                style={{
                  width: [`${width}px`],
                  height: [`${height}px`],
                  // boxShadow: [
                  //   `${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `,
                  // ],
                  boxShadow: handlerAngle(),
                  borderRadius: [`${radius}%`],
                  background: [`${color}`],
                }}
              />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={8} className={classes.contentBox}>
            <Box className={classes.contentBox}>
              <Box
                borderRadius={20}
                borderColor="rgba(0,0,0,0.43)"
                width="80%"
                height="85%"
                className={classes.rangeBox}
                style={{
                  boxShadow: `${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `,
                }}
                handler={handleChange}
              >
                <Range
                  rangeName="width"
                  min={10}
                  max={500}
                  color={value.color}
                  value={value.width}
                  handler={handleChange}
                  styles={styles.slider}
                  shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
                />
                <Range
                  rangeName="height"
                  min={10}
                  max={500}
                  color={value.color}
                  value={value.height}
                  handler={handleChange}
                  styles={styles.slider}
                  shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
                />
                <Range
                  rangeName="distance"
                  min={1}
                  max={50}
                  color={value.color}
                  value={value.distance}
                  handler={handleChange}
                  styles={styles.slider}
                  shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
                />
                <Range
                  rangeName="blur"
                  min={0}
                  max={120}
                  color={value.color}
                  value={`${value.blur}`}
                  handler={handleChange}
                  styles={styles.slider}
                  shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
                />

                <Range
                  rangeName="radius"
                  min={1}
                  max={50}
                  color={value.color}
                  value={value.radius}
                  handler={handleChange}
                  styles={styles.slider}
                  shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
                />
                {/* <Format /> */}
                <ColorPicker
                  value={value.color}
                  rangeName="color"
                  handler={handleChange}
                  styles={styles.color}
                  shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
                />
                <ShowCode
                  value={value}
                  shadowDirection={handlerAngle}
                  shadow={`${darkShadow} ${distance}px ${distance}px ${blur}px ,${lightShadow}  -${distance}px -${distance}px ${blur}px `}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
