import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import img1 from "../../Images/iPhone-13-Pro-Front.png";
export default function Design2() {
  let [number, setNumber] = useState("");
  let [switcher, setSwitcher] = useState(true);
  let [switchVal, setSwitchVal] = useState(true);
  let [firstVal, setFirtsVal] = useState("");
  let [secoundVal, setSecoundVal] = useState("");
  let [increas, setIncreas] = useState(false);
  let [decreas, setDecreas] = useState(false);
  let [multipls, setmultipls] = useState(false);
  let [shared, setshared] = useState(false);
  let [persentage, setpersentage] = useState(false);
  const clearFunc = () => {
    setNumber("");
    setFirtsVal("");
    setSecoundVal("");
  };
  let addNumber = (num) => {
    if (switcher) {
      number += num;
      setNumber(number);
      if (number.length === 9) {
        setSwitcher(false);
      }
    }
    if (switchVal) {
      firstVal += num;
      setFirtsVal(firstVal);
    } else {
      secoundVal += num;
      setSecoundVal(secoundVal);
    }
  };

  const calculation = () => {
    setSwitchVal(!switchVal);
    setIncreas(!increas);
    setNumber("");
  };
  const decrease = () => {
    setSwitchVal(!switchVal);
    setDecreas(!decreas);
    setNumber("");
  };
  const multiply = () => {
    setSwitchVal(!switchVal);
    setmultipls(!multipls);
    setNumber("");
  };
  const share = () => {
    setSwitchVal(!switchVal);
    setshared(!shared);
    setNumber("");
  };
  const percentageFunc = () => {
    setSwitchVal(!switchVal);
    setpersentage(!persentage);
    setNumber("");
  };
  const resultFunc = () => {
    if (increas) {
      setNumber(parseFloat(firstVal) + parseFloat(secoundVal));
    } else if (decreas) {
      setNumber(parseFloat(firstVal) - parseFloat(secoundVal));
    } else if (multipls) {
      setNumber(parseFloat(firstVal) * parseFloat(secoundVal));
    } else if (shared) {
      setNumber(parseFloat(firstVal) / parseFloat(secoundVal));
    } else if (persentage) {
      setNumber((parseFloat(firstVal) * parseFloat(secoundVal)) / 100);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "300px",
          height: "600px",
          backgroundImage: `url(${img1})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "absolute",
        }}
      ></Box>
      <Box
        sx={{
          width: "300px",
          height: "500px",
          position: "absolute",
          top: "160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "30%",
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80%",
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <Typography sx={{ fontSize: "50px", color: "#fff" }}>
              {number}
            </Typography>
          </Box>
          {/* show */}
        </Box>

        <Box
          sx={{
            width: "90%",
            height: "70%",
            backgroundColor: "#000",
            display: "grid",
            gridTemplate: "repeat(4,1fr)0",
            gridTemplateRows: "repeat(5,1fr)",
            gridColumnGap: "3px",
            gridRowGap: "5px",
            borderRadius:'20px'
          }}
        >
          <Button
            onClick={clearFunc}
            sx={{
              width: "66px",
              height: "66px",
              background: "#A5A5A5",
              borderRadius: "352px",
              gridArea: "1 / 1 / 2 / 2",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            <Typography sx={{ fontSize: "30px", color: "#000" }}>AC</Typography>
          </Button>
          {/* ac */}
          <Button
            sx={{
              width: "66px",
              height: "66px",
              background: "#A5A5A5",
              borderRadius: "352px",
              gridArea: "1 / 2 / 2 / 3",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "46px", color: "#000" }}>
              +/-
            </Typography>
          </Button>
          {/* +/- */}
          <Button
            onClick={percentageFunc}
            sx={{
              width: "66px",
              height: "66px",
              background: "#A5A5A5",
              borderRadius: "352px",
              gridArea: "1 / 3 / 2 / 4",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#000" }}>%</Typography>
          </Button>
          {/* % */}
          <Button
            onClick={share}
            sx={{
              width: "66px",
              height: "66px",
              background: " #F1A33B",
              borderRadius: "352px",
              gridArea: "1 / 4/ 2 / 5",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "46px", color: "#000" }}>/</Typography>
          </Button>
          {/* / */}
          <Button
            onClick={multiply}
            sx={{
              width: "66px",
              height: "66px",
              background: " #F1A33B",
              borderRadius: "352px",
              gridArea: "2 / 4/ 3 / 5",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#000" }}>X</Typography>
          </Button>
          {/* x */}
          <Button
            onClick={decrease}
            sx={{
              width: "66px",
              height: "66px",
              background: " #F1A33B",
              borderRadius: "352px",
              gridArea: "3 / 4 / 4 / 5",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#000" }}>-</Typography>
          </Button>
          {/* - */}
          <Button
            onClick={calculation}
            sx={{
              width: "66px",
              height: "66px",
              background: " #F1A33B",
              borderRadius: "352px",
              gridArea: "4 / 4 / 5 / 5",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#000" }}>+</Typography>
          </Button>
          {/* + */}
          <Button
            onClick={resultFunc}
            sx={{
              width: "66px",
              height: "66px",
              background: " #F1A33B",
              borderRadius: "352px",
              gridArea: "5 / 4 / 6 / 5",
              ":hover": { background: "#A5A5A5" },
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#000" }}>=</Typography>
          </Button>
          {/* = */}
          <Button
            onClick={() => addNumber(0)}
            sx={{
              width: "130px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "5 / 1 / 6 / 3",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>0</Typography>
          </Button>
          {/* 0 */}
          <Button
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "5 / 3 / 6 / 4",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>,</Typography>
          </Button>
          {/* , */}
          <Button
            onClick={() => addNumber(1)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "4 / 1 / 5 / 2",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>1</Typography>
          </Button>
          {/* 1 */}
          <Button
            onClick={() => addNumber(2)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "4 / 2 / 5 / 3",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>2</Typography>
          </Button>
          {/* 2 */}
          <Button
            onClick={() => addNumber(3)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "4 / 3 / 5 / 4",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>3</Typography>
          </Button>
          {/* 3 */}
          <Button
            onClick={() => addNumber(4)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "3 / 1 / 4 / 2",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>4</Typography>
          </Button>
          {/* 4 */}
          <Button
            onClick={() => addNumber(5)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "3 / 2 / 4 / 3",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>5</Typography>
          </Button>
          {/* 5 */}
          <Button
            onClick={() => addNumber(6)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "3 / 3 / 4 / 4",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>6</Typography>
          </Button>
          {/* 6 */}
          <Button
            onClick={() => addNumber(7)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "2 / 1 / 3 / 2",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>7</Typography>
          </Button>
          {/* 7 */}
          <Button
            onClick={() => addNumber(8)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: " 2 / 2 / 3 / 3",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>8</Typography>
          </Button>
          {/* 8*/}
          <Button
            onClick={() => addNumber(9)}
            sx={{
              width: "66px",
              height: "66px",
              background: "#333333",
              borderRadius: "352px",
              gridArea: "2 / 3 / 3 / 4",
            }}
          >
            <Typography sx={{ fontSize: "46px", color: "#fff" }}>9</Typography>
          </Button>
          {/* 9 */}
        </Box>
      </Box>
    </Box>
  );
}
