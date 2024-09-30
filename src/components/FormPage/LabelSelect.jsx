import { classNames } from "~/utils/classNames";

const LabelSelect = ({ label, disabled, placeholder, id, required, value, setValue, data }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-secondary text-sm leading-normal font-medium">
          {label}
        </label>
      )}
      <div className="py-4 w-full px-3 mt-2 border border-[#e1e1e1] rounded-lg">
        <select
          id={id}
          name={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(
            " first-line:rounded border-none border-l-[10px] border-l-transparent placeholder:text-xs text-sm placeholder:text-[#9e9e9e] text-secondary  w-full h-full outline-none",
            !value && "text-[#9e9e9e]"
          )}
        >
          <option value="" className="">
            {placeholder}
          </option>
          {data.map((state) => (
            <option
              key={state?.name ? state.name : state}
              value={state?.code ? state.code : state}
              className={classNames("p-2 text-sm")}
            >
              {state?.name ? state.name : state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LabelSelect;

export const LabelSelect2 = ({ label, disabled, placeholder, id, required, value, setValue, data }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-secondary text-sm leading-normal font-medium">
          {label}
        </label>
      )}
      <div className="py-4 w-full px-3 mt-2 border border-[#e1e1e1] rounded-lg">
        <select
          id={id}
          name={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(
            " first-line:rounded border-none border-l-[10px] border-l-transparent placeholder:text-xs text-sm placeholder:text-[#9e9e9e] text-secondary  w-full h-full outline-none",
            !value && "text-[#9e9e9e]"
          )}
        >
          <option value="" className="">
            {placeholder}
          </option>
          {data.map((state) => (
            <option key={state?.name} value={state?.name} className={classNames("p-2 text-sm")}>
              {state?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const CustomLabelSelect = ({ label, disabled, placeholder, id, required, value, setValue, data }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-secondary text-sm leading-normal font-medium">
          {label}
        </label>
      )}
      <div className="py-4 w-full px-3 mt-2 border border-[#e1e1e1] rounded-lg">
        <select
          id={id}
          name={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(
            " first-line:rounded border-none border-l-[10px] border-l-transparent placeholder:text-xs text-sm placeholder:text-[#9e9e9e] text-secondary  w-full h-full outline-none",
            !value && "text-[#9e9e9e]"
          )}
        >
          <option value="" className="">
            {placeholder}
          </option>
          {data.map((state) => (
            <option key={state} value={state} className={classNames("p-2 text-sm")}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
