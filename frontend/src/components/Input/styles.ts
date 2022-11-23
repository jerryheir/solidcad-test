import styled from "styled-components";

export const CustomInput = styled.input`
  height: 45px;
  max-width: 400px;
  width: 95%;
  border-radius: 4px;
  margin: 11px;
  margin-bottom: 0px;
  background-color: #f1f1f1;
  padding-left: 11px;
`;

export const ErrorText = styled.p`
  font-size: 10px;
  font-style: italic;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 11px;
  color: ${({ error }: { error: string }) => error};
`;