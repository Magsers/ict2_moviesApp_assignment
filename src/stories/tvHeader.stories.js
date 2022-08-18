import React from "react";
import TVHeader from "../components/headerTV";
import SampleTV from "./sampleTVData";
import { MemoryRouter } from "react-router";

export default {
  title: "TV Details Page/TVHeader",
  component: TVHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVHeader tv={SampleTV} />;

Basic.storyName = "Default";