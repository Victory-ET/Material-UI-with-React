import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#f5f5f5", padding: "30px 20px", maxWidth: "100vw", overflow: "Hidden", display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{color: "#706e6e"}} >© 2022 OpenReplay Blog</Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Twitter sx={{ height: "20px", width: "20px", color:"#d3d3dfee", cursor: "pointer" }} />
          <GitHub sx={{ height: "20px", width: "20px", color:"#d3d3dfee", cursor: "pointer" }} />
          <LinkedIn sx={{ height: "20px", width: "20px", color:"#d3d3dfee", cursor: "pointer" }} />
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
