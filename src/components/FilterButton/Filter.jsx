import { useState } from "react";
import { Button } from "../ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Select from "react-select";
import { Filter } from "lucide-react";
import { statesNames } from "../../assets/data";
import DateRangePicker from "../DateRange/DateRange";

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Unspecified", label: "Unspecific" },
];

const homeOwnerOptions = [
  { value: "Own", label: "Own" },
  { value: "Rented", label: "Rented" },
];

const formatDateToYYYYMMDD = (date) => {
  if (!date) return null;
  const d = new Date(date);
  return d.toISOString().split("T")[0];
};

export default function FilterButton({ formData, setFormData }) {
  const [open, setOpen] = useState(false);

  // Initialize local state with values from formData
  const [localState, setLocalState] = useState(() => {
    const stateOption = formData.state ? statesNames.find((s) => s.code === formData.state) : null;
    return stateOption ? { value: stateOption.code, label: stateOption.name } : null;
  });

  const [localGender, setLocalGender] = useState(() =>
    formData.gender ? { value: formData.gender, label: formData.gender } : null
  );

  const [localHomeowner, setLocalHomeowner] = useState(() =>
    formData.homeowner ? { value: formData.homeowner, label: formData.homeowner } : null
  );

  const [localDateRange, setLocalDateRange] = useState(
    formData.dateRange || {
      from: null,
      to: null,
    }
  );

  const handleDateRangeChange = (range) => {
    setLocalDateRange(range);
  };

  const handleApply = () => {
    setFormData({
      state: localState?.value || null,
      gender: localGender?.value || null,
      homeowner: localHomeowner?.value || null,
      dateRange: {
        from: formatDateToYYYYMMDD(localDateRange.from),
        to: formatDateToYYYYMMDD(localDateRange.to),
      },
    });
    setOpen(false);
  };

  return (
    <div className="relative">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[140px] justify-start">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            {(localState || localGender || localHomeowner || (localDateRange.from && localDateRange.to)) && (
              <span className="ml-2 px-2 py-1 bg-primary/10 rounded-full text-xs">Active</span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="start" sideOffset={4} alignOffset={0} side="bottom">
          <div className="p-2 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="space-y-[4px]">
              <div className="space-y-[8px]">
                <label className="text-sm font-medium">State</label>
                <Select
                  value={localState}
                  onChange={setLocalState}
                  options={statesNames.map((dat) => ({ value: dat.code, label: dat.name }))}
                  className="w-full"
                  isClearable
                />
              </div>

              <div className="space-y-[8px]">
                <label className="text-sm font-medium">Gender</label>
                <Select
                  value={localGender}
                  onChange={setLocalGender}
                  options={genderOptions}
                  className="w-full"
                  isClearable
                />
              </div>

              <div className="space-y-[4px]">
                <label className="text-sm font-medium">Home Owner Status</label>
                <Select
                  value={localHomeowner}
                  onChange={setLocalHomeowner}
                  options={homeOwnerOptions}
                  className="w-full"
                  isClearable
                />
              </div>

              <div className="space-y-[4px]">
                <label className="text-sm font-medium">Date Range</label>
                <DateRangePicker dateRange={localDateRange} onDateRangeChange={handleDateRangeChange} />
              </div>
            </div>

            <Button className="w-full mt-[8px]" onClick={handleApply}>
              Apply Filters
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
