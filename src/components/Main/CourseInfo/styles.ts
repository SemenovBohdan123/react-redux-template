import { makeStyles } from "@mui/styles";

import COLORS from "../../../utils/color-scheme";

const useStyles = makeStyles({
  courseInfo: {
    borderRadius: "20px",
    color: COLORS.text,
    display: "flex",
    justifyContent: "space-between",
    background: COLORS.backGround,
    widtd: "100%",
    height: "70vh",
  },
  logo: {
    display: "flex",
    justifyContent: "flex-end",
    width: "50%",
    margin: "100px",
  },
  imgLogo: {
    width: "100%",
    height: "100%",
  },
});

export default useStyles;
