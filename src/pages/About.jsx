import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="min-h-screen py-20">
      <p className="text-3xl tracking-0 uppercase text-[#4B5563] text-center mb-4">
        About <span className="text-[#1d1d1d] font-semibold">Us</span>
      </p>
      <div className="flex flex-col md:flex-row gap-10 my-10">
        <div className="w-full basis-1/3">
          <img src={assets.about_image} alt="about us images" />
        </div>
        <div className="w-full basis-2/3 flex flex-col gap-6">
          <p className="text-lg text-gray-600 tracking-normal leading-7">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-lg text-gray-600 tracking-normal leading-7">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="text-xl font-semibold text-[#1d1d1d] mt-4">
            Our Vision
          </p>
          <p className="text-lg text-gray-600 tracking-normal leading-7">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl uppercase text-gray-600">
          why
          <span className="text-[#1d1d1d] font-semibold ml-1">choose us</span>
        </p>
        <div className="border border-gray-500 flex flex-col md:flex-row  mt-10 min-h-68.5">
          <div className=" border-gray-500 basis-1/3 flex flex-col justify-center gap-10 p-6">
            <p className="text-lg font-semibold uppercase">Efficiency:</p>
            <p className="text-gray-600 text-lg leading-[180%] max-w-[316px]">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border-l border-gray-500 basis-1/3 flex flex-col justify-center gap-10 p-6">
            <p className="text-lg font-semibold uppercase">Convenience</p>
            <p className="text-gray-600 text-lg leading-[180%] max-w-[316px]">
              Access your healthcare services from the comfort of your home,
              with easy-to-use features and 24/7 support.
            </p>
          </div>
          <div className="border-l border-gray-500 basis-1/3 flex flex-col justify-center gap-10 p-6">
            <p className="text-lg font-semibold uppercase">Trustworthiness</p>
            <p className="text-gray-600 text-lg leading-[180%] max-w-[316px]">
              Built on a foundation of integrity and transparency, we prioritize
              your trust and confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
