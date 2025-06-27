import { useNavigate } from 'react-router-dom';

function Maincontent({ title, children, isSub = false, isOpen = null}) {
  const navigate = useNavigate();

  return (
    <div className={`bg-white rounded-4xl shadow-md px-10 py-5 h-full overflow-y-auto
      ${isOpen ? 'w-[40%]' : 'w-[70%]'}`}>

      <div className="relative mb-4">
        <h1 className="text-3xl font-bold font-roboto text-start pb-15">{title}</h1>

        {isSub && !isOpen && (
          <button
            className="absolute top-0 right-0 text-4xl font-normal font-mono text-gray-500 hover:text-red-500 transition cursor-pointer"
            onClick={() => navigate('/dashboard')}>
            x
          </button>
        )}

      </div>

      <div className="flex flex-wrap gap-5">
        {children}
      </div>
    </div>
  );
}

export default Maincontent;
