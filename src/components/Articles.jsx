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
  }));

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Box sx={{ width: "100vw" }} mt="5em">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ padding: "0 50px" }}
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid xs={12} sm={4} md={3} key={index}>
              <Item style={{ width: "250px", marginBottom: "20px" }}>
                <img
                  src={logo}
                  alt="random"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "15px",
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
                    fontSize: "10.65px",
                  }}
                >
                  Explore a quartet of fully available JS APIs for your code
                </Typography>
                <Typography sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    fontSize: "8px",
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
