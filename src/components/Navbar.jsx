import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img src={assets.logo} alt="Logo" />
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
        <button className="text-lg text-white bg-[#5f6fff] px-4 py-2 cursor-pointer font-light rounded-full">
          Create Account
        </button>
      </div>
      <div className="block md:hidden">
        <LuMenu size={24} />
      </div>
    </div>
  );
};
export default Navbar;
