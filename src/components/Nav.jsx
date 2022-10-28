import React from "react";
import {
  Typography,
  Autocomplete,
  Stack,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Search, GitHub } from "@mui/icons-material/";

const Nav = () => {
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const ArticleList = [
    {
      title: "Learning Material UI",
      description: "A guide to learning Material UI",
    },
    {
      title: "First React App",
      description: "A guide to building your first React App",
    },
    { title: "React Hooks", description: "A guide to learning React Hooks" },
    { title: "React Router", description: "A guide to learning React Router" },
    { title: "React Redux", description: "A guide to learning React Redux" },
    { title: "Vue JS", description: "A guide to learning Vue JS" },
    { title: "Angular", description: "A guide to learning Angular" },
    { title: "Node JS", description: "A guide to learning Node JS" },
    { title: "Express JS", description: "A guide to learning Express JS" },
    {
      title: "Mongo DB & Mongoose",
      description: "A guide to learning Mongo DB & Mongoose",
    },
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
          id="free-solo-demo"
          freeSolo
          options={ArticleList}
          getOptionLabel={(option) => `${option.title}: ${option.description}`}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search..."
              size="small"
              sx={{
                backgroundColor: "#eee",
                outline: "none",
                border: "none",
                width: "300px",
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Search
                      sx={{
                        color: "#5a5e9a",
                        width: ".7em",
                        paddingLeft: "5px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>
      {/* repository button */}
      <div className="git-btn">
        <Button
          variant="contained"
          size="medium"
          sx={{
            background:
              "linear-gradient(-60deg,#394EFF,#0095FF),linear-gradient(180deg,#394EFF,#0095FF)",
            paddingX: "6px",
            paddingY: "8px",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <GitHub sx={{ height: "15px" }} />
            <p
              style={{
                fontSize: "14px",
                textTransform: "capitalize",
                fontWeight: "540",
              }}
            >
              Browse Repo
            </p>
          </Stack>
        </Button>
      </div>
    </div>
  );
};

export default Nav;
