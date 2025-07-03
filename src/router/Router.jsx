
import {Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage'; 
import Achievement from '../pages/Achievement';
import AllNotes from '../pages/AllNotes';
import Todo from '../pages/Todo';
import Habits from  '../pages/Habits'

export default function router(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/allnotes" element={<AllNotes />} />
            <Route path="/to-do" element={<Todo />} />
            <Route path="/habits" element={<Habits />} />

        </Routes>
    )
}