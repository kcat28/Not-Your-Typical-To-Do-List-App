import { motion } from 'framer-motion';
import { useState } from 'react';
import QuillEditorWithTasks from './QuillEditorWithTasks';

function Note({ note, isCreating, onClose }) {
  const [save, setSave] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState(note || "Untitled");
  const [content, setContent] = useState(note?.content || "");

  const [noteType, setNoteType] = useState("to-do"); 
  const [selectedAchievement, setSelectedAchievement] = useState("");

  const handleToggle = () => {
    setIsComplete(prev => !prev);
  };

  const handleSave = () => {
    const newNote = {
    title,
    content,
    isComplete,
    type: noteType,
    achievement: noteType === "habit" ? selectedAchievement : null,
    createdAt: new Date().toISOString()
  };
    console.log("Saving note:", newNote);
    setSave(true);
    setTimeout(() => {
      setSave(false);
      onClose(); // later change to opening that saved note (add query)
    }, 650);
  }

  const dummyAchievements = [
    "Thinking Like Senku",
    "Running with the Wind",
    "Kamogawa Gym Style",
    "Lock-In"
  ];

  return (
    <motion.div
      className="bg-white rounded-4xl shadow-md px-10 py-5 w-[30%] h-full overflow-y-auto"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      {/* top bar */}
      <div className="relative flex justify-between items-center mb-4">
        <button className="text-2xl font-bold font-roboto hover:text-gray-500 cursor-pointer" onClick={onClose}>←</button>

        <input
          className="text-2xl font-bold px-5 border-none focus:outline-none focus:ring-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

       {isCreating ? (
        <button 
        onClick={handleSave} 
        className={`text-sm font-roboto px-3 py-1 rounded-lg transition cursor-pointer 
            ${save ? "bg-green-200 text-green-800 min-w-[130px] text-center" : "bg-gray-200 text-gray-700 hover:bg-yellow-200 min-w-[120px] text-center"}`}>
          {save ? "Note Saved ✓" : "Save Note ?"}
        </button>
        ) : (
        <button
          onClick={handleToggle}
          className={`text-sm font-roboto px-3 py-1 rounded-lg transition cursor-pointer
            ${isComplete ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-700 hover:bg-yellow-200 "}`}>
          {isComplete ? "✓ Completed" : "Mark as Complete"}
        </button>
        )}


      </div>


      {/* Note Type Selection */}
      {isCreating && (
        <div className="mb-4 space-y-2">
          <div className="flex gap-4">
            <label className="flex items-center gap-2 font-roboto cursor-pointer">
              <input
                type="radio"
                value="to-do"
                checked={noteType === "to-do"}
                onChange={() => setNoteType("to-do")}
                className="accent-yellow-500"
              />
              To-Do
            </label>
            <label className="flex items-center gap-2 font-roboto cursor-pointer">
              <input
                type="radio"
                value="habit"
                checked={noteType === "habit"}
                onChange={() => setNoteType("habit")}
                className="accent-green-500"
              />
              Habit
            </label>
          </div>

          {/* Achievement Dropdown */}
          {noteType === "habit" && (
             <div className="mb-4">
              <label className="block text-sm font-roboto mb-1">Choose Achievement Card:</label>
              <select
                value={selectedAchievement}
                onChange={(e) => setSelectedAchievement(e.target.value)}
                className="w-full border rounded-md p-2"
              >
                <option value="" disabled>Select one...</option>
                {dummyAchievements.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {/*text editor */}
      <QuillEditorWithTasks
        value={content}
        onChange={setContent}
        theme="snow"
        className="min-h-[200px] rounded-none border-none shadow-none font-roboto"
      />
    </motion.div>
  );
}

export default Note;
