
import {Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage'; 


export default function router(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    )
}