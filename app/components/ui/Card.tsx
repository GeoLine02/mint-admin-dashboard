interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`bg-white border border-light-gray rounded-xl w-fit shadow ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
