import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-base-300 to-slate-800 p-4 fixed w-full top-0 h-[60px] shadow-lg z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">IMPREZZ</a>
      </div>
      <div className="flex-none gap-4">
        <Link to="/" className="btn text-lime-400 btn-ghost">Explore</Link>
        <Link to="/your-community" className="btn text-lime-400 btn-ghost">Your Communities</Link>
        <Link to="/create-community" className="btn text-lime-400 btn-ghost">Create Community</Link>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
