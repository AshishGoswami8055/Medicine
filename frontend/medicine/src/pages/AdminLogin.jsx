import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminLogin() {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/admin/loginAdmin", {
                phone: mobile,
                password,
            });
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("role", "admin");
            toast.success("Admin logged in successfully");
            navigate("/admin/dashboard");
        } catch (error) {
            toast.error(error?.response?.data?.errors?.[0]?.msg || "Login failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Panel */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white flex-col justify-center items-center p-10">
                <h1 className="text-4xl font-bold mb-4">Medicine Admin Portal</h1>
                <p className="text-lg text-green-100 text-center px-8">
                    Manage users, chemists, inventory and all medical logistics in one secure place.
                </p>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8 border-t-4 border-green-600">
                    <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
                        Admin Login
                    </h2>
                    <form onSubmit={handleAdminLogin} className="space-y-5">
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
                                placeholder="Enter admin password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
                        >
                            Login as Admin
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-500">© 2025 Medicine Management Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
