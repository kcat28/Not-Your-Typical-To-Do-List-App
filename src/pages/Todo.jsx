import { useState } from 'react';
import scattered_icons from '../assets/scattered_icons.png' 
import Contentcard from '../components/Contentcard'
import Sidebar from '../components/Sidebar.jsx';
import Maincontent from '../components/Maincontent.jsx';
import Notedetail from '../components/Notedetail.jsx'; 
import Newnote from '../components/Newnote.jsx';

function Todo() {
    const [selectedNote, setSelectedNote] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className="h-screen w-screen bg-[#FFEE9F] flex flex-row justify-center px-10 pt-16 pb-16 gap-7"
             style={{ backgroundImage: `url(${scattered_icons})`}}>
                {/* Sidebar */}
                <Sidebar onCreateClick={() => setIsModalOpen(true)} />

                {/* Main Content */}
                <Maincontent title="To-do" isSub={true} isOpen={selectedNote} >
                    <Contentcard onClick={() => setSelectedNote("Note 1")} shrink={selectedNote !== null} noteName={"test1"}/>
                    <Contentcard onClick={() => setSelectedNote("Note 2")} shrink={selectedNote !== null} noteName={"test2"}/>
                    <Contentcard onClick={() => setSelectedNote("Note 3")} shrink={selectedNote !== null} noteName={"test3"}/>
                    <Contentcard onClick={() => setSelectedNote("Note 4")} shrink={selectedNote !== null} noteName={"test4"}/>
                </Maincontent>

                {selectedNote && (<Notedetail note={selectedNote} onClose={() => setSelectedNote(null)} />)}
                {isModalOpen &&(<Newnote isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={() => console.log('Saving note:', selectedNote)}  />)}
                    
        </div>
    )
}

export default Todo