import React from "react";
import { CustomInput, ErrorText } from "./styles";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (a: string) => void;
  error?: string;
}

const Input = ({ placeholder, value, onChange, error }: InputProps) => {
  return (
    <>
      <CustomInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <ErrorText error={error ? "red" : "transparent"}>
        {error ? error : "-"}
      </ErrorText>
    </>
  );
};

export default Input;