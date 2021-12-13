import React, { createRef } from "react";
import { Button, Form, Input, P } from "./styled-tags";
import { apiLogin } from "./lookup";
import { sweetalert } from "../generic-components";

export const Login = () => {
  const refUsername = createRef();
  const refPassword = createRef();

  const handleLogin = (response, status) => {
    if (status === 200) {
      localStorage.setItem("auth_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      sweetalert("success", "Logged In!");
      window.location.href = "/stocks";
    } else {
      sweetalert(
        "error",
        "Invalid Credentials",
        "Username or password are incorrect"
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = refUsername.current.value;
    const password = refPassword.current.value;
    apiLogin(username, password, handleLogin);
  };
  return localStorage.getItem("auth_token") ? null : (
    <Form onSubmit={handleSubmit}>
      <Input required={true} ref={refUsername} placeholder="Username" />
      <Input
        required={true}
        type="password"
        ref={refPassword}
        placeholder="Password"
      />
      <Button type="submit">Log In</Button>
    </Form>
  );
};
