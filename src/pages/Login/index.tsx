import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";

import Header from "../../components/Header";

import useStyles from "./styles";
import Button from "../../components/Button";

interface StateUser {
  [index: string]: string;
}

const CREDENTIALS = {
  username: "Admin",
  password: "12345",
};

const Login: FC = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [showErrorText, setShowErrorText] = useState<boolean>(false);
  const [user, setUser] = useState<StateUser>({
    username: "",
    password: "",
  });

  const handleUserData = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const checkUser = () => {
    let showText = true;

    if (
      user.username === CREDENTIALS.username &&
      user.password === CREDENTIALS.password
    ) {
      localStorage.setItem("authorized", "true");
      showText = false;
      setUser({ username: "", password: "" });
      navigate("/");
    }

    setShowErrorText(showText);
  };

  return (
    <Box>
      <Header active="/login" />
      <Box className={classes.form}>
        <Box className={classes.textBlock}>
          <h3 className={classes.title}>Welcome!</h3>
          <p className={classes.subTitle}>Log in to your account</p>
        </Box>
        <TextField
          fullWidth
          value={user.username}
          name="username"
          variant="standard"
          placeholder="User name"
          onChange={handleUserData}
          margin="normal"
        />
        <TextField
          fullWidth
          value={user.password}
          name="password"
          variant="standard"
          placeholder="Password"
          onChange={handleUserData}
          margin="normal"
        />
        <Box>
          <Button onClick={checkUser}>Submit</Button>
          {showErrorText && (
            <Typography className={classes.errMasage}>
              Имя пользователя или пароль введены не верно{" "}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
