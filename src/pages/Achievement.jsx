import scattered_icons from '../assets/scattered_icons.png';
import Achievementcard from '../components/AchievementCard';
import {useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewAchievementCard from '../components/newAchievementCard';
function Achievement() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate(-1); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);
  
    return (
        <div
            className="min-h-screen bg-[#FFEE9F] flex flex-col items-center px-6 pt-16"
            style={{ backgroundImage: `url(${scattered_icons})` }}>
            <div className="bg-white rounded-4xl shadow-md px-10 py-5 w-[70%]">
              <div className="relative mb-4">
                    <h1 className="text-3xl font-bold font-roboto text-center pb-15 pt-10">Achievements</h1>
                        <button className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center text-2xl font-mono rounded-full border-2 border-gray-300 text-gray-500 hover:text-green-500 hover:bg-green-100 transition cursor-pointer"
                          onClick={() => setIsModalOpen(true)}>+ </button>

                        <button className="absolute top-0 right-0 text-4xl font-normal font-mono text-gray-500 hover:text-red-500 transition cursor-pointer"
                        onClick={() => navigate('/dashboard')}>x</button>

                    <div className='flex flex-wrap items-start gap-5'>
                            <Achievementcard/>
                            <Achievementcard/>
                            <Achievementcard/>
                            <Achievementcard/>
                            <Achievementcard/>
                    </div>
                </div> 
            </div>
             {/* Modal */}
              {isModalOpen && (
                <NewAchievementCard
                  onClose={() => setIsModalOpen(false)}
                  onSave={(data) => console.log('Saved data:', data)}
                />
              )}
        </div>


    );
}

export default Achievement;
