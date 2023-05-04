import { useState } from "react";
import { Button, Container, CssBaseline } from "@mui/material";
import AppbarComp from "./components/AppbarComp";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <AppbarComp />
        {/* <MenuComp/> */}
      </Container>
    </>
  );
}

export default App;
