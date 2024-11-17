import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import { useId } from "react";
import { Input } from "~/components/ui/input";

export type InputNode = Node<{ value: string }, "input">;

export default function InputNode({ data }: NodeProps<InputNode>) {
  const id = useId();
  return (
    <>
      <Handle type={"target"} position={Position.Top} />
      <div className="p-2">
        <Input
          id={id}
          defaultValue={data.value}
          className="nodrag resize-none"
        />
      </div>
      <Handle type={"source"} position={Position.Bottom} />
    </>
  );
}
