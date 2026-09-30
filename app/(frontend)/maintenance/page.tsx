import type { Metadata } from "next";
import Button from "@/modules/@common/Button";
import StatusPage from "@/modules/@common/StatusPage";

export const metadata: Metadata = {
  title: "Under maintenance",
};

export default function MaintenancePage() {
  return (
    <StatusPage
      code="503"
      title="We'll be back soon"
      description="World Uni Hub is currently undergoing scheduled maintenance. Please check back again shortly."
    >
      <Button href="/">Retry</Button>
    </StatusPage>
  );
}
