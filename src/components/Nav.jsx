import React from "react";
import {
  Typography,
  Autocomplete,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { Search, GitHub } from "@mui/icons-material/";

const Nav = () => {
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const ArticleList = [
    { title: "Learning Material UI" },
    { title: "First React App" },
    { title: "React Hooks" },
    { title: "React Router" },
    { title: "React Redux" },
    { title: "Vue JS" },
    { title: "Angular" },
    { title: "Node JS" },
    { title: "Express JS" },
    { title: "Mongo DB & Mongoose" },
  ];
  return (
    // Navigation bar
    <div className="navigation">
      <div className="nav-left">
        <div>
          {/* OpenReplay icon */}
          <svg
            width="30px"
            height="30px"
            // viewBox="0 0 179 40"
            className="astro-HEHSLD2D"
          >
            <title>OpenReplay</title>
            <g
              id="logos"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              className="astro-HEHSLD2D"
            >
              <g id="Open-Replay" fillRule="nonzero" className="astro-HEHSLD2D">
                <g
                  id="Group-Copy"
                  transform="translate(0.000000, 0.000000)"
                  className="astro-HEHSLD2D"
                >
                  <path
                    d="M22.4262619,15 L3.29604084,3.77288564 L3.29604084,26.2271144 L22.4262619,15 Z M25.0367262,12.6792184 C25.8592781,13.1556443 26.3667376,14.0411275 26.3667376,15 C26.3667376,15.9588725 25.8592781,16.8443557 25.0367262,17.3207816 L4.06401836,29.6315942 C2.35007712,30.6386 0,29.4882126 0,27.3108127 L0,2.68918734 C0,0.511787376 2.35007712,-0.638600048 4.06401836,0.368405755 L25.0367262,12.6792184 Z"
                    id="Combined-Shape"
                    fill="#394EFF"
                    className="astro-HEHSLD2D"
                  ></path>
                  <path
                    d="M13.7524069,14.3811249 C13.9742492,14.5081718 14.1111111,14.7443007 14.1111111,15 C14.1111111,15.2556993 13.9742492,15.4918282 13.7524069,15.6188751 L8.09606605,18.9017585 C7.63381597,19.1702933 7,18.8635234 7,18.2828834 L7,11.7171166 C7,11.1364766 7.63381597,10.8297067 8.09606605,11.0982415 L13.7524069,14.3811249 Z"
                    id="Path-Copy"
                    fill="#3EAAAF"
                    className="astro-HEHSLD2D"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        {/* title */}
        <div className="titles">
          {/* OpenReplay Title */}
          <Typography variant="h6">OpenReplay</Typography>
          {/* blog Link */}
          <a href="/" className="blog">
            BLOG
          </a>
        </div>
      </div>
      {/* search fields */}
      <div>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          sx={{ width: 300 }}
          disableClearable
          options={ArticleList.map((option) => option.title)}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                label={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Search sx={{ height: "20px", mr: 1, my: 0.5 }} />
                    <Typography variant="body2" sx={{fontSize: "11px"}} >Search...</Typography>
                  </Stack>
                }
                size="small"
                helperText="Looking for an article? We got you covered!"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            </>
          )}
        />
      </div>
      {/* repository button */}
      <div className="git-btn" >
        <Button variant="contained" size="medium"  >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <GitHub sx={{height: "15px"}} />
            <p style={{fontSize: "13px",  textTransform: "capitalize", fontWeight: "500"}} >Browse Repo</p>
          </Stack>
        </Button>
      </div>
    </div>
  );
};

export default Nav;
