import Authcard from '../components/Authcard'; 
import scattered_icons from '../assets/scattered_icons.png' 
function LandingPage() {
   
  return (
    <div className="min-h-screen bg-[#B9FF99] flex flex-col items-center px-6 pt-16"
     style={{ backgroundImage: `url(${scattered_icons})`}}>

      <h1 className="text-4xl font-bold text-black mb-6 mt-30 text-center">
        Not Your Typical To Do List /ᐠ-˕-マⳊ
      </h1>

      <p className="text-lg text-gray-700 max-w-xl text-center mb-10">
        More than just tasks; track your habits, goals, and progress in one clean space.
        Built with love and late nights by kcat28, this personal project helps you stay
        accountable without the overwhelm. Simple, intentional, and made for real-life routines.
      </p>
        <Authcard/>
        
    </div>
  );
}


export default LandingPage