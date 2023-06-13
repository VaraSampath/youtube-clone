import React from "react";
import { Stack } from "@mui/material";

import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    p={2}
    sx={{ background: "#000", position: "sticky", top: 0 }}
  >
    <Link to="/">
      <img
        alt="logo"
        src={logo}
        height={45}
        p={2}
      />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
