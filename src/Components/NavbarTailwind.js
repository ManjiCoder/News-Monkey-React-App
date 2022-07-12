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
    <nav className="sticky top-0 z-10 bg-gray-800 text-white flex items-center px-4 h-14">
      {/* NavIcon Section */}
      <div className="mr-3 w-6 md:hidden">
        <img
          className="invert cursor-pointer"
          src={navIcon}
          alt="menuIcon"
          onClick={toggleNavBtn}
        />
      </div>

      {/* Logo Section */}
      <div className="h-14 flex">
        {/* <span className="text-base mr-3"></span> */}
        <Link
          to="/"
          className="flex place-items-center cursor-pointer text-white"
        >
          {props.title}
        </Link>
      </div>

      {/* SideBar Section */}
      <ul
        className={`absolute md:static top-14 left-0 bg-gray-800 md:bg-inherit ${toggleSideBar} h-screen md:h-14 display-[none] md:flex md:translate-x-0 items-center space-x-3 pl-4 pr-9 md:p-0 leading-tight transition-${toggleSideBar} ease-in duration-300`}
      >
        <li></li>
        <li className="h-14 flex">
          <NavLink
            to="/"
            className="cursor-pointer hover:brightness-50 flex place-items-center"
          >
            Home
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/business"
            className="cursor-pointer hover:brightness-50 flex place-items-center"
          >
            Business
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/entertainment"
            className="cursor-pointer hover:brightness-50 flex place-items-center"
          >
            Entertainment
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/health"
            className="cursor-pointer hover:brightness-50 flex place-items-center"
          >
            Health
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/science"
            className="cursor-pointer hover:brightness-50 flex place-items-center"
          >
            Science
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/sports"
            className="cursor-pointer hover:brightness-50 flex place-items-center"
          >
            Sports
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/Technology"
            className="cursor-pointer hover:brightness-50 flex place-items-center"
          >
            technology
          </NavLink>
        </li>
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
