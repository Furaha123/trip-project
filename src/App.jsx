import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SideNav from "./Pages/Side";
import Footer from "./Pages/Footer";
import TourList from "./Pages/TourList";
import TourDetail from "./Pages/TourDetail";

import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home1 from "./Dashboard/src/Pages/home/Home1";
import List from "./Dashboard/src/Pages/list/List";
import Single from "./Dashboard/src/Pages/single/Single";
import New from "./Dashboard/src/Pages/new/New";
import TourTable from "./Dashboard/src/Components/datatable/TourTable";
import Table from "./Dashboard/src/Components/table/Table";

function Layout2() {
  <div>
    <Header />
    <SliderBar />
    <main>
      <Outlet />
    </main>
  </div>;
}

function Layout1() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourlist" element={<TourList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/dashboard">
        <Route index element={<Home1 />} />
        <Route path="/dashboard/users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New title="update user" />} />
        </Route>
        <Route path="/dashboard/tours" element={<TourTable />} />
        <Route path="/dashboard/bookings" element={<Table />} />
      </Route>
    </Routes>
  );
};

export default App;

//https://holidayplanner.onrender.com
