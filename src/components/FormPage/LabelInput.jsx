import { toast } from "react-toastify";
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
  minAge = 18, // Default minimum age
  ...props
}) => {
  const validateAge = (selectedDate) => {
    // Calculate age based on selected date
    const today = new Date();
    const birthDate = new Date(selectedDate);

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= minAge;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (type === "date") {
      // Validate age for date inputs
      if (validateAge(selectedDate)) {
        setValue(selectedDate);
      } else {
        // Optionally, you can add error handling here
        // For example, show an error message or reset the input
        setValue("");
        // You might want to add an error state or show a toast/alert
        toast.error(`You must be at least ${minAge} years old`);
      }
    } else {
      // For non-date inputs, use existing logic
      if (maxLength) {
        const sanitizedValue = selectedDate.replace(/[^0-9]/g, "").slice(0, maxLength);
        if (sanitizedValue.length <= maxLength) {
          setValue(sanitizedValue);
        }
      } else {
        setValue(selectedDate);
      }
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-secondary text-sm leading-normal font-medium">
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
        onChange={handleDateChange}
        className={classNames(
          "h-[46px] bg-white flex items-center w-full px-3 first-line:rounded border border-[#e1e1e1] placeholder:text-xs text-sm placeholder:text-[#9e9e9e] focus:ring focus:ring-primary/20 focus:outline-none focus:bg-white focus:border-transparent transition-all rounded-[4px]",
          error && "border-red-600"
        )}
        {...props}
      />
    </div>
  );
};

export default LabelInput;
