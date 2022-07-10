import React, { useContext, useState } from "react";
import searchIcon from "../Images/search.png";
import cancelIcon from "../Images/cancel.png";
import menuIcon from "../Images/sort-button-with-three-lines.png";
import backIcon from "../Images/back.png";
import { Link, NavLink } from "react-router-dom";
import UseContext from "../Context/UseContext";

function NavbarTailwind(props) {
  const [navIcon, setNavIcon] = useState(menuIcon);
  const [toggleVisibility, setToggleVisibility] = useState("hidden");
  const [text, setText] = useState(""); // For setting Text
  const { setQuery } = useContext(UseContext); // For setting useContext
  const [toggleSideBar, setToggleSideBar] = useState("-translate-x-full");
  const toggleNavBtn = () => {
    setNavIcon(navIcon === menuIcon ? backIcon : menuIcon);
    setToggleSideBar(
      toggleSideBar === "-translate-x-full"
        ? "-translate-x-0"
        : "-translate-x-full"
    );
  };
  const handleSearch = () => {
    setToggleVisibility(
      toggleVisibility === "hidden"
        ? "visible"
        : text.length !== 0 && toggleVisibility === "visible"
        ? "visible"
        : "hidden"
    );
    setQuery(text);
  };
  return (
    <nav className="sticky top-0 z-10 bg-gray-800 text-white flex items-center py-2 px-3 h-14">
      {/* NavIcon Section */}
      <div className="mr-3 w-6 md:[display:none]">
        <img
          className="invert cursor-pointer"
          src={navIcon}
          alt="menuIcon"
          onClick={toggleNavBtn}
        />
      </div>

      {/* Logo Section */}

      <Link to="/">
        <div className="cursor-pointer text-white">
          <span className="text-base mr-3">{props.title}</span>
        </div>
      </Link>

      {/* SideBar Section */}
      <ul
        className={`absolute md:static top-14 left-0 bg-gray-800 md:bg-inherit ${toggleSideBar} h-screen md:h-auto display-[none] md:flex md:translate-x-0 items-center space-x-3 pl-4 pr-9 md:p-0 leading-tight transition-${toggleSideBar} ease-in duration-300`}
      >
        <li></li>
        <NavLink to="/">
          <li className="cursor-pointer hover:brightness-50">Home</li>
        </NavLink>
        <NavLink to="/business">
          <li className="cursor-pointer hover:brightness-50">Business</li>
        </NavLink>
        <NavLink to="/entertainment">
          <li className="cursor-pointer hover:brightness-50">Entertainment</li>
        </NavLink>
        <NavLink to="/health">
          <li className="cursor-pointer hover:brightness-50">Health</li>
        </NavLink>
        <NavLink to="/science">
          <li className="cursor-pointer hover:brightness-50">Science</li>
        </NavLink>
        <NavLink to="/sports">
          <li className="cursor-pointer hover:brightness-50">Sports</li>
        </NavLink>
        <NavLink to="/technology">
          <li className="cursor-pointer hover:brightness-50">Technology</li>
        </NavLink>
      </ul>

      {/* Search */}
      <form
        className="justify-self-end ml-auto flex items-center space-x-3 "
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          id="search"
          className={`capitalize rounded-md py-0.5 pl-3 pr-9 w-32 bg-gray-700 focus-within:bg-gray-600 outline-none ${toggleVisibility}`}
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <img
          className={`${
            text.length !== 0 && toggleVisibility === "visible"
              ? "visible"
              : "hidden"
          } invert absolute right-14 w-5 cursor-pointer`}
          src={cancelIcon}
          alt=""
          onClick={() => setText("")}
        />
        <label htmlFor="search">
          <Link to={text}>
            <img
              className="invert h-6 cursor-pointer"
              src={searchIcon}
              alt="search"
              onClick={handleSearch}
            />
          </Link>
        </label>
      </form>
    </nav>
  );
}

export default NavbarTailwind;
