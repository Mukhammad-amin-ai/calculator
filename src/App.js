import React from "react";
import { Box } from "@mui/material";
import Design2 from "./Components/Design/Design2";

export default function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor:"lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Design2/>
    </Box>
  );
}
