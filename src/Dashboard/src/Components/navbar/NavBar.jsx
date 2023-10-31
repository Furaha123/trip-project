import React from "react";
import "./NavBar.scss";
import { BsSearch, BsFullscreenExit } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
function NavBar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar1">
      <div className="wrapper1">
        <div className="search1">
          <input type="text" placeholder="search...." />
          <BsSearch />
        </div>
        <div className="items1">
          <div className="item1">
            <AiOutlineGlobal className="icon2" />
            English
          </div>

          <div className="item1">
            <BsFullscreenExit className="icon2" />
          </div>

          <div className="item1">
            <BiMoon
              className="icon2"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="item1">
            <IoMdNotificationsOutline className="icon2" />
            <div className="counter">2</div>
          </div>

          <div className="item1">
            <BiMessage className="icon2" />
            <div className="counter">3</div>
          </div>

          <div className="item1">
            <AiOutlineUnorderedList className="icon2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
