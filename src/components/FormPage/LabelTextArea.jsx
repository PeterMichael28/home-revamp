const LabelTextArea = ({ label, disabled, placeholder, id, required, value, setValue }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-secondary text-sm leading-normal font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-4 w-full px-3 mt-2 first-line:rounded border border-[#e1e1e1] placeholder:text-xs text-sm placeholder:text-[#9e9e9e] focus:ring focus:ring-primary/20 focus:outline-none focus:bg-white focus:border-transparent transition-all rounded-lg"
      ></textarea>
    </div>
  );
};

export default LabelTextArea;
