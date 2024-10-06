import React from "react";
import ChartsContainer from "@/components/ChartsContainer";
import StatsContainer from "@/components/StatsContainer";
import { getChartsDataAction, getStatsAction } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Stats = async () => {
  const queryClient = new QueryClient();

  await queryClient.setQueryData(["stats"], () => getStatsAction());
  await queryClient.setQueryData(["jobs"], () => getChartsDataAction());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
      <ChartsContainer />
    </HydrationBoundary>
  );
};

export default Stats;
