import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Context/authContext";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user: any) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-blue-500 p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-white text-xl">User Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-white">Profile </div>
          <button
            onClick={logout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-auto">
        <aside className="w-1/5 bg-gray-800 text-white p-6">
          <ul>
            <li className="py-2 hover:bg-gray-700 rounded">Home</li>
          </ul>
        </aside>

        <main className="w-4/5 p-6 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>

          <div className="mb-4">
            <input
              type="text"
              className="border p-2 w-full rounded"
              placeholder="Search users by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUsers.map((user: any) => (
              <div
                key={user.id}
                className="bg-white p-4 rounded shadow min-h-[150px] flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.location}</p>
                <Link
                  to={`/users/${user.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
