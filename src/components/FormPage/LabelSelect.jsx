import { cn } from "~/lib/utils";
import { classNames } from "~/utils/classNames";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

const LabelSelect = ({ label, disabled, placeholder, id, required, value, setValue, data }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-secondary text-sm leading-normal font-medium block mb-2">
          {label}
        </label>
      )}
      <div className=" h-[46px] bg-white flex items-center w-full px-3 border border-[#e1e1e1] rounded-[4px]">
        <select
          id={id}
          name={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(
            " first-line:rounded border-none border-l-[10px] border-l-transparent placeholder:text-xs text-sm placeholder:text-[#9e9e9e] text-secondary  w-full h-full outline-none bg-white",
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
              className={classNames("p-2 text-sm bg-white")}
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
        <label htmlFor={id} className="block text-secondary text-sm leading-normal font-medium mb-2">
          {label}
        </label>
      )}
      <Select disabled={disabled} required={required} value={value} onValueChange={setValue}>
        <SelectTrigger
          id={id}
          className={cn(
            "w-full px-4 py-4 rounded-[4px] border border-[#E1E1E1] h-[46px] focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm font-normal",
            "bg-white",
            "transition-all duration-200 ease-in-out",
            "hover:bg-white/50 capitalize",
            disabled && "opacity-50 cursor-not-allowed",
            !value ? "text-[#9E9E9E] placeholder-[#9E9E9E]" : "text-secondary"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-lg shadow-lg border border-gray-200">
          {data.map((item) => (
            <SelectItem key={item} value={item}>
              <span>{item}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
