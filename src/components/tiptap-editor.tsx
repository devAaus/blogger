
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TiptapMenuBar from './tiptap-menubar';


type TextEditorProps = {
   onChange: (content: string) => void;
   initialContent?: string; // Add this line
};


export default function TiptapEditor({
   onChange,
   initialContent,
}: TextEditorProps) {

   const editor = useEditor({
      extensions: [StarterKit, Underline],
      content: initialContent,
      onUpdate: ({ editor }) => {
         onChange(editor.getHTML())
      },
      editorProps: {
         attributes: {
            class: "min-h-[450px] cursor-text ring-offset-background p-4"
         }
      },
      immediatelyRender: false
   })
   return (
      <div className="border rounded-md p-5 space-y-2">
         <TiptapMenuBar editor={editor} />
         <hr className="bg-gray-900" />
         <EditorContent editor={editor} />
      </div>
   )
}
