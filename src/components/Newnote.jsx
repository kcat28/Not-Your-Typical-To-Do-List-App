import { useState, useEffect } from "react";

export default function Newnote({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState("");

   useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // 🧼 Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSave = () => {
  if (!title.trim()) return alert("Title is required.");
    onSave({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 font-roboto">Create New Note</h2>

        {/*radio buttons: to-do or*/}
        <div className="mb-4 ">
        <h3 className="text-sm font-semibold mb-2 font-roboto">Select Type</h3>
        <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="section" value="todo" checked={selected === "todo"} onChange={() => setSelected("todo")} className="accent-yellow-500"/>
            <span className="text-sm">To-do</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="section" value="habits" checked={selected === "habits"} onChange={() => setSelected("habits")} className="accent-green-500"/>
            <span className="text-sm">Habits</span>
            </label>
        </div>
        </div>

        {/*input title*/}
        <input type="text" placeholder="Title" className="w-full border rounded-md p-2 mb-3" value={title} onChange={(e) => setTitle(e.target.value)}/>
        {/*input content*/}
        <textarea placeholder="Content" className="w-full border rounded-md p-2 h-32 mb-4 resize-none" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        
        {/*save or cancel buttons*/}
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-300 px-4 py-2 rounded-md cursor-pointer font-roboto" onClick={onClose}> Cancel </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer font-roboto" onClick={handleSave}> Save </button>
        </div>
      </div>
    </div>
  );
}
