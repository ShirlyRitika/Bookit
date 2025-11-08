import React from "react";
import { Home, Calendar, User, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#0D1B2A] text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">HD Booking</h1>
      <nav className="flex flex-col gap-6">
        <a className="flex items-center gap-3 hover:bg-[#1B263B] p-2 rounded-lg transition">
          <Home size={20} /> Dashboard
        </a>
        <a className="flex items-center gap-3 hover:bg-[#1B263B] p-2 rounded-lg transition">
          <Calendar size={20} /> Bookings
        </a>
        <a className="flex items-center gap-3 hover:bg-[#1B263B] p-2 rounded-lg transition">
          <User size={20} /> Customers
        </a>
        <a className="flex items-center gap-3 hover:bg-[#1B263B] p-2 rounded-lg transition">
          <Settings size={20} /> Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
