"use client";

import { Bell, MessageSquare, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome Admin!
      </h1>

      <div className="flex items-center gap-5">
        <MessageSquare className="text-gray-500 cursor-pointer" />
        <Bell className="text-gray-500 cursor-pointer" />
        <Settings className="text-gray-500 cursor-pointer" />

        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </div>
  );
}
