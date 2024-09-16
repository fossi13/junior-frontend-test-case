import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${id}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching user details");
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <button
        onClick={handleGoBack}
        className="flex  bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600 transition duration-300"
      >
        <IoArrowBack className="mr-2" />
      </button>
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      {user ? (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
        </div>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};

export default UserDetails;
