import {
  FiMail,
  FiPhone,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import { useState } from "react";
import logoImage from "../Images/logo.png";
import search from "../Images/search.png";
import "../CSS/NavBar.css";
import SideNav from "../Pages/Side";

const NavBar = () => {
  window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo");
    if (window.scrollY > 0) {
      logo.style.transform = "translateY(-5px) scale(1.1)";
    } else {
      logo.style.transform = "translateY(-8px)";
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  };
  const clodeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="header">
        <div className="contact-us">
          <FiMail />
          <p> test@gmail.com </p>
          <FiPhone />
          <p>+ 250-078-009-343</p>
        </div>
        <div className="socila-media">
          <FiTwitter />
          <FiInstagram />
          <FiFacebook />
        </div>
      </div>

      <div className="logo">
        <div className="logo-image">
          <img src={logoImage} alt="my logo" />
        </div>
        <div className="slider-nav">
          <button className="research-btn1">Reserve</button>
          <img src={search} alt="my image" className="search-image" />
          <div className="hamburger-menu" onClick={openModal}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className=" modal">
          <SideNav />
          <div className="close-modal" onClick={clodeModal}>
            &times;
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
