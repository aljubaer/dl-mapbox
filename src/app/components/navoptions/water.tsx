"use client";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function NavWater() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="h-full py-3 cursor-pointer" onClick={handleClick}>
        Water Management
      </div>
      <Menu
        id="simple-menu2"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Pump</MenuItem>
        <MenuItem onClick={handleClose}>TDI</MenuItem>
        <MenuItem onClick={handleClose}>Tile Maps</MenuItem>
        <MenuItem onClick={handleClose}>Assment</MenuItem>
      </Menu>
    </>
  );
}
