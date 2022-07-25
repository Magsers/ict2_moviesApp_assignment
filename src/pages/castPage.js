import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateCastPage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const CastPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for Actor details</p>
      )}
    </>
  );
};

export default CastPage;