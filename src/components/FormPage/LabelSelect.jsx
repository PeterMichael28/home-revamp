import { statesNames } from "~/assets/data";

const LabelSelect = ({ label, disabled, placeholder, id, required, value, setValue }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-secondary text-sm leading-normal font-medium">
        {label}
      </label>
      <div className="py-4 w-full px-3 mt-2 border border-[#e1e1e1] rounded-lg">
        <select
          id={id}
          name={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className=" first-line:rounded border-none border-l-[10px] border-l-transparent placeholder:text-xs text-sm placeholder:text-[#9e9e9e]  w-full h-full outline-none"
        >
          <option value="">{placeholder}</option>
          {statesNames.map((state) => (
            <option key={state.name} value={state.code} className="p-2 text-sm">
              {state.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LabelSelect;
