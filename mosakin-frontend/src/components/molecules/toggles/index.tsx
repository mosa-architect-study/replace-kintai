import React from "react";
import { Toggle } from "../../atoms/toggle";
import { TextSize } from "@/components/atoms/text";
interface TogglesProps {
  options: { value: string; label: string; size: TextSize }[];
  value: string;
  onClick: (value: string) => void;
}

const Toggles: React.FC<TogglesProps> = ({ options, value, onClick }) => {
  return (
    <div>
      {options.map(option => (
        <Toggle
          label={option.label}
          size={option.size}
          key={option.value}
          onClick={() => onClick(option.value)}
          selected={value === option.value}
        ></Toggle>
      ))}
    </div>
  );
};

export { Toggles };
