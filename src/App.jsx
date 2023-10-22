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

import Dashboard from "./Dashboard/Dashboard";
import SliderBar from "./Dashboard/SliderBar";
import Compus from "./Dashboard/Compus";
import Header from "./Dashboard/Header";

import Upcoming from "./Dashboard/Upcoming";
import Tour from "./Dashboard/Tour";
import Users from "./Dashboard/Users";
import SignUpForm from "./Dashboard/signup";
import Rechart from "./Dashboard/Rechart";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
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
    // <BrowserRouter>

    //   <Routes>
    //    function Layout (){
    //   <div className="layout">
    //     <Header/>
    //     <SliderBar/>
    //     <main>
    //       <Outlet/>
    //     </main>

    //   </div>

    // }
    //     <Route
    //       path="/"
    //       element={
    //         <div>
    //           <Layout />
    //         </div>
    //       }
    //     >
    //       <Route path="/" element={<Home />} />
    //       <Route path="*" element={<Navigate to="/" />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/tourlist" element={<TourList />} />
    //       <Route path="/tour/:id" element={<TourDetail />} />
    //       <Route path="login" element={<Login />} />
    //     </Route>
    //     <Route path="/dashboard" element={<Layout1/>}>
    //       <Route path="dashboard/compus" element={<Compus/>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourlist" element={<TourList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="tours" element={<Tour />} />
        <Route index path="home" element={<Rechart />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default App;

//https://holidayplanner.onrender.com
