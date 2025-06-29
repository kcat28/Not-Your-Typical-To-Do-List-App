
import { useEffect } from "react"
export default function Deletemodal({isOpen, onClose, title}){

    useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") { onClose();}
    };
    if (isOpen) { window.addEventListener("keydown", handleKeyDown);}

    // 🧼 Cleanup
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleDelete = () => {
        onClose();
        return alert("Note deleted");
    };

    return(

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 cursor-default">
            <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 font-roboto">Are you sure want to delete {title}? </h2>

                <div className="flex justify-end space-x-2 ">
                    <button className="bg-gray-300 px-4 py-2 rounded-md cursor-pointer font-roboto"
                    onClick={onClose}>
                        Cancel
                    </button>
                     <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover: font-roboto"
                     onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
        
    )
}