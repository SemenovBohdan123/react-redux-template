import { Avatar, Box, Typography } from "@mui/material";
import {
  Groups,
  Work,
  Assignment,
  Backup,
  Add,
  LooksOne,
  LooksTwo,
  Looks3,
  Looks4,
} from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Header from "../../components/Header";

import useStyles from "./styles";
import CourseInfo from "../../components/Main/CourseInfo";
import { motion } from "framer-motion";
import COLORS from "../../utils/color-scheme";

const marginTop = "10vh";

SwiperCore.use([Navigation]);

const infoText1 = {
  offscreen: {
    x: -900,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const infoText2 = {
  offscreen: {
    x: 700,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const planEducation = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const Main = () => {
  const classes = useStyles();

  return (
    <Box color={COLORS.text}>
      <Header active="/" />
      <Box display="flex" justifyContent="center">
        <CourseInfo />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop={marginTop}
        width="100%"
      >
        <Box position="relative" className={classes.coursInfo__wraper}>
          <Box padding="20px 0 20px 0">
            <Work />
            <Typography fontFamily="inherit" variant="h6">
              Трудоустроим
            </Typography>
            <Typography fontFamily="inherit" marginTop="10px">
              или вернем деньги
            </Typography>
          </Box>
        </Box>
        <Add />
        <Box className={classes.coursInfo__wraper}>
          <Box padding="20px 0px 20px 0px">
            <Assignment />
            <Typography fontFamily="inherit" variant="h6">
              Полная
            </Typography>
            <Typography fontFamily="inherit" marginTop="10px">
              программа обучения
            </Typography>
          </Box>
        </Box>
        <Add />
        <Box className={classes.coursInfo__wraper}>
          <Box padding="20px 0 20px 0">
            <Groups />
            <Typography fontFamily="inherit" variant="h6">
              Командный
            </Typography>
            <Typography fontFamily="inherit" marginTop="10px">
              дипломный проект
            </Typography>
          </Box>
        </Box>
        <Add />
        <Box className={classes.coursInfo__wraper}>
          <Box padding="20px 0 20px 0">
            <Backup />
            <Typography fontFamily="inherit" variant="h6">
              Доступ к курсу
            </Typography>
            <Typography fontFamily="inherit" marginTop="10px">
              навсегда
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box marginTop="100px" display="flex" justifyContent="space-around">
        <motion.div
          initial={infoText1.offscreen}
          whileInView={infoText1.onscreen}
          viewport={{ once: true }}
        >
          <Typography fontFamily="inherit" variant="h4">
            На рынке не хватает спецыалистов
          </Typography>
        </motion.div>
        <motion.div
          initial={infoText2.offscreen}
          whileInView={infoText2.onscreen}
          viewport={{ once: true }}
        >
          <Typography fontFamily="inherit" variant="h4">
            50 000 — 68 000 гривен
          </Typography>
          <Typography fontFamily="inherit" marginTop="10px">
            зарплата frontend-разработчика уровня middle
          </Typography>
        </motion.div>
      </Box>
      <Box marginTop={marginTop}>
        <Typography fontFamily="inherit" variant="h3">
          Как проходит обучение
        </Typography>
      </Box>
      <motion.div
        className={classes.education__wpraper}
        initial={planEducation.offscreen}
        whileInView={planEducation.onscreen}
        viewport={{ once: true }}
      >
        <Box className={classes.planEducation__wraper}>
          <Box padding="20px" height="33.5%" marginBottom="50%" top="0px">
            <LooksOne />
            <Typography fontFamily="inherit" variant="h5">
              Изучаете тему
            </Typography>
            <Typography fontFamily="inherit" marginTop="20px">
              В курсе — практические видеоуроки.
            </Typography>
          </Box>
          <Box bottom="0 px">
            <img
              width="100%"
              src="https://248006.selcdn.ru/LandGen/blocks/process/pic-theme.webp"
              alt=""
            />
          </Box>
        </Box>
        <Box className={classes.planEducation__wraper}>
          <Box padding="20px" height="33.5%" marginBottom="50%" top="0px">
            <LooksTwo />
            <Typography fontFamily="inherit" variant="h5">
              Выполняете задания
            </Typography>
            <Typography fontFamily="inherit" marginTop="20px">
              В том темпе, в котором удобно
            </Typography>
          </Box>
          <Box bottom="0px">
            <img
              width="100%"
              height="100%"
              src="https://248006.selcdn.ru/LandGen/blocks/process/pic-homework.webp"
              alt=""
            />
          </Box>
        </Box>
        <Box className={classes.planEducation__wraper}>
          <Box height="33.5%" padding="20px" marginBottom="50%" top="0px">
            <Looks3 />
            <Typography fontFamily="inherit" variant="h5">
              Работаете с кураторами
            </Typography>
            <Typography fontFamily="inherit" marginTop="20px">
              Закрепляете знания и исправляете ошибки
            </Typography>
          </Box>
          <Box bottom="0px">
            <img
              width="100%"
              height="100%"
              src="https://248006.selcdn.ru/LandGen/blocks/process/pic-mentor.webp"
              alt=""
            />
          </Box>
        </Box>
        <Box className={classes.planEducation__wraper}>
          <Box height="33.5%" padding="20px" marginBottom="50%" top="0px">
            <Looks4 />
            <Typography fontFamily="inherit" variant="h5">
              Защищаете итоговую работу
            </Typography>
            <Typography fontFamily="inherit" marginTop="20px">
              И дополняете ею своё портфолио.
            </Typography>
          </Box>
          <Box bottom="0px">
            <img
              width="100%"
              height="100%"
              src="https://248006.selcdn.ru/LandGen/blocks/process/pic-diploma.webp"
              alt=""
            />
          </Box>
        </Box>
      </motion.div>
      <Box>
        <Box marginTop={marginTop}>
          <Typography fontFamily="inherit" variant="h3" marginBottom="10vh">
            Кураторы
          </Typography>
        </Box>
        <Swiper navigation={true}>
          <SwiperSlide>
            <Box className={classes.curators}>
              <Avatar
                sx={{ width: 200, height: 200 }}
                src="img/photo_2021-12-24_15-49-57.jpg"
              />
              <Box>
                <Typography variant="h4">Bohdan</Typography>
                <Typography variant="h5">19 yaer old</Typography>
                <Typography variant="h6">Junior Front-end developer</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={classes.curators}>
              <Avatar
                sx={{ width: 200, height: 200 }}
                src="img/photo_2021-05-01_01-45-02.jpg"
              />
              <Box>
                <Typography variant="h4">David</Typography>
                <Typography variant="h5">19 yaer old</Typography>
                <Typography variant="h6">Midle Front-end developer</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Main;
