import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  subButton: {
    borderRadius: "12px",
    border: "0",
    boxSizing: "border-box",
    color: "black",
    cursor: "pointer",
    fontSize: "18px",
    height: "35px",
    marginTop: "20%",
    textAlign: "center",
    width: "100%",
    transition: "0.5s",
    letterSpacing: "0.5px",

    "&:hover": {
      transition: "0.5s",
      backgroundColor: "#B6452C",
      color: "#DDC5A2",
      letterSpacing: "2px",
    },
  },
});

export default useStyles;
