import { classNames } from "~/utils/classNames";

const FormSelectBox = ({ text, active, onClick }) => {
  return (
    <div
      className={classNames(
        "w-full h-[48px] flex justify-center items-center border-2 border-[#c7c7c7] rounded cursor-pointer",
        active && "border-primary"
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default FormSelectBox;
