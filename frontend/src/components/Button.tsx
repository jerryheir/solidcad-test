import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick: (a: any) => void;
}

const CustomButton = styled.button`
  height: 44px;
  max-width: 400px;
  width: 95%;
  border-radius: 4px;
  margin: 11px;
  background-color: blue;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const Button = ({ text, onClick }: ButtonProps) => {
  return <CustomButton type="button" onClick={onClick}>{text}</CustomButton>;
};

export default Button;
