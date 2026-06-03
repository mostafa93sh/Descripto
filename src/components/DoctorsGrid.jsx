import { useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";

const DoctorsGrid = ({ doctors, footer, className = "" }) => {
  const navigate = useNavigate();

  const handleDoctorClick = (doctor) => {
    navigate(`/appointment/${doctor._id}`);
  };
  return (
    <div
      className={`grid ${className ? className : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}   gap-6 `}
    >
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor._id}
          doctor={doctor}
          onClick={() => handleDoctorClick(doctor)}
        />
      ))}
      {footer && (
        <div className="col-span-full flex justify-center mt-10">{footer}</div>
      )}
    </div>
  );
};

export default DoctorsGrid;
