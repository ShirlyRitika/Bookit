import React from "react";
import { Bell, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={20} className="text-gray-600" />
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
