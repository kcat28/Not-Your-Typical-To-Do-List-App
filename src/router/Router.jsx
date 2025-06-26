
import {Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage'; 
import Achievement from '../pages/Achievement';
import Dashboard from '../pages/Dashboard';


export default function router(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}