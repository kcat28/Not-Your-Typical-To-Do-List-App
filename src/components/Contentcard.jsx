import { useState } from 'react';
import Deletemodal from './deleteModal';
import deleteIcon from '../assets/deleteIcon.png';
import { getAuth } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

function Contentcard({ onClick, noteName, shrink, note, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedDate = note?.createdAt?.seconds
    ? new Date(note.createdAt.seconds * 1000).toLocaleDateString()
    : "Unknown date";

  const handleDelete = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("You must be logged in to delete notes.");
      return;
    }

    if (!note?.id) {
    alert("Note ID missing. Cannot delete.");
    return;
  }

    try {
      await deleteDoc(doc(db, "users", user.uid, "notes", note.id));
      console.log("Note deleted:", note.id);
      setIsModalOpen(false);
      if (typeof onDelete === "function") {
        onDelete(note.id); // notify Dashboard to update notes
      }

    } catch (error) {
      console.error("Error deleting note:", error);
      alert("Failed to delete note.");
    }
  };

  return (
    <div 
      onClick={onClick} 
      className={`${shrink ? "w-[40%]" : "w-[25%]"} bg-[#FFF7D4] rounded-3xl shadow-md px-4 py-5 cursor-pointer`}
    >
      <div className="relative mb-2">
        <h1 className="text-lg text-black font-normal font-roboto text-start">{noteName}</h1>
        <button
          className="p-2 hover:opacity-75 cursor-pointer absolute top-0 right-0"
          onClick={(e) => {
            e.stopPropagation(); // ⛔ prevent note opening
            setIsModalOpen(true);
          }}
        >
          <img src={deleteIcon} alt="delete" className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col gap-6 px-2">
        <div
          className="text-gray-700 text-sm line-clamp-3"
          dangerouslySetInnerHTML={{ __html: note?.content || "<p>No content</p>" }}
        />
        <p className="font-roboto text-xs text-gray-500">Created on {formattedDate}</p>
      </div>

      {isModalOpen && (
        <Deletemodal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={noteName}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default Contentcard;
