import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";

import Login from "../pages/Login";

import News from "../pages/News";

const Index = () => {
  return <div>123</div>;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      <Route path="/profile" element={<Index />} />
    </Routes>
  );
};

export default Router;
