/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as DashboardProjectIdImport } from './routes/dashboard/project/$id'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardProjectIdRoute = DashboardProjectIdImport.update({
  id: '/project/$id',
  path: '/project/$id',
  getParentRoute: () => DashboardRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/project/$id': {
      id: '/dashboard/project/$id'
      path: '/project/$id'
      fullPath: '/dashboard/project/$id'
      preLoaderRoute: typeof DashboardProjectIdImport
      parentRoute: typeof DashboardImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteChildren {
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardProjectIdRoute: typeof DashboardProjectIdRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardProjectIdRoute: DashboardProjectIdRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/project/$id': typeof DashboardProjectIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/project/$id': typeof DashboardProjectIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/project/$id': typeof DashboardProjectIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dashboard' | '/dashboard/' | '/dashboard/project/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashboard' | '/dashboard/project/$id'
  id: '__root__' | '/' | '/dashboard' | '/dashboard/' | '/dashboard/project/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/",
        "/dashboard/project/$id"
      ]
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/project/$id": {
      "filePath": "dashboard/project/$id.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
