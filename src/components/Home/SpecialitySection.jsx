import { Link } from "react-router-dom";
import { specialityData } from "../../assets/assets";

const SpecialitySection = () => {
  return (
    <div className="flex flex-col gap-8 items-center py-10">
      <h2 className="text-3xl xl:text-5xl leading-tight">Find by Speciality</h2>
      <p className="text-sm text-gray-600 text-center max-w-1/3">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex gap-4 flex-wrap">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to={`/doctors?speciality=${item.speciality}`}
            key={index}
            className="flex flex-col items-center gap-2"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16" />
            <span className="text-sm text-gray-600">{item.speciality}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SpecialitySection;
