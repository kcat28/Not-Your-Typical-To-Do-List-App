import { useState } from 'react';
import Deletemodal from './deleteModal';
import deleteIcon from '../assets/deleteIcon.png';
function Contentcard({onClick, noteName}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div 
        onClick={onClick} 
        className='${shrink ? "w-[22%] opacity-60" : "w-[30%]"} bg-[#FFF7D4] rounded-3xl shadow-md px-4 py-5 w-[30%] cursor-pointer'>

            <div className="relative mb-2">
                <h1 className="text-2xl text-black font-normal font-roboto text-start">{noteName}</h1>
                    <button className="p-2 hover:opacity-75 cursor-pointer absolute top-0 right-0"
                    onClick={() => setIsModalOpen(true)}>
                        <img src={deleteIcon} alt="delete" className="w-6 h-6" />
                    </button>
            </div>

            <div className='flex flex-col gap-6 px-2'>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className='font-roboto text-gray-500'>Created on 6/27/2025</p>
            </div>

            {isModalOpen &&(<Deletemodal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={noteName}  />)}


        </div>
    )
}

export default Contentcard