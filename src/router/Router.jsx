
import {Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage'; 
import Achievement from '../pages/Achievement';


export default function router(){
    return(
        <Routes>
            <Route path="/" element={<Achievement/>}/>
        </Routes>
    )
}