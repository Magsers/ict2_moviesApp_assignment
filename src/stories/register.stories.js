import React from "react";
import Register from "../components/forms/registerForm";
import { MemoryRouter } from "react-router";

export default {
  title: "Forms/Register",
  component: Register,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <Register />;

Basic.storyName = "Default";
