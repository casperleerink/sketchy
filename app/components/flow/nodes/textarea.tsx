import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import { useId } from "react";
import { Textarea } from "~/components/ui/textarea";

export type TextareaNode = Node<{ value: string }, "textarea">;

export default function TextareaNode({ data }: NodeProps<TextareaNode>) {
  const id = useId();
  return (
    <>
      {/* <Handle type={"target"} position={Position.Top} /> */}
      <div className="p-0">
        <Textarea
          id={id}
          defaultValue={data.value}
          className="nodrag resize-none"
        />
      </div>

      {/* <Handle type={"source"} position={Position.Bottom} /> */}
    </>
  );
}
