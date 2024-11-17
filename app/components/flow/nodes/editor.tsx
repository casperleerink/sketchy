import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import { useId } from "react";
import Editor from "~/components/editor";
import type { JSONContent } from "@tiptap/react";

export type EditorNode = Node<{ value: JSONContent | null }, "editor">;

export default function EditorNode({ data }: NodeProps<EditorNode>) {
  const id = useId();
  return (
    <>
      <div className="border border-border bg-white p-4 rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
        <div className="nodrag resize-none cursor-auto min-w-80 min-h-40">
          <Editor />
        </div>
      </div>
    </>
  );
}
