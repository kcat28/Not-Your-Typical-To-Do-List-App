import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { uid, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; 
  }

  return uid ? children : <Navigate to="/" replace />;
}
