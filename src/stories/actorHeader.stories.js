import React from "react";
import ActorHeader from "../components/headerActor";
import SampleActor from "./sampleActorData";

export default {
  title: "Actor Page/ActorHeader",
  component: ActorHeader,
};

export const Basic = () => <ActorHeader actor={SampleActor} />;
Basic.storyName = "Default";