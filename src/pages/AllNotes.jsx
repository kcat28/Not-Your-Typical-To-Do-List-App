import { useState } from 'react';
import Contentcard from '../components/Contentcard.jsx'
import Sidebar from '../components/Sidebar.jsx';
import Maincontent from '../components/Maincontent.jsx';
import Note from '../components/Note.jsx';
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; // adjust path as needed
import { useEffect } from "react";


function Dashboard() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedNote, setSelectedNote] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const fetchNotes = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
            alert("Not logged in.");
            return;
            }

            try {
            const querySnapshot = await getDocs(collection(db, "users", user.uid, "notes"));
            const userNotes = [];

            querySnapshot.forEach((doc) => {
                userNotes.push({ id: doc.id, ...doc.data() });
            });

            setNotes(userNotes);
            setLoading(false);
            } catch (err) {
            console.error("Failed to load notes:", err);
            }
        };

        fetchNotes();
        }, []);

    const handleNoteClick = (note) => {
        setIsCreating(false);
        setSelectedNote(note);
    };
     const handleNewNote = () => {
        setIsCreating(true);
        setSelectedNote(null);
    };
    const handleCloseNote = () => {
        setIsCreating(false);
        setSelectedNote(null);
    };

    return(
        <div className="h-screen w-screen flex flex-row justify-center px-10 pt-16 pb-16 gap-7">
                {/* Sidebar */}
                <Sidebar/>
                 
                {/* Main Content */}
                <Maincontent title="All Notes 📁" isSub={false} isOpen={selectedNote || isCreating}>
                  {loading ? (
                        <p>Loading...</p>
                    ) : (
                        notes.map((note) => (
                        <Contentcard
                            key={note.id}
                            onClick={() => handleNoteClick(note)}
                            shrink={selectedNote !== null || isCreating}
                            noteName={note.title || "Untitled"}
                            note={note}
                            onDelete={(deletedId) => {
                                setNotes((prev) => prev.filter((n) => n.id !== deletedId));
                                if (selectedNote?.id === deletedId) setSelectedNote(null);
                            }}
                        />
                        ))
                    )}

                <div
                    onClick={handleNewNote}
                    className="w-[25%] bg-[#FFF7D4] rounded-3xl shadow-md flex flex-col items-center justify-center cursor-pointer 
                    hover:bg-yellow-100 transition"
                >
                    <span className="text-5xl font-light text-gray-400">+</span>
                    <p className="text-sg text-gray-500 font-roboto mt-2">Add New Note</p>
                </div>

                </Maincontent>

                {/*Note*/}
                {(selectedNote || isCreating) && (
                <Note
                    note={selectedNote}     
                    isCreating={isCreating}  
                    onClose={handleCloseNote}
                />
            )}

        </div>
    )
}

export default Dashboard