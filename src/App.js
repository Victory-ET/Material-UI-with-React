import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material";
import Articles from "./components/Articles";
import Paginationbar from "./components/Paginationbar";

function App() {
  const theme = createTheme({
    typography: {
      h6: {
        fontSize: "16px",
        fontFamily: "Roboto",
        fontWeight: "bold",
      }
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav />
        <Articles/>
        <Paginationbar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
