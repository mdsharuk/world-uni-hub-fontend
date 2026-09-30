import Button from "@/modules/@common/Button";
import StatusPage from "@/modules/@common/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      fullHeight
      code="404"
      title="Page not found"
      description="The page you are looking for does not exist or has been moved."
    >
      <Button href="/">Back to home</Button>
    </StatusPage>
  );
}
