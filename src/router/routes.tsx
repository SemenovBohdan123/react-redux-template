import { ReactNode } from "react";

import Login from "../pages/Login";
import Main from "../pages/Main";
import News from "../pages/News";
import Profile from "../pages/Profile";

interface IRoute {
  href: string;
  element: ReactNode;
  isPrivate: boolean;
}

const ROUTES: Array<IRoute> = [
  {
    href: "/",
    element: <Main />,
    isPrivate: true,
  },
  {
    href: "/news",
    element: <News />,
    isPrivate: true,
  },
  {
    href: "/profile",
    element: <Profile />,
    isPrivate: true,
  },
  {
    href: "/login",
    element: <Login />,
    isPrivate: false,
  },
];

export default ROUTES;
