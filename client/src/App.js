import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getUsers } from "./services/user.service";
import MainRouter from "./components/MainRouter";

function App() {
  const { orderAttr, desc } = useSelector((state) => state.search);

  useEffect(() => {
    getUsers("", "", orderAttr, desc, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
