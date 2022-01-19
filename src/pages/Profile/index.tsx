import { Avatar, Box, Typography } from "@mui/material";

import Header from "../../components/Header";

const AVATR_URL =
  "https://prikolnye-kartinki.ru/img/picture/Jul/07/36a14e09f3e4b6844d57af8e45c567a8/1.jpg";

const Profile = () => {
  return (
    <Box>
      <Header active="/profile" />
      <Avatar src={AVATR_URL} sx={{ width: 100, height: 100 }} />
      <Typography>User name: ★MoJloДoЙ</Typography>
      <Typography>Name: Bohdan</Typography>
      <Typography>Last Name: Semenov</Typography>
      <Typography>Age: 13yo</Typography>
      <Typography>For life: dead inside</Typography>
    </Box>
  );
};

export default Profile;
