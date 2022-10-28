import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import logo from "../openreplay.png";

const Articles = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    boxShadow: "none",
    cursor: "pointer",
  }));

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Box sx={{ width: "100vw" }} mt="5em">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 9 }}
          sx={{ padding: "0 20px" }}
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid xs={12} sm={4} md={3} key={index}>
              <Item style={{ width: "350px", marginBottom: "20px" }}>
                <img
                  src={logo}
                  alt="random"
                  style={{
                    width: "100%",
                    height: "165px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "640",
                    fontSize: "20px",
                  }}
                  mt="1em"
                >
                  Four Useful Built-In JavaScript Web APIs
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    fontSize: "15px",
                  }}
                >
                  Explore a quartet of fully available JS APIs for your code
                </Typography>
                <Typography sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    fontSize: "10px",
                }} 
                mt="1em"
                >September 29, 2022, 5 min read</Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Articles;
