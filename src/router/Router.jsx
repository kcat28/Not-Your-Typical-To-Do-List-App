
import {Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage'; 
import Achievement from '../pages/Achievement';
import Dashboard from '../pages/Dashboard';
import Todo from '../pages/Todo';
import Habits from  '../pages/Habits'

export default function router(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/to-do" element={<Todo />} />
            <Route path="/habits" element={<Habits />} />



        </Routes>
    )
}