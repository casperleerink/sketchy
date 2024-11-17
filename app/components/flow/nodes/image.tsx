import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import { ImageIcon } from "lucide-react";
import { useId } from "react";

export type ImageNode = Node<{ value?: string | File }, "image">;

export default function ImageNode({ data }: NodeProps<ImageNode>) {
  const id = useId();
  const source =
    data.value instanceof File ? URL.createObjectURL(data.value) : data.value;
  return (
    <>
      {/* <Handle type={"target"} position={Position.Top} /> */}
      <div className="relative max-w-60 rounded-lg overflow-hidden">
        {source ? (
          <img src={source} className="w-full" />
        ) : (
          <div className="size-40 bg-slate-100 inset-0 flex items-center justify-center">
            <ImageIcon size={24} />
          </div>
        )}
      </div>

      {/* <Handle type={"source"} position={Position.Bottom} /> */}
    </>
  );
}
