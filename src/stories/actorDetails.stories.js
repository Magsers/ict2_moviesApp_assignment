import React from "react";
import ActorDetails from "../components/actorDetails";
import SampleActor from "./sampleActorData";

export default {
  title: "Actor Page/ActorDetails",
  component: ActorDetails,
};

export const Basic = () => <ActorDetails actor={SampleActor} />;
Basic.storyName = "Default";