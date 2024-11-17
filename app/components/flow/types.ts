import type { BuiltInNode, BuiltInEdge } from "@xyflow/react";

// Custom nodes
import type { TextareaNode } from "./nodes/textarea";
import { InputNode } from "./nodes/input";
import { ImageNode } from "./nodes/image";
import { EditorNode } from "./nodes/editor";

export type CustomNodeType =
  | BuiltInNode
  | TextareaNode
  | InputNode
  | ImageNode
  | EditorNode;
export type CustomEdgeType = BuiltInEdge;
