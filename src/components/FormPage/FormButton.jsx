import { classNames } from "~/utils/classNames";

const FormButton = ({ onClick, text, className, disabled, loading }) => {
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
      {loading ? (
        <svg
          height={30}
          width={30}
          className={`animate-spin`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        text
      )}
    </button>
  );
};

export default FormButton;
