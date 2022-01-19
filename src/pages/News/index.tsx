import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";

import { getNews } from "../../services/news";
import { addNews, news } from "../../store/news";

import useStyles from "./styles";

const News = () => {
  const classes = useStyles();

  const data = useSelector(news);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await getNews();

      if (response.status === 200) {
        dispatch(addNews(response.data));
      }
    })();
  }, []);

  return (
    <Box>
      <Header active="/news" />
      {data.map((news) => (
        <Box className={classes.post}>
          <h3>{news.title}</h3>
          <Typography>{news.body}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default News;
