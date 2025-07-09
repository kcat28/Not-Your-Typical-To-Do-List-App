
import {Routes, Route} from 'react-router-dom';
import Layout from '../layout/Layout';
import LandingPage from '../pages/LandingPage'; 
import Achievement from '../pages/Achievement';
import AllNotes from '../pages/AllNotes';
import Todo from '../pages/Todo';
import Habits from  '../pages/Habits'
import ProtectedRoute from '../components/Protectedroutes';

export default function router(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>

           <Route element={<Layout />}>
                <Route path="/achievement" element={<ProtectedRoute> <Achievement /> </ProtectedRoute>} />
                <Route path="/allnotes" element={<ProtectedRoute> <AllNotes /> </ProtectedRoute>} />
                <Route path="/to-do" element={<ProtectedRoute> <Todo /> </ProtectedRoute>} />
                <Route path="/habits" element={<ProtectedRoute> <Habits /> </ProtectedRoute>} />
            </Route>
        </Routes>
    )
}