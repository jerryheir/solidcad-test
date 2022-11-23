import Input from "components/Input";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "components/Button";
import { Container, HeaderText, PText } from "styles";

const contactSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("First name is required")
    .max(25, "Maximum of 25 characters"),
  lastname: Yup.string()
    .required("Last name is required")
    .max(25, "Maximum of 25 characters"),
  email: Yup.string()
    .required("Email is required")
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
        const { status } = await fetch(`${BASE_URL}/contact`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        }).then((res) => res.json());

        if (status === "success") {
          setMessage("Contact successfully added.");
          formik.resetForm();
        } else {
          setMessage("Error: Something went wrong.")
        }
      } catch (e) {
        setMessage("Error: Network Connection failed.");
      }
    },
    validationSchema: contactSchema,
  });
  return (
    <Container>
      <HeaderText>CONTACT FORM</HeaderText>
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
        data-testid={"email"}
        value={formik.values.email}
        onChange={formik.handleChange("email")}
        error={formik.errors.email}
      />
      <Input
        placeholder={"Message"}
        value={formik.values.message}
        onChange={formik.handleChange("message")}
        error={formik.errors.message}
      />
      <PText>{message}</PText>
      <Button text={"COMPLETE"} onClick={formik.handleSubmit} />
    </Container>
  );
};

export default App;

const BASE_URL = process.env.BASE_URL;