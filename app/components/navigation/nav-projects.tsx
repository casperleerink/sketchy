import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import {
  Folder,
  FrameIcon,
  MoreHorizontal,
  PlusIcon,
  Share,
  Trash2,
  type LucideIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInput,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";
import { api } from "~/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
export function NavProjects({}: {}) {
  const { data: projects } = useSuspenseQuery(
    convexQuery(api.projects.getProjects, {})
  );
  console.log(projects);

  const [newProjectName, setNewProjectName] = useState("");
  const createProject = useMutation(api.projects.createProject);
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects?.map((item) => (
          <SidebarMenuItem key={item._id}>
            <SidebarMenuButton asChild>
              <Link to={"/dashboard/project/$id"} params={{ id: item._id }}>
                <FrameIcon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <SidebarMenuBadge>1</SidebarMenuBadge> */}
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem className="flex flex-col gap-1">
          <SidebarInput
            value={newProjectName}
            onChange={(ev) => setNewProjectName(ev.target.value)}
            placeholder="My Sketchy Project"
          />
          {newProjectName.length > 0 && (
            <SidebarMenuButton
              onClick={() => {
                if (newProjectName.length > 0) {
                  createProject({ name: newProjectName });
                }
              }}
            >
              <PlusIcon />
              <span>New Project</span>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
