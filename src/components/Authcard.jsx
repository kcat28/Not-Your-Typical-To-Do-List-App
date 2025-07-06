import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Authcard(){
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");

        try{
            if (isSignUp) {
                if (password !== confirmPassword){
                    setError("Passwords do not match");
                    return
                }
                await createUserWithEmailAndPassword(auth, email, password);
            } 
            else {
                await signInWithEmailAndPassword (auth, email, password);
            }
            navigate("/allnotes");  
        } catch (err){
            setError(err.message);
        }
    };

    return(
         <div className="bg-white font-roboto rounded-xl shadow-md p-6 w-full max-w-sm">
            <div className="flex justify-center gap-4 mb-6">

                <button className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer ${
                    isSignUp ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                    onClick={() => setIsSignUp(true)}
                > Sign Up
                </button>

                <button 
                className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer ${
                    !isSignUp ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                    onClick={() => setIsSignUp(false)}
                > Sign In
                </button>
            </div>
            {error && <p className="text-red-600 mb-2">{error}</p>}                                                         

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/*email textbox*/}
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                {/*password textbox*/}
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                {/*submit buttons*/}
                {isSignUp && (
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    )}
                <button 
                    type="submit" 
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                    {isSignUp ? "Create Account" : "Log In"}
                </button>
            </form>
        </div>
    );
}
export default Authcard