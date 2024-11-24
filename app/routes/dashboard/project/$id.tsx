import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MainFlow } from "~/components/flow/main";

export const Route = createFileRoute("/dashboard/project/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainFlow />;
}
