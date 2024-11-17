import { createFileRoute } from "@tanstack/react-router";
import { MainFlow } from "~/components/flow/main";
import AppLayout from "~/dashboard/page";

export const Route = createFileRoute("/")({
  component: () => (
    <AppLayout>
      <MainFlow />
    </AppLayout>
  ),
});
