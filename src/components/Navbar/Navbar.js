import React from "react";
import { logout } from "../../actions/auth";
import { useDispatch } from "react-redux";
import "./style.css";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 justify-between text-white items-center ">
      <div className="ml-20 text-5xl font-medium">
        <h1 className="glitch">
          <span aria-hidden="true">Leads</span>
          Leads
          <span aria-hidden="true">Leads</span>
        </h1>
      </div>
      <div className="">
        <ul className="flex space-x-4 pr-4 content-center inline-block align-baseline text-lg font-semibold">
          <li onClick={() => dispatch(logout())}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
