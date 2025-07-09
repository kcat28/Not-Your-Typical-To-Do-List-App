import { useState } from 'react';
import Contentcard from '../components/Contentcard.jsx'
import Sidebar from '../components/Sidebar.jsx';
import Maincontent from '../components/Maincontent.jsx';
import Note from '../components/Note.jsx';

function Dashboard() {
    const [selectedNote, setSelectedNote] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

    const handleNoteClick = (noteName) => {
        setIsCreating(false);
        setSelectedNote(noteName);
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
                <Contentcard onClick={() => handleNoteClick("Note 1")} shrink={selectedNote !== null || isCreating} noteName={"DB1"} />
                <Contentcard onClick={() => handleNoteClick("Note 2")} shrink={selectedNote !== null || isCreating} noteName={"DB2"} />
                <Contentcard onClick={() => handleNoteClick("Note 3")} shrink={selectedNote !== null || isCreating} noteName={"DB3"} />
                <Contentcard onClick={() => handleNoteClick("Note 4")} shrink={selectedNote !== null || isCreating} noteName={"DB4"} />

                <div
                    onClick={handleNewNote}
                    className="w-[30%] bg-[#FFF7D4] rounded-3xl shadow-md flex flex-col items-center justify-center cursor-pointer 
                    hover:bg-yellow-100 transition"
                >
                    <span className="text-6xl font-light text-gray-400">+</span>
                    <p className="text-lg text-gray-500 font-roboto mt-2">Add New Note</p>
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