import { TextField, Button } from "@mui/material";
import { useState } from "react";
import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();

  const [users, setUser] = useState({
    name: "",
    password: null,
  });

  const handleUserData = (event: any) => {
    const copyUser = { ...users };
    setUser(copyUser);
  };

  return (
    <div>
      <form className={classes.form}>
        <TextField placeholder="user name" variant="standard" name="usename" />
        <TextField
          name="password"
          variant="standard"
          placeholder="password"
          type={"password"}
          onChange={(event) => handleUserData(event)}
        />
        <Button onClick={() => {}}>Войти</Button>
      </form>
    </div>
  );
};

export default Login;
