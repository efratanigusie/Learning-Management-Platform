"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Users", path: "/admin/users" },
  { name: "Classes", path: "/admin/classes" },
  { name: "Subjects", path: "/admin/subjects" },
  { name: "Announcements", path: "/admin/announcements" },
  { name: "Reports", path: "/admin/reports" },
  { name: "Settings", path: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-[#1e2a47] text-white p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`block p-2 rounded ${
                pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-blue-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
