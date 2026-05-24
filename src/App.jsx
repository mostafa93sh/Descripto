import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Doctors,
  MyProfile,
  Contact,
  Login,
  MyAppointment,
  Appointments,
} from "./pages";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[7%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:specialty" element={<Doctors />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment/doctorId" element={<Appointments />} />
      </Routes>
    </div>
  );
};
export default App;
