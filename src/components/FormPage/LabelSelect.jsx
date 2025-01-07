import { Check, ChevronDown } from "lucide-react";
import { cn } from "~/lib/utils";
import { classNames } from "~/utils/classNames";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

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
        <label htmlFor={id} className="block text-secondary text-sm leading-normal font-medium mb-2">
          {label}
        </label>
      )}
      <Select disabled={disabled} required={required} value={value} onValueChange={setValue}>
        <SelectTrigger
          id={id}
          className={cn(
            "w-full px-4 py-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
            "bg-gradient-to-r from-gray-50 to-white",
            "text-gray-700 placeholder-gray-400",
            "transition-all duration-200 ease-in-out",
            "hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 capitalize text-sm",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <SelectValue placeholder={placeholder} />
          {/* <ChevronDown className="h-4 w-4 opacity-50" /> */}
        </SelectTrigger>
        <SelectContent className="bg-white rounded-lg shadow-lg border border-gray-200">
          {data.map((item) => (
            <SelectItem
              key={item}
              value={item}
              // className={cn(
              //   "py-2 px-4 cursor-pointer text-gray-700 hover:bg-blue-50 focus:bg-blue-50 focus:text-blue-700",
              //   "transition-colors duration-150 ease-in-out",
              //   "flex items-center justify-between"
              // )}
            >
              <span>{item}</span>
              {/* {item === value && <Check className="h-4 w-4 text-blue-500" />} */}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
