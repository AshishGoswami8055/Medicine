// Sidebar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login'); // or your actual login route
  };

  return (
    <aside className="sm:w-64 bg-white shadow-md">
      <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
      <nav className="p-4 space-y-2 text-gray-700">
        <Link to="/admin" className="block px-2 py-2 rounded hover:bg-gray-100 transition">Admin</Link>

        {['Chemist', 'MR', 'Stockist'].map((title) => (
          <div key={title}>
            <button
              onClick={() => toggleDropdown(title)}
              className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-100 rounded transition"
            >
              <span>{title}</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  openDropdown === title ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === title && (
              <div className="ml-4 space-y-1">
                <Link to={`/admin/${title.toLowerCase()}/register`} className="block px-2 py-1 rounded hover:bg-blue-100 transition">Register</Link>
                <Link to={`/admin/${title.toLowerCase()}/activity`} className="block px-2 py-1 rounded hover:bg-blue-100 transition">Activity</Link>
              </div>
            )}
          </div>
        ))}

        <Link to="/profile" className="block px-2 py-2 rounded hover:bg-gray-100 transition">Profile</Link>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-2 py-2 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}
