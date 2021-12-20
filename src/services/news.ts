import API from "./api";

export const getNews = async () => {
  const response = await API.get("/posts");
  return response;
};
