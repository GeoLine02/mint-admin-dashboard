"use client";

import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  searchable?: boolean;
  multi?: boolean;
  onChange: (value: string | string[]) => void;
  value?: string | string[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  searchable = false,
  multi = false,
  onChange,
  value,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const selectedValues = multi
    ? (value as string[]) || []
    : typeof value === "string"
    ? [value]
    : [];

  const selectedLabels = options
    .filter((opt) => selectedValues.includes(opt.value))
    .map((opt) => opt.label);

  const toggleOption = (optionValue: string) => {
    if (multi) {
      if (selectedValues.includes(optionValue)) {
        const newValues = selectedValues.filter((val) => val !== optionValue);
        onChange(newValues);
      } else {
        onChange([...selectedValues, optionValue]);
      }
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
    setSearchTerm("");
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xs space-y-1">
      <label>{label}</label>
      <button
        type="button"
        className="w-full px-4 py-2 text-left border-2 border-light-gray rounded bg-white shadow-sm focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedLabels.length > 0 ? selectedLabels.join(", ") : placeholder}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-y-auto">
          {searchable && (
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border-b outline-none"
            />
          )}

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    isSelected ? "bg-gray-100 font-medium" : ""
                  }`}
                  onClick={() => toggleOption(option.value)}
                >
                  {option.label}
                  {multi && isSelected && (
                    <span className="ml-2 text-green-500">&#10003;</span>
                  )}
                </div>
              );
            })
          ) : (
            <div className="px-4 py-2 text-gray-400">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
