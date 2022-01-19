import { makeStyles } from "@mui/styles";
import COLORS from "../../utils/color-scheme";

const useStyles = makeStyles({
  root: {
    backgroundColor: COLORS.backGround,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: "10vh",
  },
  link: {
    padding: "0px 15px 0 15px",
    margin: "none",
    display: "flex",
    alignItems: "center",
    color: "#662225",
    width: "100px",
    justifyContent: "space-evenly",
    textDecoration: "none",
    height: "6vh",
    transition: "0.8s",
    "&:hover, &.active": {
      transition: "0.5s",
      backgroundColor: "#B6452C",
      color: "#DDC5A2",
    },
  },
  headerLogo: {
    height: "100%",
  },
});

export default useStyles;
