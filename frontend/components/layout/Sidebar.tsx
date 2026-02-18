"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Users", href: "/users" },
  { name: "Classes", href: "/classes" },
  { name: "Subjects", href: "/subjects" },
  { name: "Announcements", href: "/announcements" },
  { name: "Reports", href: "/reports" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

      <nav className="space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === link.href
                ? "bg-blue-600"
                : "hover:bg-blue-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
