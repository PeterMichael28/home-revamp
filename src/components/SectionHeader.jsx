const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="max-w-[800px] mx-auto text-center">
      <h2 className="text-2xl tracking-[-0.24px] font-bold text-secondary md:tracking-[-0.36px] md:text-4xl mb-6">
        {title}
      </h2>
      <p className="text-base font-normal leading-[28px] text-gray-dark ">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
