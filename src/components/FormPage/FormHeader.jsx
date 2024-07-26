import { classNames } from "~/utils/classNames";

const FormHeader = ({ title, subtitle, className, titleClassName }) => {
  return (
    <div className={classNames("w-full text-left md:text-center", className)}>
      <h2
        className={classNames(
          "text-[24px] tracking-[-0.24px] font-bold text-secondary md:tracking-[-0.36px] mb-1 leading-normal",
          titleClassName
        )}
      >
        {title}
      </h2>
      <p className="text-sm font-normal md:leading-[20px] text-gray-dark ">{subtitle}</p>
    </div>
  );
};
export default FormHeader;
