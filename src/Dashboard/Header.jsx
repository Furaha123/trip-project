import React from "react";
import "../CSS/Header.css"
import {AiTwotoneSetting} from "react-icons/ai"
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import {} from "react-icons/ai";
export default function Header() {
  return (
    <div className="header-area">
      <h2>Hello Moses </h2>
      <div className="header-icons">
        <div className="icon-container">
          <AiTwotoneSetting className="large-icon" />
          <BiSolidSun className="large-icon" />
          <p>Dark Mode</p>
          <BiSolidMoon className="large-icon" />
        </div>
      </div>
    </div>
  );
}
