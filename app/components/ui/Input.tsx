import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import classNames from "classnames";
import React from "react";

interface InputProps {
  type:
    | "text"
    | "button"
    | "submit"
    | "email"
    | "password"
    | "radio"
    | "checkbox"
    | "number"
    | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  name: string;
  icon?: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
  rounded?: "full" | "md" | "lg";
  checked?: boolean;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      placeholder,
      value,
      onChange,
      onBlur,
      onKeyDown,
      name,
      icon,
      className,
      hasBorder,
      rounded,
      checked,
      label,
    },
    ref
  ) => {
    const inputStyles = classNames("input", {
      "border-2 border-light-gray focus:ring-primary-purple": hasBorder,
      "rounded-md": rounded === "md",
      "rounded-lg": rounded === "lg",
      "rounded-full": rounded === "full",
    });

    const handleCheckboxToggle = () => {
      if (onChange) {
        onChange({
          target: {
            name,
            value: checked ? "false" : "true",
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <>
        {(type === "text" ||
          type === "button" ||
          type === "email" ||
          type === "password" ||
          type === "submit" ||
          type === "number" ||
          type === "url") && (
          <div>
            {label && <label htmlFor={name}>{label}</label>}
            <div className={`flex items-center gap-3 p-2 ${inputStyles}`}>
              {icon && <span>{icon}</span>}
              <input
                ref={ref}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                type={type}
                value={value}
                className={`w-full ${className} border-none outline-none`}
              />
            </div>
          </div>
        )}

        {type === "checkbox" && (
          <div className="cursor-pointer flex items-center gap-2">
            {checked ? (
              <CheckBox onClick={handleCheckboxToggle} />
            ) : (
              <CheckBoxOutlineBlank onClick={handleCheckboxToggle} />
            )}
          </div>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
