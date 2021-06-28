import { Box, makeStyles, Button, Typography } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import useColor from "../useColor";
import React, { useRef, useEffect, useState } from "react";
const useStyles = makeStyles({
  codepannel: {
    width: "100%",
    height: 150,
    borderRadius: 20,
    padding: "15px 20px",
    background: "rgb(32, 32, 32)",
    position: "relative",
    textAlign: "left",
    userSelect: "all",
    fontSize: "14px",
    fontWeight: 500,
    color: "white",
  },
  codeBox: {
    width: "75%",
  },
  textArea: {
    width: "100%",
    height: "100%",
    background: "rgb(32, 32, 32)",
    color: "white",
    fontSize: "14px",
    fontWeight: 500,
    resize: "none",
    border: "none",
    fontSize: "14px",
    fontWeight: 500,
    outline: "none",
  },
  code: {
    width: "100%",
    whiteSpace: "pre-wrap",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "break-word",
  },

  btn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  HideBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    zIndex: 3,
    top: "50%",
    left: "50%",
    transform: "translate(-50% ,-50%)",
    display: "none",
    background: "#3786ec",
  },
  text: {
    color: "white",
    fontFamily: "cursive",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    transition: "all 4s ease-in",
  },
});
const ShowCode = ({ value, shadowDirection, shadow }) => {
  //
  const [filled, setFilled] = useState();
  //import darkShadow from usecolor to use as a background
  const { darkShadow } = useColor(value.color);
  //use useRef for getting the reference of textarea & hidddenBOx
  const codeRef = useRef(null);
  const hideBoxRef = useRef(null);
  //to get reference of the textarea when the page load because first time useRef not gives any reference
  useEffect(() => {
    const data = codeRef.current;
    setFilled(data);
  }, []);
  //text copy function
  const copyText = () => {
    filled.select();
    document.execCommand("copy");
    hideBoxRef.current.style.display = "block";
    setTimeout(() => {
      hideBoxRef.current.style.display = "none";
    }, 4000);
  };
  const classes = useStyles();
  return (
    <>
      <Box className={classes.codepannel} style={{ boxShadow: [shadow] }}>
        <Box
          className={classes.HideBox}
          ref={hideBoxRef}
          style={{ background: [darkShadow] }}
        >
          <Typography
            variant="h5"
            align="center"
            className={classes.text}
            ref={hideBoxRef}
          >
            <FileCopyIcon />
            copied
          </Typography>
        </Box>
        <Box className={classes.codeBox}>
          <pre>
            <code id="code" className={classes.code}>
              {/* use the total text as a value of textarea */}
              <textarea
                cols="30"
                rows="7"
                ref={codeRef}
                className={classes.textArea}
                value={`width:"${value.width}px";height:"${value.height}px";
background:"${value.color}";
border-radius:"${value.radius}%"; 
box-shadow:${shadowDirection()};`}
              />
            </code>
          </pre>
        </Box>

        <Button
          className={classes.btn}
          color="primary"
          size="small"
          variant="contained"
          startIcon={<FileCopyIcon />}
          onClick={copyText}
        >
          <Typography variant="body2">copy</Typography>
        </Button>
      </Box>
    </>
  );
};

export default ShowCode;
