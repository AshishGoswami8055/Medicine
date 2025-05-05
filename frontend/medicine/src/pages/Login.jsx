import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify"; // Make sure to install react-toastify

function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleUserLogin = async (e) => {
    e.preventDefault();

    const apiMap = {
      chemist: "http://localhost:8080/api/chemist/loginChemist",
      mr: "http://localhost:8080/api/mr/loginMR",
      stockist: "http://localhost:8080/api/stockist/loginStockist",
    };

    try {
      const res = await axios.post(apiMap[userType], {
        mobile,
        password,
      });
      console.log(res.data);
      
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("role", userType);
      toast.success(`${userType.toUpperCase()} logged in successfully`);
      navigate(`/${userType}/dashboard`);
    } catch (error) {
      toast.error(error?.response?.data?.errors?.[0]?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md border-t-4 border-green-500">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          User Login
        </h2>
        <form onSubmit={handleUserLogin} className="space-y-5">
        <p className="text-center">Enter registered mobile and password</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              maxLength={10}
              pattern="[0-9]{10}"
              required
              placeholder="e.g. 9876543210"
              onChange={(e) => setMobile(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select User Type
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="">--Select User--</option>
              <option value="chemist">Chemist</option>
              <option value="mr">Medical Representative (MR)</option>
              <option value="stockist">Stockist</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            © 2025 Medicine Management Systems
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
