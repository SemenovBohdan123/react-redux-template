import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Provider } from "react-redux";
import { store } from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
