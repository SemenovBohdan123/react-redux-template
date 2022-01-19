import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    backgroundColor: "#DDC5A2",
    borderRadius: "20px",
    boxSizing: "border-box",
    height: "430px",
    padding: "20px",
    width: "500px",
    margin: "auto",
  },
  textBlock: {
    marginTop: "30px",
    marginBottom: "40px",
  },
  subTitle: {
    color: "#301B28",
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontWeight: "600",
  },
  title: {
    color: "#301B28",
    fontFamily: "sans-serif",
    fontSize: "36px",
    fontWeight: "600",
    margin: 0,
  },
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
  errMasage: {
    color: "red",
    marginTop: "25px",
    textAlign: "center",
  },
});

export default useStyles;
