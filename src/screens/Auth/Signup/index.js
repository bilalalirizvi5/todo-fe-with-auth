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

const Signup = () => {
  const signupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(5, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters!")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
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
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <AuthContainer>
      <AuthBox component="form" onSubmit={handleSubmit} autoComplete="off">
        <AuthHeading>Sign Up</AuthHeading>
        <InputWrapper>
          <Label>Your Full Name</Label>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && errors.userName && (
            <ErrorText>{errors.userName}</ErrorText>
          )}
        </InputWrapper>
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
        <InputWrapper>
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
        <InputWrapper mb={1.2}>
          <Label>Confirm Password</Label>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword &&
            touched.confirmPassword &&
            errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            )}
        </InputWrapper>
        <Button disabled={false} variant="contained" type="submit">
          {false ? <SmallLoading size={25} /> : "Sign Up"}
        </Button>
      </AuthBox>
    </AuthContainer>
  );
};

export default Signup;
