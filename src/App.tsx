import { Box } from "@chakra-ui/react";
import React from "react";
import { Main } from "./templates/main";
import { Navbar } from "./templates/navbar";

function App() {
  return (
    <>
      <Box bgColor="gray.700">
        <Navbar />
        <Main />
        <Box h={"100px"}></Box>
      </Box>
    </>
  );
}

export default App;
