import { Editor } from "@tiptap/react";

const Button = ({
   onClick,
   isActive,
   disabled,
   children,
}: {
   onClick: () => void;
   isActive?: boolean;
   disabled?: boolean;
   children: React.ReactNode;
}) => (
   <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-md ${isActive ? "bg-violet-500 text-white" : "bg-gray-100"}`}
   >
      {children}
   </button>
);

export default function TiptapMenuBar({ editor }: { editor: Editor | null }) {
   if (!editor) return null;

   const buttons = [
      {
         label: "Bold",
         action: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive("bold"),
         disabled: !editor.can().chain().focus().toggleBold().run()
      },
      {
         label: "Italic",
         action: () => editor.chain().focus().toggleItalic().run(),
         isActive: editor.isActive("italic"),
         disabled: !editor.can().chain().focus().toggleItalic().run()
      },
      {
         label: "Strike",
         action: () => editor.chain().focus().toggleStrike().run(),
         isActive: editor.isActive("strike"),
         disabled: !editor.can().chain().focus().toggleStrike().run()
      },
      {
         label: "Code",
         action: () => editor.chain().focus().toggleCode().run(),
         isActive: editor.isActive("code"),
         disabled: !editor.can().chain().focus().toggleCode().run()
      },
      {
         label: "Clear marks",
         action: () => editor.chain().focus().unsetAllMarks().run()
      },
      {
         label: "Clear nodes",
         action: () => editor.chain().focus().clearNodes().run()
      },
      {
         label: "Paragraph",
         action: () => editor.chain().focus().setParagraph().run(),
         isActive: editor.isActive("paragraph")
      },
      {
         label: "H1",
         action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
         isActive: editor.isActive('heading', { level: 1 })
      },
      {
         label: "H2",
         action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
         isActive: editor.isActive('heading', { level: 2 })
      },
      {
         label: "H3",
         action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
         isActive: editor.isActive('heading', { level: 3 })
      },
      {
         label: "H4",
         action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
         isActive: editor.isActive('heading', { level: 4 })
      },
      {
         label: "H5",
         action: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
         isActive: editor.isActive('heading', { level: 5 })
      },
      {
         label: "H6",
         action: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
         isActive: editor.isActive('heading', { level: 6 })
      },
      {
         label: "Bullet list",
         action: () => editor.chain().focus().toggleBulletList().run(),
         isActive: editor.isActive("bulletList")
      },
      {
         label: "Ordered list",
         action: () => editor.chain().focus().toggleOrderedList().run(),
         isActive: editor.isActive("orderedList")
      },
      {
         label: "Code block",
         action: () => editor.chain().focus().toggleCodeBlock().run(),
         isActive: editor.isActive("codeBlock")
      },
      {
         label: "Blockquote",
         action: () => editor.chain().focus().toggleBlockquote().run(),
         isActive: editor.isActive("blockquote")
      },
      {
         label: "Horizontal rule",
         action: () => editor.chain().focus().setHorizontalRule().run()
      },
      {
         label: "Hard break",
         action: () => editor.chain().focus().setHardBreak().run()
      },
      {
         label: "Undo",
         action: () => editor.chain().focus().undo().run(),
         disabled: !editor.can().chain().focus().undo().run()
      },
      {
         label: "Redo",
         action: () => editor.chain().focus().redo().run(),
         disabled: !editor.can().chain().focus().redo().run()
      },
   ];

   return (
      <div className="mb-2 flex flex-wrap gap-2">
         {buttons.map(({ label, action, isActive, disabled }, index) => (
            <Button key={index} onClick={action} isActive={isActive} disabled={disabled}>
               {label}
            </Button>
         ))}
      </div>
   );
}
