import { Box, Typography } from "@mui/material";
import Button from "../../Button";

import { motion } from "framer-motion";
import useStyles from "./styles";

const CourseInfo = () => {
  const classes = useStyles();

  const animateImg = {
    initial: {
      x: 1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 1.5,
      type: "spring",
      damping: 10,
    },
  };
  return (
    <Box className={classes.courseInfo}>
      <Box width="50%" margin="100px">
        <Typography variant="h4" marginBottom="50px" fontFamily="inherit">
          Профессия Frontend-разработчик JUNIOR
        </Typography>
        <Typography marginBottom="5vh" fontSize="20px" fontFamily="inherit">
          Вы начнёте с основ вёрстки и JavaScript, а к концу обучения напишете
          веб-приложение. Получите опыт работы и начнёте карьеру
          веб-разработчика.
        </Typography>
        <Button onClick={() => {}}>Записаться на курс</Button>
      </Box>
      <Box className={classes.logo}>
        <motion.img
          className={classes.imgLogo}
          src="/img/cherry-science.png"
          alt="qwe"
          initial={animateImg.initial}
          animate={animateImg.animate}
          transition={animateImg.transition}
        />
      </Box>
    </Box>
  );
};

export default CourseInfo;
