import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick(doctor);
      return;
    }

    navigate(`/appointment/${doctor._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border rounded-lg border-[#C9D8FF] w-[274px] h-[385px] hover:-translate-y-2.5 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full h-2/3 relative bg-[#EAEFFF] rounded-lg">
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
        <p className="text-lg font-medium text-[#1F2937]">{doctor.name}</p>
        <p className="text-[15px] text-[#6B7280] font-normal">
          {doctor.speciality}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
