import classNames from "classnames";

interface ButtonProps {
  background: "transparent" | "primaryPurple" | "white" | "red";
  textColor:
    | "white"
    | "lightPurple"
    | "darkPurple"
    | "transparent"
    | "lightGray";
  border: "dashed" | "solid" | "none";
  rounded?: "medium" | "none" | "full";
  title: string;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit";
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  background,
  border,
  className,
  rounded,
  textColor,
  title,
  onClick,
  type,
  icon,
  disabled,
}: ButtonProps) => {
  const backgroundClass = classNames("btn", {
    "bg-primary-purple": background === "primaryPurple",
    "bg-transparent": background === "transparent",
    "bg-white": background === "white",
    "bg-red-500": background === "red",
  });

  const borderClass = classNames("btn", {
    "border-2": border === "solid",
    "border-none": border === "none",
    "border-dashed": border === "dashed",
  });

  const borderRadiusClass = classNames("btn", {
    "rounded-md": rounded === "medium",
    "rounded-full": rounded === "full",
    "rounded-none": rounded === "none",
  });

  const textColorClass = classNames("btn", {
    "text-primary-purple": textColor === "darkPurple",
    "text-white": textColor === "white",
    "text-[#89868D]": textColor === "lightGray",
  });

  return (
    <div
      className={`${backgroundClass} ${borderClass} ${borderRadiusClass} ${textColorClass} ${className} cursor-pointer flex items-center gap-2`}
    >
      {icon && <span>{icon}</span>}
      <button disabled={disabled} type={type} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
