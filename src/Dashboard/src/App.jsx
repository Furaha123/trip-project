import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home1";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import TourTable from "./Components/datatable/TourTable";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Table } from "react-bootstrap";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Route index element={<Home />} />

            <Route path="/dashboard/users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New title="update user" />} />
            </Route>
            <Route path="/dashboard/tours" element={<TourTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
