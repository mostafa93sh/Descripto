import { assets } from "../../assets/assets";
import PrimaryButton from "../PrimaryButton";

const Banner = () => {
  return (
    <div className="py-20 px-10 min-h-113.75 bg-primary rounded-xl  flex flex-col md:flex-row items-center relative ">
      <div className="basis-1/2">
        <p className="text-white text-3xl md:text-4xl lg:text-5xl leading-[90px] font-medium ">
          Book Appointment <br /> With 100+ Trusted Doctors
        </p>
        <PrimaryButton>Create account</PrimaryButton>
      </div>
      <div className="hidden md:block basis-1/2 absolute bottom-0 right-20 max-w-125">
        <img
          src={assets.appointment_img}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default Banner;
