import { useContext, useState } from "react";
import { specialityData } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import DoctorsGrid from "../components/DoctorsGrid";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const availableSpecialities = [
    ...new Set(doctors.map((doctor) => doctor.speciality)),
  ];
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const filteredDoctors =
    selectedSpeciality && availableSpecialities.includes(selectedSpeciality)
      ? doctors.filter((doctor) => doctor.speciality === selectedSpeciality)
      : doctors;
  return (
    <section className="min-h-screen">
      <p className="leading-6.75 text-xl text-gray-600 tracking-normal ">
        Browse through the doctors specialist.
      </p>
      <div className="flex gap-5 mt-10">
        {/* Specialties Menu */}
        <div className="w-65.75 text-center">
          {specialityData.map((item, index) => (
            <div
              key={index}
              className="h-12.25 border border-gray-300 rounded-md shadow-sm m-2.5 cursor-pointer hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              onClick={() => setSelectedSpeciality(item.speciality)}
            >
              <p>{item.speciality}</p>
            </div>
          ))}
        </div>
        {/* Doctors Grid */}
        <div>
          <DoctorsGrid doctors={filteredDoctors} className="md:grid-cols-3" />
        </div>
      </div>
    </section>
  );
};
export default Doctors;
