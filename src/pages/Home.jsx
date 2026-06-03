import Banner from "../components/Home/Banner";
import Header from "../components/Home/Header";
import SpecialitySection from "../components/Home/SpecialitySection";
import TopDoctors from "../components/Home/TopDoctors";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialitySection />
      <TopDoctors />
      <Banner />
    </div>
  );
};
export default Home;
