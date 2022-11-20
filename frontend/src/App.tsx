import Input from "components/Input";
import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "components/Button";

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

const PText = styled.p`
  font-size: 12px;
  font-style: italic;
  align-self: center;
  text-align: center;
  margin: 11px;
`;

const contactSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("Required")
    .max(25, "Maximum of 25 characters"),
  lastname: Yup.string()
    .required("Required")
    .max(25, "Maximum of 25 characters"),
  email: Yup.string()
    .required("Email is Required")
    .email("Invalid email")
    .max(50, "Maximum of 50 characters"),
  message: Yup.string()
    .required("Message is required.")
    .max(500, "Maximum of 500 characters"),
});

const App = () => {
  const [message, setMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      setMessage("");
      try {
        await fetch("http://localhost:8080/contact", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        });
        setMessage("Contact successfully added");
        formik.resetForm();
      } catch (e) {
        setMessage("Error: Network Connection failed");
      }
    },
    validationSchema: contactSchema,
  });
  return (
    <Container>
      <HeaderText>Test App</HeaderText>
      <Input
        placeholder={"First Name"}
        value={formik.values.firstname}
        onChange={formik.handleChange("firstname")}
        error={formik.errors.firstname}
      />
      <Input
        placeholder={"Last Name"}
        value={formik.values.lastname}
        onChange={formik.handleChange("lastname")}
        error={formik.errors.lastname}
      />
      <Input
        placeholder={"Email"}
        value={formik.values.email}
        onChange={formik.handleChange("email")}
        error={formik.errors.email}
      />
      <Input
        placeholder={"Message"}
        value={formik.values.email}
        onChange={formik.handleChange("message")}
        error={formik.errors.message}
      />
      <PText>{message}</PText>
      <Button text={"COMPLETE"} onClick={formik.handleSubmit} />
    </Container>
  );
};

export default App;
