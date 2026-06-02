import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="px-8 bg-primary rounded-lg  mt-10 h-[100vh - 80px]">
      <div className="flex  justify-between">
        <div className="md:basis-4/6 self-center text-center md:text-left space-y-2.5 md:space-y-5 py-10">
          <p className="text-4xl xl:text-6xl  font-semibold tracking-tight text-white  leading-13 md:leading-16">
            Book Appointment <br /> With Trusted Doctors
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:basis-1/3 max-md:self-center">
              <img
                src={assets.group_profiles}
                alt="Doctor"
                className="object-contain"
              />
            </div>
            <p className="leading-relaxed text-white">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <button className="cursor-pointer px-8 py-4 bg-white text-[#595959] rounded-[47px] font-medium flex justify-center items-center gap-2 w-[240px] max-md:mx-auto">
            Book appointment
            <FaArrowRightLong />
          </button>
        </div>
        <div className=" hidden md:block self-bottom ">
          <div>
            <img
              src={assets.header_img}
              alt="Header Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
