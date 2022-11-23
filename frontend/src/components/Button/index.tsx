import React from "react";
import { CustomButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick: (a: any) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <CustomButton type="button" onClick={onClick}>{text}</CustomButton>;
};

export default Button;