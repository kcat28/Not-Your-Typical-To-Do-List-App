import { useState } from 'react';
import scattered_icons from '../assets/scattered_icons.png' 
import Contentcard from '../components/Contentcard'
import Sidebar from '../components/Sidebar.jsx';
import Maincontent from '../components/Maincontent.jsx';
import Note from '../components/Note.jsx';

function Habits() {
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
        <div className="h-screen w-screen bg-[#FFEE9F] flex flex-row justify-center px-10 pt-16 pb-16 gap-7"
             style={{ backgroundImage: `url(${scattered_icons})`}}>
                {/* Sidebar */}
                <Sidebar />
                 
                {/* Main Content */}
                <Maincontent title="Habit 🔥" isSub={false} isOpen={selectedNote || isCreating}>
                    <Contentcard onClick={() => handleNoteClick("Note 1")} shrink={selectedNote !== null || isCreating} noteName={"Habit1"} />
                    <Contentcard onClick={() => handleNoteClick("Note 2")} shrink={selectedNote !== null || isCreating} noteName={"Habit2"} />
                    <Contentcard onClick={() => handleNoteClick("Note 3")} shrink={selectedNote !== null || isCreating} noteName={"Habit3"} />
                    <Contentcard onClick={() => handleNoteClick("Note 4")} shrink={selectedNote !== null || isCreating} noteName={"Habit4"} />

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

export default Habits