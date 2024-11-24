// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// define your extension array
const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3],
      HTMLAttributes: {
        class: "text-2xl font-bold",
      },
    },
    bold: {
      HTMLAttributes: {
        class: "font-bold",
      },
    },
  }),
];

const content = "<p>Make something you are proud of!</p>";

const Tiptap = () => {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      onUpdate={({ editor }) => {
        console.log(editor.getJSON());
      }}
      editorContainerProps={{
        className: "focus:outline-none min-h-40",
      }}
      editorProps={{
        attributes: {
          class: "focus:outline-none min-h-40",
        },
      }}
    >
      {/* <FloatingMenu editor={null}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu> */}
    </EditorProvider>
  );
};

export default Tiptap;
