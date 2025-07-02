import { motion } from 'framer-motion';
import {useState} from 'react';
import QuillEditorWithTasks from './QuillEditorWithTasks';

function NoteDetail({ note, onClose }) {
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState(note?.title || "Untitled")
  const [content, setContent] = useState(note?.content || "")

  const handleToggle = () => {
    setIsComplete(prev => !prev);
  };

  return (
    <motion.div
      className="bg-white rounded-4xl shadow-md px-10 py-5 w-[30%] h-full overflow-y-auto" initial={{ x: -300, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.3 }}>

      {/*top-bar container*/}
      <div className="relative flex justify-between items-center mb-4">
        {/*back btn*/}
        <button className="text-2xl font-bold font-roboto hover:text-gray-500 cursor-pointer" onClick={onClose}>←</button>

        {/*note title*/}
        <input
          className="text-2xl font-bold px-5 border-none focus:outline-none focus:ring-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/*complete? toggle*/}
        <button onClick={handleToggle} className={`text-sm font-roboto px-3 py-1 rounded-lg transition cursor-pointer
          ${isComplete ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-700 hover:bg-yellow-200"}`}>
          {isComplete ? "✓ Completed" : "Mark as Complete"}
        </button>
      </div>

      {/*note texts*/}
         <QuillEditorWithTasks
          value={content}
          onChange={setContent}
          theme="snow"
          className="min-h-[200px] rounded-none border-none shadow-none font-roboto"
        />

    </motion.div>
  );
}

export default NoteDetail;
