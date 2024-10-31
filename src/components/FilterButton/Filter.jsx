import { useState } from "react";
import { Button } from "../ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Select from "react-select";
import { Filter } from "lucide-react";
import { statesNames } from "../../assets/data";
import DateRangePicker from "../DateRange/DateRange";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize local state with values from formData
  const [localState, setLocalState] = useState(() => {
    const stateOptions = formData.state
      ? formData.state
          .map((code) => {
            const stateOption = statesNames.find((s) => s.code === code);
            return stateOption ? { value: stateOption.code, label: stateOption.name } : null;
          })
          .filter(Boolean) // Filter out any nulls in case of unmatched codes
      : [];

    return stateOptions;
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

  const handleApply2 = () => {
    const searchParams = new URLSearchParams(location.search);

    const updateSearchParams = (key, value) => {
      // Remove existing params with the same key to handle multi-select options cleanly
      searchParams.delete(key);

      if (Array.isArray(value)) {
        // Add each value separately for multi-select arrays
        value.forEach((item) => {
          if (item.value) {
            searchParams.append(key, item.value);
          }
        });
      } else if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    };

    // Apply updates for each form field
    updateSearchParams("state", localState); // Pass the array directly
    updateSearchParams("gender", localGender?.value);
    updateSearchParams("homeowner", localHomeowner?.value);
    updateSearchParams("dateFrom", localDateRange?.from ? formatDateToYYYYMMDD(localDateRange.from) : null);
    updateSearchParams("dateTo", localDateRange?.to ? formatDateToYYYYMMDD(localDateRange.to) : null);

    // Use navigate to update the URL with new search parameters
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });

    // Set form data for local state
    setFormData({
      state: localState.map((option) => option.value), // Store as array of codes in formData
      gender: localGender?.value || null,
      homeowner: localHomeowner?.value || null,
      dateRange: {
        from: localDateRange?.from ? formatDateToYYYYMMDD(localDateRange.from) : null,
        to: localDateRange?.to ? formatDateToYYYYMMDD(localDateRange.to) : null,
      },
    });

    // Close the form or modal if needed
    setOpen(false);
  };

  return (
    <div className="relative">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[140px] justify-start">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            {/* {(localState || localGender || localHomeowner || (localDateRange.from && localDateRange.to)) && (
              <span className="ml-2 px-2 py-1 bg-primary/10 rounded-full text-xs">Active</span>
            )} */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="start" sideOffset={4} alignOffset={0} side="bottom">
          <div className="p-2 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="space-y-[4px]">
              <div className="space-y-[8px]">
                <label className="text-sm font-medium">State</label>
                <Select
                  value={localState}
                  onChange={(selectedOptions) => {
                    setLocalState(selectedOptions || []); // Set to empty array if cleared
                  }}
                  options={statesNames.map((dat) => ({ value: dat.code, label: dat.name }))}
                  className="w-full"
                  isClearable
                  isMulti
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

            <Button className="w-full mt-[8px]" onClick={handleApply2}>
              Apply Filters
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
