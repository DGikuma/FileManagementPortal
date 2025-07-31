"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, rememberMe });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#002A3A] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#002A3A] text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#009FE3]" 
              required 
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#009FE3]" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#009FE3] hover:bg-[#0077B5] text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <input 
            type="checkbox" 
            checked={rememberMe} 
            onChange={() => setRememberMe(!rememberMe)}
          />
          <p className="text-[#009FE3] hover:underline cursor-pointer">Remember Me</p>
        </div>
      </div>
    </div>
  );
}
