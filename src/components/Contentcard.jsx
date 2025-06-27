
import edit from '../assets/edit.png' 
function Contentcard({onClick}){
    return(
        <div 
        onClick={onClick} 
        className='${shrink ? "w-[22%] opacity-60" : "w-[30%]"} bg-[#FFF7D4] rounded-3xl shadow-md px-4 py-5 w-[30%] cursor-pointer'>

            <div className="relative mb-2">
                <h1 className="text-2xl text-black font-normal font-roboto text-start">Today</h1>
                    <button className="p-2 hover:opacity-75 cursor-pointer absolute top-0 right-0">
                        <img src={edit} alt="edit" className="w-7 h-3" />
                    </button>
            </div>

            <div className='flex flex-col gap-6 px-2'>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do ei</p>
                <p className='font-roboto text-gray-500'>Created on 6/27/2025</p>
            </div>

            

        </div>
    )
}

export default Contentcard