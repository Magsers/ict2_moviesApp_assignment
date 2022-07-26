import React from "react";
import TVHeader from "../components/headerTV";
import SampleTV from "./sampleTVData";

export default {
  title: "TV Details Page/TVHeader",
  component: TVHeader,
};

export const Basic = () => <TVHeader tv={SampleTV} />;
Basic.storyName = "Default";