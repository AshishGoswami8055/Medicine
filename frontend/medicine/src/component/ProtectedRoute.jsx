import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        setIsValid(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:8080/api/auth/verify-token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("✅ Token verified:", res.data);
        setIsValid(true);
      } catch (error) {
        console.error("❌ Token verification failed", error);
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  if (loading) return <div>Loading...</div>;

  return isValid ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
