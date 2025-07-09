import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import scattered_icons from '../assets/scattered_icons.png';

export default function Layout() {
  const { uid } = useAuth();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (!uid) return;
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setEmail(userDoc.data().email || "null");
      }
    };
    fetchUser();
  }, [uid]);

  return (
    <div
      className="min-h-screen w-screen bg-[#FFEE9F] bg-repeat relative"
      style={{ backgroundImage: `url(${scattered_icons})` }}
    >
      {/* top-right signed display */}
      {email && (
        <div className="absolute top-4 right-6 bg-white/70 px-4 py-2 rounded-lg shadow font-roboto text-sm">
          Signed in as: <span className="font-medium">{email}</span>
        </div>
      )}

      {/* page content */}
      <Outlet />
    </div>
  );
}
