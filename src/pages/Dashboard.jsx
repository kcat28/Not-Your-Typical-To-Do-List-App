import scattered_icons from '../assets/scattered_icons.png' 
import Contentcard from '../components/Contentcard'
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const navigate = useNavigate();

    return(
        <div className="h-screen w-screen bg-[#FFEE9F] flex flex-row justify-center px-10 pt-16 pb-16 gap-7"
             style={{ backgroundImage: `url(${scattered_icons})`}}>

                {/* Sidebar */}
                 <div className='flex flex-col bg-white rounded-4xl shadow-md px-10 py-5 h-full gap-5 items-center'>
                    <button className='font-roboto cursor-pointer hover:text-[#83b169]'>Create new file</button>
                    <button className='font-roboto cursor-pointer hover:text-[#d6a475]'>To-do</button>
                    <button className='font-roboto cursor-pointer hover:text-[#d6a475]'>Habits</button>
                    <button className='font-roboto cursor-pointer hover:text-[#d6a475]'onClick={() => navigate('/achievement')}>Achievements</button>
                    <button className='font-roboto cursor-pointer hover:text-red-500 absolute bottom-30' onClick={() => navigate('/')}>Exit App</button>
                </div>

                {/* Main Content */}
               <div className="bg-white rounded-4xl shadow-md px-10 py-5 w-[70%] h-full overflow-y-auto">
                    <div className='relative mb-4'>
                        <h1 className="text-3xl font-bold font-roboto text-start pb-15">Dashboard</h1>
                    </div>
                    <div className='flex flex-wrap gap-5'>
                        <Contentcard/>
                        <Contentcard/>
                        <Contentcard/>
                        <Contentcard/>
                    </div>
                </div>

        </div>
    )
}

export default Dashboard