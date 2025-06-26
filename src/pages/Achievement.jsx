import scattered_icons from '../assets/scattered_icons.png';
import AchievementCard from "../components/AchievementCard";
import { Navigate, useNavigate } from 'react-router-dom';
function Achievement() {
    const navigate = useNavigate();
    return (
        <div
            className="min-h-screen bg-[#FFEE9F] flex flex-col items-center px-6 pt-16"
            style={{ backgroundImage: `url(${scattered_icons})` }}>
            <div className="bg-white rounded-4xl shadow-md px-10 py-5 w-[70%]">
              <div className="relative mb-4">
                    <h1 className="text-3xl font-bold font-roboto text-center pb-15 pt-10">Achievements</h1>
                        <button className="absolute top-0 right-0 text-4xl font-normal font-mono text-gray-500 hover:text-red-500 transition cursor-pointer"
                        onClick={() => navigate('/dashboard')}>x</button>

                    <div className='flex flex-wrap items-start gap-5'>
                            <AchievementCard/>
                            <AchievementCard/>
                            <AchievementCard/>
                            <AchievementCard/>
                            <AchievementCard/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Achievement;
