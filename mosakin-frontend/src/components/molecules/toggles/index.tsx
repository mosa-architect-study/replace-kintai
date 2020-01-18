import React from "react";
import { Toggle } from "../../atoms/toggle";
import { TextSize } from "@/components/atoms/text";
interface TogglesProps<T extends string> {
  options: TogglesOption<T>[];
  value: T;
  onClick: (value: T) => void;
}
interface TogglesOption<T extends string> {
  value: T;
  label: string;
  size: TextSize;
}

const Toggles = <T extends string>({
  options,
  value,
  onClick
}: TogglesProps<T>): JSX.Element => {
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

export { Toggles, TogglesOption };
