import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <section className="min-h-screen">
      <p className="font-sans text-3xl tracking-0 uppercase text-[#4B5563] text-center mb-4">
        Contact <span className="text-[#1d1d1d] font-semibold">Us</span>
      </p>
      <div className="flex flex-col md:flex-row gap-5 px-24 py-20">
        <div className="basis-1/3">
          <img src={assets.contact_image} alt="contact us" />
        </div>
        <div>
          <p className="uppercase text-2xl font-semibold text-[#4B5563]">
            Our office
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-[180%] max-w-81.25">
            54709 Willms Station Suite 350, Washington, USA
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-[180%] max-w-81.25">
            Tel: (415) 555‑0132
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-[180%] max-w-96">
            Email: greatstackdev@gmail.com
          </p>
          <p className="uppercase text-2xl font-semibold text-[#4B5563] mt-5">
            Careers at PRESCRIPTO
          </p>
        </div>
      </div>
    </section>
  );
};
export default Contact;
