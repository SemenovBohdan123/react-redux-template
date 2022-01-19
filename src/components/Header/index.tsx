import { FC } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  Home,
  Login,
  Newspaper,
  AccountBox,
  Logout,
} from "@mui/icons-material";

import useStyles from "./styles";
import { Typography } from "@mui/material";

interface HeaderProps {
  active: string;
}

const Header: FC<HeaderProps> = ({ active = "/" }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Typography variant="h4" fontFamily="inherit">
        Dev.Pro
      </Typography>
      <Link
        className={classNames(classes.link, { active: active === "/" })}
        to="/"
      >
        <Home />
        Главная
      </Link>
      <Link
        className={classNames(classes.link, { active: active === "/news" })}
        to="/news"
      >
        <Newspaper />
        Новости
      </Link>
      <Link
        className={classNames(classes.link, { active: active === "/profile" })}
        to="/profile"
      >
        <AccountBox />
        Профиль
      </Link>
      {active === "/login" ? (
        <Link
          className={classNames(classes.link, { active: active === "/login" })}
          to="/login"
        >
          <Login />
          Войти
        </Link>
      ) : (
        <Link
          className={classes.link}
          onClick={() => {
            localStorage.clear();
          }}
          to={"/login"}
        >
          <Logout />
          Выйти
        </Link>
      )}
    </nav>
  );
};

export default Header;
