import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col bg-white rounded-4xl shadow-md px-10 py-5 h-full gap-5 items-center relative'>
            {/* Sidebar */}
            <button className='font-roboto cursor-pointer hover:text-[#d6a475]' onClick={()=> navigate('/allnotes')}>All Notes 📁</button>
            <button className='font-roboto cursor-pointer hover:text-[#6ab962]' onClick={()=> navigate('/to-do')}>To-do ✅</button>
            <button className='font-roboto cursor-pointer hover:text-[#f85a7c]' onClick={()=> navigate('/habits')}>Habit 🔥</button>
            <button className='font-roboto cursor-pointer hover:text-[#ffbf00]' onClick={() => navigate('/achievement')}>Achievements 🏆</button>
            
            <button className='font-roboto cursor-pointer hover:text-red-500 absolute bottom-10' onClick={() => navigate('/')}>Exit App</button>
        </div>
    );
}

export default Sidebar;
