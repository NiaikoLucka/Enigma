import { cn } from "@/lib/utils";

interface cardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Card = ({ children, className, onClick }: cardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("border border-zinc-400/30 rounded-lg shadow-sm p-4", className)}
    >
      {children}
    </div>
  );
};

export default Card;
