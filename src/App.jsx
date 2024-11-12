import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [color, setColor] = useState(false);

  const handleTheme = () => {
    setColor(color ? false : true);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: color ? "#433878" : "#16325B",
      },
      secondary: {
        main: color ? "#ED3EF7" : "#7A1CAC",
      },
      success: {
        main: color ? "#117554" : "#B4D6CD",
      },
      warning: {
        main: color ? "#FFEB00" : "#FF6500",
      },
      error: {
        main: color ? "#B8001F" : "#F05A7E",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar handleTheme={handleTheme} />
      <Container sx={{ padding: "80px 0px" }}>
        <Typography align="center" variant="h4">
          Redux Todo
        </Typography>
        <Form />
        <ListGroup />
      </Container>
    </ThemeProvider>
  );
};

export default App;
