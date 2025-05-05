// import React, { useState } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   BarChart, Bar, Legend,
// } from 'recharts';

// const userStats = [
//   { name: 'Jan', Chemists: 30, MRs: 20, Stockists: 10 },
//   { name: 'Feb', Chemists: 40, MRs: 25, Stockists: 15 },
//   { name: 'Mar', Chemists: 45, MRs: 30, Stockists: 20 },
//   { name: 'Apr', Chemists: 50, MRs: 40, Stockists: 25 },
// ];

// export default function AdminDashboard() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const toggleDropdown = (item) => {
//     setOpenDropdown(openDropdown === item ? null : item);
//   };

//   return (
//     <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100 transition-all">
//       {/* Sidebar */}
//       <aside className="sm:w-64 bg-white shadow-md">
//         <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
//         <nav className="p-4 space-y-2 text-gray-700">
//           {['Chemist', 'MR', 'Stockist'].map((title) => (
//             <div key={title}>
//               <button
//                 onClick={() => toggleDropdown(title)}
//                 className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-100 rounded transition"
//               >
//                 <span>{title}</span>
//                 <svg
//                   className={`w-4 h-4 transform transition-transform ${
//                     openDropdown === title ? 'rotate-180' : ''
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {openDropdown === title && (
//                 <div className="ml-4 space-y-1">
//                   <a href="#" className="block px-2 py-1 rounded hover:bg-blue-100 transition">Register</a>
//                   <a href="#" className="block px-2 py-1 rounded hover:bg-blue-100 transition">Activity</a>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h2 className="text-2xl font-semibold mb-4">Welcome Admin</h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Line Chart */}
//           <div className="bg-white p-4 rounded-lg shadow transition hover:shadow-lg duration-300">
//             <h3 className="text-lg font-semibold mb-2">User Registrations Over Time</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={userStats}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="Chemists" stroke="#10b981" strokeWidth={2} />
//                 <Line type="monotone" dataKey="MRs" stroke="#3b82f6" strokeWidth={2} />
//                 <Line type="monotone" dataKey="Stockists" stroke="#f59e0b" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Bar Chart */}
//           <div className="bg-white p-4 rounded-lg shadow transition hover:shadow-lg duration-300">
//             <h3 className="text-lg font-semibold mb-2">Monthly Activity</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={userStats}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="Chemists" fill="#10b981" />
//                 <Bar dataKey="MRs" fill="#3b82f6" />
//                 <Bar dataKey="Stockists" fill="#f59e0b" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
} from 'recharts';
import Sidebar from '../component/Sidebar';

const userStats = [
  { name: 'Jan', Chemists: 30, MRs: 20, Stockists: 10 },
  { name: 'Feb', Chemists: 40, MRs: 25, Stockists: 15 },
  { name: 'Mar', Chemists: 45, MRs: 30, Stockists: 20 },
  { name: 'Apr', Chemists: 50, MRs: 40, Stockists: 25 },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100 transition-all">
      <Sidebar />

      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Welcome Admin</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white p-4 rounded-lg shadow transition hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold mb-2">User Registrations Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Chemists" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="MRs" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="Stockists" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-lg shadow transition hover:shadow-lg duration-300">
            <h3 className="text-lg font-semibold mb-2">Monthly Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Chemists" fill="#10b981" />
                <Bar dataKey="MRs" fill="#3b82f6" />
                <Bar dataKey="Stockists" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
