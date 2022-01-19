import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./router";

import { Box } from "@mui/material";

import { store } from "./store/index";

import "./index.css";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Box className={classes.backg}>
        <Box className={classes.container}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Box>
      </Box>
    </Provider>
  );
};

export default App;
