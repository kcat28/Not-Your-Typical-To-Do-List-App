import {useState} from "react";
import { useNavigate } from 'react-router-dom';
function Authcard(){
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    return(
         <div className="bg-white font-roboto rounded-xl shadow-md p-6 w-full max-w-sm">
            <div className="flex justify-center gap-4 mb-6">

                <button className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer ${
                isSignUp ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setIsSignUp(true)}
                > Sign Up
                </button>

                <button className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer ${
                !isSignUp ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setIsSignUp(false)}
                > Sign In
                </button>

            </div>

            <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
                <input type="password" placeholder="Password" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
                
                {isSignUp && (<input type="password" placeholder="Confirm Password" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>)}
                <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                onClick={() => navigate('/dashboard')}>
                {isSignUp ? "Create Account" : "Log In"}
                </button>
            </form>
        
        </div>
    )
}

export default Authcard