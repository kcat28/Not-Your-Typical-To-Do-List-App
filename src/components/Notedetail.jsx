import { motion } from 'framer-motion';
import {useState} from 'react';

function NoteDetail({ note, onClose }) {
  const [isComplete, setIsComplete] = useState(false);
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
        <h1 className=" text-2xl font-bold font-roboto absolute top-0 left-10">{note}</h1>

        {/*complete? toggle*/}
        <button onClick={handleToggle} className={`text-sm font-roboto px-3 py-1 rounded-lg transition cursor-pointer
          ${isComplete ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-700 hover:bg-yellow-200"}`}>
          {isComplete ? "✓ Completed" : "Mark as Complete"}
        </button>
      </div>

      {/*note texts*/}
      <p className="text-sm text-gray-600">
        Full note details would appear here. You can also put edit/delete buttons.
      </p>
    </motion.div>
  );
}

export default NoteDetail;
