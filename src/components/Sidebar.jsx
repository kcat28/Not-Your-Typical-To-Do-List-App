import { useNavigate } from 'react-router-dom';

function Sidebar({onCreateClick}) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col bg-white rounded-4xl shadow-md px-10 py-5 h-full gap-5 items-center relative'>
            {/* Sidebar */}
            <button className='font-roboto cursor-pointer hover:text-[#83b169]' onClick={onCreateClick}>Create new file</button>
            <button className='font-roboto cursor-pointer hover:text-[#d6a475]' onClick={()=> navigate('/dashboard')}>Dashboard</button>
            <button className='font-roboto cursor-pointer hover:text-[#d6a475]' onClick={()=> navigate('/to-do')}>To-do</button>
            <button className='font-roboto cursor-pointer hover:text-[#d6a475]' onClick={()=> navigate('/habits')}>Habits</button>
            <button className='font-roboto cursor-pointer hover:text-[#d6a475]' onClick={() => navigate('/achievement')}>Achievements</button>
            <button className='font-roboto cursor-pointer hover:text-red-500 absolute bottom-10' onClick={() => navigate('/')}>Exit App</button>
        </div>
    );
}

export default Sidebar;
