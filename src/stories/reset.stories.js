import React from "react";
import Reset from "../components/forms/resetPasswordForm";
import { MemoryRouter } from "react-router";

export default {
  title: "Forms/Reset",
  component: Reset,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <Reset />;

Basic.storyName = "Default";
