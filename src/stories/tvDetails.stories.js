import React from "react";
import TVDetails from "../components/tvSeriesDetails";
import SampleTV from "./sampleTVData";

export default {
  title: "TV Details Page/TVDetails",
  component: TVDetails,
};

export const Basic = () => <TVDetails tv={SampleTV} />;
Basic.storyName = "Default";