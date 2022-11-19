import Input from "components/Input";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  padding-top: 100px;
`;

const HeaderText = styled.p`
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  text-align: center;
`;

const App = () => {
  const contactSchema = Yup.object().shape({
    firstname: Yup.string().required("Required").max(25, 'Maximum of 25 characters'),
    lastname: Yup.string().required("Required").max(25, 'Maximum of 25 characters'),
    email: Yup.string().required("Email is Required").email("Invalid email").max(50, 'Maximum of 50 characters'),
    message: Yup.string()
      .required("Message is required.").max(500, 'Maximum of 500 characters')
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {},
    validationSchema: contactSchema,
  });
  return (
    <Container>
      <HeaderText>Test App</HeaderText>
      <Input 
      
      />
    </Container>
  );
}

export default App;
