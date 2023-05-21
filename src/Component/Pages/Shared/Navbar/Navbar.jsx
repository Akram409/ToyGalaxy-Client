import { GiCircleSparks } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);

  const logOut = () => {
    handleLogOut();
  };

  return (
    <div className="navbar bg-[#4a3da7] text-white py-4 px-5">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-error rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
              <Link to="/allToys">All Toys</Link>
              {user ? (
                <>
                  <Link to="/myToys">My Toys</Link>
                  <Link to="/addToys">Add Toys</Link>
                  <Link to="/" onClick={logOut}>
                    LogOut
                  </Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <Link to="/blogs">Blogs</Link>
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
            <Link to="/allToys">All Toys</Link>
            {user ? (
              <>
                <Link to="/myToys">My Toys</Link>
                <Link to="/addToys">Add Toys</Link>
                <Link to="/" onClick={logOut}>
                  LogOut
                </Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label
            style={{}}
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar showName"
          >
            {user ? (
              <div className="w-20 rounded-lg img__wrap">
                <img className="" src={user?.photoURL} />
                <p className="img__description">{user?.displayName}</p>
              </div>
            ) : (
              <div className="w-20 rounded-full img__wrap">
                <img
                  className=""
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
                <Link to="/" onClick={handleLogOut}>
                  LogOut
                </Link>
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
