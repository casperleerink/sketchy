import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import AppLayout from "~/components/navigation/app-layout";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
