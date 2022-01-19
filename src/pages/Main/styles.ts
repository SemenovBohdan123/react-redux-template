import { makeStyles } from "@mui/styles";
import COLORS from "../../utils/color-scheme";

const useStyles = makeStyles({
  coursInfo__wraper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "20px",
    width: "17%",
    height: "100%",
    "&:before": {
      content: '""',
      width: "1px",
      height: "50%",
      backgroundColor: "#fff",
      position: "absolute",
      top: "25%",
      left: "-0.5%",
    },
    "&:after": {
      content: '""',
      width: "1px",
      height: "50%",
      backgroundColor: "white",
      position: "absolute",
      top: "25%",
      left: "100%",
    },
  },
  education__wpraper: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "10vh",
    width: "100%",
  },
  planEducation__wraper: {
    width: "20%",
    borderRadius: "10px 10px 0 0",
    backgroundColor: COLORS.backGround,
  },
  curators: {
    display: "flex",
    justifyContent: "space-around",
    padding: "50px",
    borderRadius: "20px",
    backgroundColor: COLORS.backGround,
    width: "80%",
    margin: "auto",
  },
});

export default useStyles;
