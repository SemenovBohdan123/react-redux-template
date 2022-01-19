import { FC, ReactNode } from "react";

import useStyles from "./styles";

interface ButtonProp {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProp> = ({ children, onClick, disabled }) => {
  const classes = useStyles();

  return (
    <button onClick={onClick} disabled={disabled} className={classes.subButton}>
      {children}
    </button>
  );
};

export default Button;
