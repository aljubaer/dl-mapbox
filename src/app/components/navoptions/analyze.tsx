"use client";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function NavAnalyze() {
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
        Analyze
      </div>
      <Menu
        id="simple-menu3"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Yield</MenuItem>
        <MenuItem onClick={handleClose}>Soils</MenuItem>
        <MenuItem onClick={handleClose}>Plant Dates</MenuItem>
      </Menu>
    </>
  );
}
