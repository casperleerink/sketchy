// app/routes/__root.tsx

import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import appCss from "~/styles/app.css?url";
import * as React from "react";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import xyflowCss from "@xyflow/react/dist/style.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "Sketchy Start",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "stylesheet", href: xyflowCss },
      ],
    }),
    component: RootComponent,
    notFoundComponent: () => <div>404</div>,
  }
);

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
