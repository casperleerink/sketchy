import { useCallback } from "react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  type Connection,
  Controls,
  type NodeTypes,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TextareaNode from "./nodes/textarea";
import InputNode from "./nodes/input";
import ImageNode from "./nodes/image";
import { fromEvent } from "file-selector";
import EditorNode from "./nodes/editor";
import colors from "tailwindcss/colors";

let id = 0;
const getId = () => `dndnode_${id++}`;

const initialNodes = [
  {
    id: "1",
    position: { x: 50, y: 50 },
    data: { value: "Hello" },
    type: "textarea",
  },
  {
    id: "3",
    position: { x: 300, y: 50 },
    data: { value: null },
    type: "editor",
  },
];
const initialEdges = [];

const nodeTypes: NodeTypes = {
  textarea: TextareaNode,
  input: InputNode,
  image: ImageNode,
  editor: EditorNode,
};

export const MainFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback(
    async (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const files = await fromEvent(event);

      const file = files[0]!;
      if (file && file.type.startsWith("image/")) {
        console.log("Creating new image: ", file);
        const newNode = {
          id: getId(),
          type: "image",
          position,
          data: { value: file as any },
        };
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [screenToFlowPosition]
  );
  return (
    <div className="p-4 w-full h-full">
      <div className="relative w-full h-full border rounded-lg border-border">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <Controls />
          <Background
            variant={BackgroundVariant.Dots}
            gap={12}
            size={1}
            bgColor={colors.gray[50]}
            className="rounded-lg"
          />
        </ReactFlow>
      </div>
    </div>
  );
};
