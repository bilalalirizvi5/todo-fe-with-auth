import React from "react";

import {
  AuthContainer,
  AuthBox,
  InputWrapper,
} from "@styledComponents/wrappers";
import { AuthHeading } from "@styledComponents/Headings";
import { ErrorText, Label, TextField } from "@styledComponents/Inputs";
import { Button } from "@styledComponents/Buttons";
import { SmallLoading } from "@styledComponents/Progress";

import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters!")
      .required("Required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <AuthContainer>
      <AuthBox component="form" onSubmit={handleSubmit} autoComplete="off">
        <AuthHeading>Login</AuthHeading>
        <InputWrapper>
          <Label>Email address</Label>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && errors.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
        </InputWrapper>
        <InputWrapper mb={1.2}>
          <Label>Password</Label>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && errors.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
        </InputWrapper>
        <Button disabled={false} variant="contained" type="submit">
          {false ? <SmallLoading size={25} /> : "Login"}
        </Button>
      </AuthBox>
    </AuthContainer>
  );
};

export default Login;
