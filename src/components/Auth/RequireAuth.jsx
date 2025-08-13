import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  const location = useLocation();
  
  // Bu yerda authentication logic yoziladi
  // Misol uchun localStorage dan token tekshirish
  const isAuthenticated = localStorage.getItem('token') || false;
  
  // Agar user login qilmagan bo'lsa, login sahifasiga yo'naltirish
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Agar login qilgan bo'lsa, child component'larni ko'rsatish
  return <Outlet />;
};

export default RequireAuth;