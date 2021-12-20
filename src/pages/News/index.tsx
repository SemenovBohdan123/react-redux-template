import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  });

  return (
    <div className={classes.root}>
      {data.map((news) => (
        <div className={classes.post}>
          <h3>{news.title}</h3>
          <p>{news.body}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
