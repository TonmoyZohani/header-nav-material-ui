import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import MenuComp from "./MenuComp";

const AppbarComp = () => {
  const [value, setValue] = useState(null);
  const [menuTitle, setMenuTitle] = useState(null);

  // const handleMenuTitle = (title) => {
  //   console.log(title);
  //   setMenuTitle(title);
  // };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#1ABC9C " }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <img
              style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/gym-logo.jpg"
              alt=""
            />
            {/* <MenuComp /> */}
          </Box>

          <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              sx={{
                "& .Mui-selected": {
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <MenuComp title={"Home"} />
                <MenuComp title={"About"} />
                <MenuComp title={"Contact"} />
              </Box>
            </Tabs>

            <Button
              sx={{
                marginLeft: "auto",
                backgroundColor: "#E4F11D",
                py: 1,
                px: 4,
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppbarComp;
