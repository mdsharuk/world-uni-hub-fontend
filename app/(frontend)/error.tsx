"use client";

import Button from "@/modules/@common/Button";
import StatusPage from "@/modules/@common/StatusPage";

export default function FrontendError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <StatusPage
      code="500"
      title="Something went wrong"
      description="An unexpected error occurred while loading this page. You can try again or return to the home page."
    >
      <Button onClick={() => reset()}>Try again</Button>
      <Button href="/" variant="outline">
        Back to home
      </Button>
    </StatusPage>
  );
}
