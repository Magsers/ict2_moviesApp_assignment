import React from "react";
import TVCard from "../components/tvCard";
import SampleTV from "./sampleTVData";

export default {
  title: "Home Page/TVCard",
  component: TVCard,
};

export const Basic = () => {
  return (
    <TVCard
      tv={SampleTV}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTV, poster_path: undefined };
  return (
    <TVCard
      tv={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";