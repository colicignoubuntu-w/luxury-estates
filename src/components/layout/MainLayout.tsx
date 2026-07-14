import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <Box>
      <Navbar />

      <Box component="main">
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}

export default MainLayout;
