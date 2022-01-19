import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/students").reply(200, {
  user: {
    userName: "",
    name: "",
    avatarURL:
      "https://prikolnye-kartinki.ru/img/picture/Jul/07/36a14e09f3e4b6844d57af8e45c567a8/1.jpg",
    lastName: "",
    age: null,
    forLife: "",
  },
});

export const getUser = async () => {
  return await axios
    .get("/students")
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      alert(error.message);
    });
};
