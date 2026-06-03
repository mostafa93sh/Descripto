const PrimaryButton = ({ children, className = "", ...attr }) => {
  return (
    <button
      className={`cursor-pointer px-8 py-4 bg-[#EAEFFF] text-xl text-[#4B5563] rounded-[47px] font-medium flex justify-center items-center gap-2 mt-10 ${className}`}
      {...attr}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
