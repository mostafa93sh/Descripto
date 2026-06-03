import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import PrimaryButton from "../PrimaryButton";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="py-20 flex flex-col gap-5 items-center">
      <p className="text-3xl md:text-4xl font-medium leading-tight ">
        Top Doctors to Book
      </p>
      <p className="text-sm text-gray-600 text-center max-w-1/3">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {doctors
          .map((doctor) => (
            <div
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={doctor._id}
              className=" border rounded-lg border-[#C9D8FF] w-[274px] h-[385px] hover:-translate-y-2.5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-2/3 relative bg-[#EAEFFF] rounded-lg ">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover absolute bottom-0"
                />
              </div>
              <div className="ml-2 mt-2 space-y-1">
                <p className="text-sm text-[#0FBF00]">
                  <span className="size-1.5 bg-[#0FBF00] rounded-full inline-block mr-2"></span>
                  Available
                </p>
                <p className="text-lg font-medium text-[#1F2937]">
                  {doctor.name}
                </p>
                <p className="text-[15px] text-[#6B7280] font-normal">
                  {doctor.speciality}
                </p>
              </div>
            </div>
          ))
          .slice(0, 8)}
        <div className="col-span-full flex justify-center mt-10">
          <PrimaryButton
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="w-[240px] max-md:mx-auto"
          >
            more
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
export default TopDoctors;
