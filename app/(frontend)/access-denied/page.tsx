import type { Metadata } from "next";
import Button from "@/modules/@common/Button";
import StatusPage from "@/modules/@common/StatusPage";

export const metadata: Metadata = {
  title: "403 - Access denied",
};

export default function AccessDeniedPage() {
  return (
    <StatusPage
      code="403"
      title="Access denied"
      description="You don't have permission to view this page. Sign in with an account that has access, or return home."
    >
      <Button href="/login">Sign in</Button>
      <Button href="/" variant="outline">
        Back to home
      </Button>
    </StatusPage>
  );
}
