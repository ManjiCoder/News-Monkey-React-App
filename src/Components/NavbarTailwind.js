import React, { useContext, useState } from "react";
import searchIcon from "../Images/search.png";
import cancelIcon from "../Images/cancel.png";
import menuIcon from "../Images/sort-button-with-three-lines.png";
import backIcon from "../Images/back.png";
import { Link, NavLink } from "react-router-dom";
import UseContext from "../Context/UseContext";

function NavbarTailwind(props) {
  const [navIcon, setNavIcon] = useState(menuIcon);
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
  return (
    <nav className="sticky top-0 z-10 bg-gray-800 text-white flex items-center px-4 h-14">
      {/* NavIcon Section */}
      <div className="mr-3 w-6 lg:hidden">
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
          className="flex place-items-center cursor-pointer text-xl font-medium text-white"
        >
          {props.title}
        </Link>
      </div>

      {/* SideBar Section */}
      <ul
        className={`rounded-r-lg absolute lg:static top-14 border-t-2 lg:border-none left-0 bg-gray-800 lg:bg-inherit ${toggleSideBar} h-screen w-2/4 lg:w-auto lg:h-14 display-[none] lg:flex lg:translate-x-0 items-center lg:space-x-3 lg:pl-4 pr-9 lg:p-0 leading-tight transition-${toggleSideBar} ease-in duration-300 text-slate-400 overflow-scroll landscape:pb-24`}
      >
        <li></li>
        <li className="h-14 flex">
          <NavLink
            to="/"
            className="px-7 w-full lg:px-1.5 cursor-pointer hover:text-white flex place-items-center"
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
            })}
          >
            Home
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/business"
            className="px-7 w-full lg:px-1.5 cursor-pointer hover:text-white flex place-items-center"
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
            })}
          >
            Business
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/entertainment"
            className="px-7 w-full lg:px-1.5 cursor-pointer hover:text-white flex place-items-center"
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
            })}
          >
            Entertainment
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/health"
            className="px-7 w-full lg:px-1.5 cursor-pointer hover:text-white flex place-items-center"
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
            })}
          >
            Health
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/science"
            className="px-7 w-full lg:px-1.5 cursor-pointer hover:text-white flex place-items-center"
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
            })}
          >
            Science
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/sports"
            className="px-7 w-full lg:px-1.5 cursor-pointer hover:text-white flex place-items-center"
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
            })}
          >
            Sports
          </NavLink>
        </li>
        <li className="h-14 flex">
          <NavLink
            to="/Technology"
            className="px-7 w-full lg:px-1.5 cursor-pointer hover:text-white flex place-items-center"
            style={({ isActive }) => ({
              color: isActive ? "white" : undefined,
            })}
          >
            Technology
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
          type="search"
          id="search"
          className="capitalize rounded-md py-0.5 pl-3 pr-9 w-32 bg-gray-700 focus-within:bg-gray-600 outline-none"
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <img
          className={`${
            text.length !== 0 ? "visible" : "hidden"
          } invert absolute right-14 w-5 cursor-pointer`}
          src={cancelIcon}
          alt=""
          onClick={() => setText("")}
        />
        {/* <label htmlFor="search"> */}
        <Link className="flex" to={text}>
          <button type="submit" onClick={() => setQuery(text)}>
            <img
              className="invert h-6 cursor-pointer"
              src={searchIcon}
              alt="search"
            />
          </button>
        </Link>
        {/* </label> */}
      </form>
    </nav>
  );
}

export default NavbarTailwind;
