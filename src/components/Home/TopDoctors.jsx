import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import PrimaryButton from "../PrimaryButton";
import DoctorsGrid from "../DoctorsGrid";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const handleDoctorClick = (doctor) => {
    navigate(`/appointment/${doctor._id}`);
  };

  return (
    <div className="py-20 flex flex-col gap-5 items-center">
      <p className="text-3xl md:text-4xl font-medium leading-tight ">
        Top Doctors to Book
      </p>
      <p className="text-sm text-gray-600 text-center max-w-1/3">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <DoctorsGrid
        doctors={doctors.slice(0, 8)}
        onDoctorClick={handleDoctorClick}
        footer={
          <PrimaryButton
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="w-[240px] max-md:mx-auto"
          >
            more
          </PrimaryButton>
        }
      />
    </div>
  );
};
export default TopDoctors;
