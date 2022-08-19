import React from "react";
import Login from "../components/forms/loginForm";
import { MemoryRouter } from "react-router";

export default {
  title: "Forms/Login",
  component: Login,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <Login />;

Basic.storyName = "Default";
