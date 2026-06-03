import DoctorCard from "./DoctorCard";

const DoctorsGrid = ({ doctors, onDoctorClick, footer }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} onClick={onDoctorClick} />
      ))}
      {footer && (
        <div className="col-span-full flex justify-center mt-10">{footer}</div>
      )}
    </div>
  );
};

export default DoctorsGrid;
