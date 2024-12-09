import { classNames } from "~/utils/classNames";

const LabelInput = ({
  label,
  type = "text",
  disabled,
  placeholder,
  id,
  required,
  value,
  setValue,
  error,
  maxLength,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-secondary text-sm leading-normal  font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        // max={maxLength}
        // maxLength={maxLength}
        onChange={(e) => {
          const curValue = e.target.value;
          if (maxLength) {
            // Remove non-numeric characters before checking length
            // / Remove all non-numeric characters and limit to maxLength
            const sanitizedValue = curValue.replace(/[^0-9]/g, "").slice(0, maxLength);

            // Only update if the sanitized value meets the length requirement
            if (sanitizedValue.length <= maxLength) {
              setValue(sanitizedValue);
            }
          } else {
            setValue(curValue);
          }
        }}
        className={classNames(
          "py-4 mt-2 w-full px-3 first-line:rounded border border-[#e1e1e1] placeholder:text-xs text-sm placeholder:text-[#9e9e9e] focus:ring focus:ring-primary/20 focus:outline-none focus:bg-white focus:border-transparent transition-all rounded-lg",
          error && "border-red-600"
        )}
        {...props}
      />
    </div>
  );
};

export default LabelInput;
