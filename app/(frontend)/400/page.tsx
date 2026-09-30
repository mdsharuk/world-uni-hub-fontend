import type { Metadata } from "next";
import Button from "@/modules/@common/Button";
import StatusPage from "@/modules/@common/StatusPage";

export const metadata: Metadata = {
  title: "400 - Bad request",
};

export default function BadRequestPage() {
  return (
    <StatusPage
      code="400"
      title="Bad request"
      description="The request could not be understood by the server due to invalid syntax. Please check the URL and try again."
    >
      <Button href="/">Back to home</Button>
    </StatusPage>
  );
}
