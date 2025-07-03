import { useState } from "react";

export default function NewAchievementCard({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");

  const handleSave = () => {
    const numericCount = parseInt(count, 10);
    if (!title.trim() || !count.trim()) return alert("All fields are required.");
    if (numericCount > 99999 || numericCount < 0) return alert("Count Limit reached (0-99999).");
    onSave({ title, count: parseInt(count, 10) });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-md p-6 ">
        <h2 className="text-xl font-bold mb-4">New Achievement Card</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full border rounded-md p-2 mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Count"
          className="w-full border rounded-md p-2 mb-3"
          value={count}
          onChange={(e) => setCount(e.target.value)}
           min="0"
           max="99999"
        />

        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
