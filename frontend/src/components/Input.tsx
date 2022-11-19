import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (a: string) => void;
}

const CustomInput = styled.input`
  height: 45px;
  max-width: 400px;
  width: 100%;
  border-radius: 4px;
  margin: 11px;
  background-color: #f1f1f1;
`;

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <CustomInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
