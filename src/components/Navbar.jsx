import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44" src={assets.logo} alt="Logo" />
      <div className="hidden md:block">
        <ul className="flex items-center gap-6 transition-all duration-300">
          <NavLink to="/">
            {({ isActive }) => (
              <>
                <li className="text-base font-medium tracking-tight uppercase text-[#1F2937]">
                  Home
                </li>

                <hr
                  className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "opacity-0"}`}
                />
              </>
            )}
          </NavLink>

          <NavLink to="/doctors">
            {({ isActive }) => (
              <>
                <li className="text-base font-medium tracking-tight uppercase text-[#1F2937]">
                  All Doctors
                </li>
                {/* {isActive && (
                  <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
                )} */}
                <hr
                  className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "opacity-0"}`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className="text-base font-medium tracking-tight uppercase text-[#1F2937]"
          >
            {({ isActive }) => (
              <>
                <li>About</li>

                <hr
                  className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "opacity-0"}`}
                />
              </>
            )}
          </NavLink>

          <NavLink to="/contact">
            {({ isActive }) => (
              <>
                <li className="text-base font-medium tracking-tight uppercase text-[#1F2937]">
                  Contact
                </li>

                <hr
                  className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "opacity-0"}`}
                />
              </>
            )}
          </NavLink>
        </ul>
      </div>
      <div className="hidden md:block">
        {token ? (
          <div className="flex items-center gap-2 relative group">
            <FaRegUserCircle
              size={24}
              className="cursor-pointer"
              onClick={() => navigate("/my-profile")}
            />
            <IoMdArrowDropdown size={18} className="cursor-pointer" />
            <div
              className={`absolute top-10 right-0  shadow-lg rounded-md mt-2 hidden group-hover:block `}
            >
              <div className="min-w-48 flex flex-col gap-2 p-4 bg-stone-100 rounded text-sm text-gray-700">
                <p onClick={() => navigate("/my-profile")} className="cursor-pointer hover:bg-gray-200 p-2 rounded">
                  My Profile
                </p>
                <p onClick={() => navigate("/my-appointments")} className="cursor-pointer hover:bg-gray-200 p-2 rounded">
                  My Appointments
                </p>
                <p onClick={() => setToken(null)} className="cursor-pointer hover:bg-gray-200 p-2 rounded">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-lg text-white bg-[#5f6fff] px-4 py-2 cursor-pointer font-light rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      <div className="block md:hidden">
        <LuMenu size={24} />
      </div>
    </div>
  );
};
export default Navbar;
