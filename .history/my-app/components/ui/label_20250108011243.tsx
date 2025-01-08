// @/components/ui/label.tsx
import { FC } from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export { Label };
