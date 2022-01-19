import { Routes, Route } from "react-router-dom";

import routes from "./routes";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ element, href, isPrivate }, index: number) => (
        <Route
          path={href}
          element={isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}
          key={index}
        />
      ))}
    </Routes>
  );
};

export default Router;
