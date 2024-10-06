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
  return (
    <>
      <StatsContainer />
      <ChartsContainer />
    </>
  );
};

export default Stats;
