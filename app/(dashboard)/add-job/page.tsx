import CreateJobForm from "@/components/CreateJobForm";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";

const AddJob = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateJobForm />
    </HydrationBoundary>
  );
};

export default AddJob;
