import React from "react";
import TVListHeader from "../components/headerMovieList";

export default {
  title: "TV Page/Header",
  component: TVListHeader,
};

export const Basic = () => <TVListHeader title={'Discover TV Series'} />;

Basic.storyName = "Default";