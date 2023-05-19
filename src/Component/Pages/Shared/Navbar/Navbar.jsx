import { GiCircleSparks } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user , handleLogOut} = useContext(AuthContext)
  console.log(user)
  return (
    <div className="navbar bg-[#00425A] text-white py-4 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Link to="/">
              <GiCircleSparks size="3em" />
            </Link>
          </div>
          <Link to="/" className="text-3xl">
            ToyGalaxy
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
            <Link to="/">All Toys</Link>
            <Link to="/">My Toys</Link>
            <Link to="/">Add Toys</Link>
            <Link to="/">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label
            style={{}}
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar showName"
          >
            {user?.photoURL ? (
              <div className="w-10 rounded-full img__wrap">
                <img className="img__img" src={user?.photoURL} />
                <p className="img__description">{user?.displayName}</p>
              </div>
            ) : (
              <div className="w-10 rounded-full img__wrap">
                <img
                  className="img__img "
                  src={
                    "https://raw.githubusercontent.com/Akram409/Developer-Portfolio/main/images/profile.png"
                  }
                />
                <p className="img__description">{user?.displayName}</p>
              </div>
            )}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-error rounded-box w-52"
          >
            <li>
              <NavLink to="/user" className="justify-between">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/favourite">Favorite</NavLink>
            </li>
            {user ? (
              <li>
                <NavLink to="/" onClick={handleLogOut}>
                  LogOut
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;