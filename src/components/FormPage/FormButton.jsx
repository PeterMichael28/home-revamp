import { classNames } from "~/utils/classNames";

const FormButton = ({ onClick, text, className, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        " w-full py-4 px-2.5 flex justify-center items-center text-white rounded bg-primary hover:bg-onPrimary transition-all duration-500 disabled:bg-gray disabled:cursor-not-allowed disabled:text-gray-dark font-semibold text-sm",
        className
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default FormButton;
