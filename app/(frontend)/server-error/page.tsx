import type { Metadata } from "next";
import Button from "@/modules/@common/Button";
import StatusPage from "@/modules/@common/StatusPage";

export const metadata: Metadata = {
  title: "500 - Server error",
};

export default function ServerErrorPage() {
  return (
    <StatusPage
      code="500"
      title="Something went wrong"
      description="An unexpected error occurred on our end. Please try again in a moment."
    >
      <Button href="/">Back to home</Button>
    </StatusPage>
  );
}
