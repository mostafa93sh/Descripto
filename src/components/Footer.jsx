import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10  justify-between py-10 px-2.5 ">
        <div className="flex flex-col gap-5 basis-3/5">
          <img src={assets.logo} alt="Footer Logo" className="max-w-[217px]" />
          <p className="text-lg text-gray-600 leading-[30px] text-left max-w-[642px]]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-5 basis-1/5">
          <p className="text-lg font-semibold">Company</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <Link
              to="/"
              className="hover:text-gray-800 transition-colors duration-300"
            >
              <li>Home</li>
            </Link>

            <Link
              to="/about"
              className="hover:text-gray-800 transition-colors duration-300"
            >
              <li>About us</li>
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-800 transition-colors duration-300"
            >
              <li>Contact us</li>
            </Link>
            <Link
              to="/privacy"
              className="hover:text-gray-800 transition-colors duration-300"
            >
              <li>Privacy policy</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-5 basis-1/5">
          <p className="text-lg font-semibold">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-600 py-5 border-t border-gray-300">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </>
  );
};
export default Footer;
