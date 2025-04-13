import classNames from "classnames";

interface ButtonProps {
  background: "transparent" | "solid" | "white";
  textColor:
    | "white"
    | "lightPurple"
    | "darkPurple"
    | "transparent"
    | "lightGray";
  border: "dashed" | "solid" | "none";
  rounded: "medium" | "none" | "full";
  title: string;
  className?: string;
  onClick: () => void;
  type: "button" | "submit";
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
}: ButtonProps) => {
  const backgroundClass = classNames("btn", {
    "bg-primary-purple": background === "solid",
    "bg-transparent": background === "transparent",
    "bg-white": background === "white",
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
    "text-light-gray": textColor === "lightGray",
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${backgroundClass} ${borderClass} ${borderRadiusClass} ${textColorClass} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
