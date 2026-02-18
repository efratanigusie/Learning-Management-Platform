"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
     console.log("Login clicked");
    try {
      setLoading(true);

      const res = await loginUser(email, password);
      console.log("Response:", res.data);

      const { token, user } = res.data;

      if (!token || !user?.role) {
        alert("Invalid response from server");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      // Redirect
      router.push(`/${user.role}`);

    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2f3e63] to-[#1e2a47]">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-[350px] flex flex-col gap-5"
      >

        <h1 className="text-white text-3xl font-bold text-center mb-8">
          Learning Management System
        </h1>

        <input
          type="email"
          placeholder="Email address"
          className="p-4 rounded-md bg-gray-200 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 rounded-md bg-gray-200 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-4 py-4 rounded-md text-white font-semibold 
                     bg-gradient-to-r from-[#1b253f] to-[#0f172a] 
                     hover:opacity-90 transition"
        >
          {loading ? "Signing in..." : "SIGN IN"}
        </button>

      </form>
    </div>
  );
}
