import React from "react";
import Router from "../src/router/router";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;
