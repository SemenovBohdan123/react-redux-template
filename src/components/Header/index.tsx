import { Link } from "react-router-dom";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Link to="/">Главная</Link>
      <Link to="/login">Войти</Link>
      <Link to="/news">Новости</Link>
      <Link to="/profile">Профиль</Link>
    </nav>
  );
};

export default Header;
