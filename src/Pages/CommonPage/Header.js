import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import homeLogo from "../../image/hoe-logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // console.log(user)

  const logout = () => {
    signOut(auth);
  };

  const MenuItems = (
    <>
      <li>
        <Link to="/">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </Link>
      </li>

      {/* <li>
        <Link to="/Purchase/:id">Purchase</Link>
      </li> */}

      <li>
        <Link to="/Blog"> Blog</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
     
      {user ? (
        <div className="flex items-center">
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className=" btn btn-link  text-white ">
            <Link onClick={logout} to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </Link>
          </li>
          <span className="text-secondary">{user.displayName}</span>
        </div>
      ) : (
        <li>
          <Link to="/Login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-bold text-xl"
            >
              {MenuItems}
            </ul>
          </div>
          <img src={homeLogo} alt="" />{" "}
          <Link to="/" class="btn btn-ghost normal-case text-2xl text-white">
            Techno Tools
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-white text-bold text-xl">
            {MenuItems}
          </ul>
        </div>
        {/* <div class="navbar-end">
          <a class="btn">Get started</a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
