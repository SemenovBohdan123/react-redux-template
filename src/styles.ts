import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    zIndex: 10,
    maxWidth: "1300px",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "white",
  },
  backg: {
    zIndex: -10,
    backgroundColor: "#EAD39C",
    width: "100%",
    height: "40px",
    paddingBottom: "20px",
  },
});

export default useStyles;
