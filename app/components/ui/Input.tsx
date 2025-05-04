import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import classNames from "classnames";

interface InputProps {
  type:
    | "text"
    | "button"
    | "submit"
    | "email"
    | "password"
    | "radio"
    | "checkbox"
    | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  icon?: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
  rounded?: "full" | "md" | "lg";
  checked?: boolean;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  icon,
  className,
  hasBorder,
  rounded,
  checked,
}: InputProps) => {
  const inputStyles = classNames("input", {
    "border-2 border-light-gray": hasBorder,
    "rounded-md": rounded === "md",
    "rounded-lg": rounded === "lg",
    "rounded-full": rounded === "full",
  });

  // Handle checkbox toggle logic
  const handleCheckboxToggle = () => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: checked ? "false" : "true", // You can use true/false or any value as needed
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
        type === "url") && (
        <div className={`flex items-center gap-3 p-2 ${inputStyles}`}>
          {icon && <span>{icon}</span>}
          <input
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
            className={`w-full ${className} border-none outline-none`}
          />
        </div>
      )}

      {type === "checkbox" && (
        <div className="cursor-pointer flex items-center gap-2">
          {/* Render the checkbox icon with onClick */}
          {checked ? (
            <CheckBox onClick={handleCheckboxToggle} />
          ) : (
            <CheckBoxOutlineBlank onClick={handleCheckboxToggle} />
          )}
        </div>
      )}
    </>
  );
};

export default Input;
