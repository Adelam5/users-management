import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-5 border-b-2 border-indigo-700">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img className="w-36 h-32" src={logo} alt="logo" />
        <NavLink to="/">
          <h1 className="text-2xl md:text-4xl text-indigo-600 font-bold">
            User Management System
          </h1>
        </NavLink>
      </div>

      <ul className="flex">
        <li className="mx-2 my-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hidden"
                : "bg-indigo-600 text-white font-semibold px-4 py-3 rounded-full"
            }
            to="/new"
          >
            Add New User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
