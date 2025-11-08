
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container-max flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img
  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=80&q=80"
  alt="logo"
  className="w-8 h-8 rounded-full"
/>

          <Link to="/" className="font-semibold text-lg text-gray-900">HD Booking</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive})=> isActive ? "text-blue-600 font-medium":"text-gray-600 hover:text-gray-900"}>
            Home
          </NavLink>
          <NavLink to="/checkout" className={({isActive})=> isActive ? "text-blue-600 font-medium":"text-gray-600 hover:text-gray-900"}>
            Checkout
          </NavLink>
          <NavLink to="/result" className={({isActive})=> isActive ? "text-blue-600 font-medium":"text-gray-600 hover:text-gray-900"}>
            Result
          </NavLink>
        </nav>

        <div className="md:hidden">
          {/* small placeholder for mobile (you can add hamburger later) */}
          <button aria-label="menu" className="p-2 rounded bg-gray-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
