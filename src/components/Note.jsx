import { motion } from 'framer-motion';
import { useState } from 'react';
import QuillEditorWithTasks from './QuillEditorWithTasks';
import { db } from '../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { serverTimestamp } from "firebase/firestore";
import { useEffect } from 'react'; 

function Note({ note, isCreating, onClose, page }) {
  const [save, setSave] = useState(false);
  const [title, setTitle] = useState(note?.title || "Untitled");
  const [content, setContent] = useState(note?.content || "");
  const [isComplete, setIsComplete] = useState(note?.isComplete || false);
  const [noteType, setNoteType] = useState(note?.type || page || "to-do");
  const [selectedAchievement, setSelectedAchievement] = useState(note?.achievement || "");

  useEffect(() => {
    if (!isCreating && note) {
      setTitle(note.title || "Untitled");
      setContent(note.content || "");
      setIsComplete(note.isComplete || false);
      setNoteType(note.type || "to-do");
      setSelectedAchievement(note.achievement || "");
    }
  }, [note, isCreating]);


  const handleToggle = () => {
    setIsComplete(prev => !prev);
  };

  const handleSave = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to save notes.");
      return;
    }
    const newNote = {
      title,
      content,
      isComplete,
      type: noteType,
      achievement: noteType === "habit" ? selectedAchievement : null,
      createdAt: serverTimestamp()
    };

    try {
      const docRef = await addDoc(
        collection(db, "users", user.uid, "notes"), // collection path
        newNote
      );
      console.log("Note saved with ID: ", docRef.id);
      setSave(true);
      setTimeout(() => {
        setSave(false);
        onClose(); // later change to opening that saved note (add query)
      }, 690);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to save note. Please try again.");
    }
  };

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
            <label className={`flex items-center gap-2 font-roboto ${page ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
              <input
                type="radio"
                value="to-do"
                checked={noteType === "to-do"}
                onChange={() => setNoteType("to-do")}
                disabled={!!page}
                className="accent-yellow-500"
              />
              To-Do
            </label>
            <label className={`flex items-center gap-2 font-roboto ${page ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
              <input
                type="radio"
                value="habit"
                checked={noteType === "habit"}
                onChange={() => setNoteType("habit")}
                disabled={!!page}
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
