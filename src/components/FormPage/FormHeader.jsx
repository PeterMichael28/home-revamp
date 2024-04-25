const FormHeader = ({ title, subtitle }) => {
  return (
    <div className="w-full text-left md:text-center">
      <h2 className="text-[24px] tracking-[-0.24px] font-bold text-secondary md:tracking-[-0.36px] mb-1 leading-normal">
        {title}
      </h2>
      <p className="text-sm font-normal md:leading-[20px] text-gray-dark ">{subtitle}</p>
    </div>
  );
};
export default FormHeader;
