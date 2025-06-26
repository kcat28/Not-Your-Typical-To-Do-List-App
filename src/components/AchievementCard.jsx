import { useState, useEffect } from 'react';

function AchievementCard({ count = 35, activity = "Running with the Wind" }) {
  const [bgColor, setBgColor] = useState('');

  function getRandomColor() {
    const colors = [
      'bg-rose-200',     // soft pink
      'bg-emerald-200',  // minty green
      'bg-sky-200',      // calm blue
      'bg-orange-200',   // warm contrast
      'bg-teal-200',     // retro touch
      'bg-lime-200',     // zesty, playful
      'bg-purple-200',   // balanced softness
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  // Circular progress logic
  return (
    <div className={`w-64 h-64 rounded-4xl shadow-md ${bgColor} flex flex-col items-center justify-center`}>
        <p className="text-2xl font-normal font-roboto p-5 text-start">{activity}</p>
        <div className="flex flex-row items-center gap-10">
            <p className="text-2xl font-normal font-roboto">Level {Math.floor(count / 10)}</p>

        <div className="relative w-18 h-18 flex items-center justify-center">
            <svg className="absolute top-0 left-0" width="72" height="72">
                <circle stroke="#e5e7eb" fill="none" strokeWidth="8" r="26" cx="36" cy="36"/>
                <circle stroke="#34d399" fill="none" strokeWidth="8" strokeLinecap="round" strokeDasharray={2 * Math.PI * 26}
                strokeDashoffset={2 * Math.PI * 26 - (count % 10) / 10 * (2 * Math.PI * 26)} r="26" cx="36" cy="36"/>
            </svg>
            <span className="text-xl font-semibold z-10">{count}</span>
        </div>
        </div>
    </div>
  );
}

export default AchievementCard;
