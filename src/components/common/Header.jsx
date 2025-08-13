import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const isAuthenticated = localStorage.getItem('token') || false;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header className="navbar bg-primary text-primary-content shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          🛍️ Internet Magazin
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="hover:bg-primary-focus">
              🏠 Bosh sahifa
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:bg-primary-focus">
              📦 Mahsulotlar
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/cart" className="hover:bg-primary-focus">
                🛒 Savatcha
              </Link>
            </li>
          )}
        </ul>
      </div>
      
      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <span className="text-2xl">👤</span>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/profile" className="text-base-content">
                  👤 Profil
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-base-content">
                  🚪 Chiqish
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to="/login" className="btn btn-ghost">
              🔑 Kirish
            </Link>
            <Link to="/register" className="btn btn-outline btn-secondary">
              ✨ Ro'yxat
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;