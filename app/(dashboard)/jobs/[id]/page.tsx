import EditJobForm from "@/components/EditJobForm";
import { getSingleJobAction } from "@/utils/actions";

async function JobDetailPage({ params }: { params: { id: string } }) {
  return <EditJobForm jobId={params.id} />;
}
export default JobDetailPage;
