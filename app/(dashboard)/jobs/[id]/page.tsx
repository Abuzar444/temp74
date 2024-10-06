import EditJobForm from "@/components/EditJobForm";
import { getSingleJobAction } from "@/utils/actions";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <HydrationBoundary>
      <EditJobForm jobId={params.id} />
    </HydrationBoundary>
  );
}
export default JobDetailPage;
