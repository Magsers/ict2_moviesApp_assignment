import React from "react";
import ActorCard from "../components/actorCard";
import SampleActor from "./sampleData";

export default {
  title: "Actor Page/ActorCard",
  component: ActorCard,
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, profile_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";