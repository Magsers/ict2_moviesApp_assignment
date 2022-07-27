import React from "react";
import TVDetails from "../components/tvSeriesDetails";
import { MemoryRouter } from "react-router";
import SampleTV from "./sampleTVData";

export default {
  title: "TV Details Page/TVDetails",
  component: TVDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVDetails tv={SampleTV} />;
Basic.storyName = "Default";