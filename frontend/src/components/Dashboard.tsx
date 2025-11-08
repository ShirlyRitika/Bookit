import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#F8FAFC] h-screen overflow-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white shadow p-4 rounded-xl hover:shadow-lg transition">
          <h3 className="text-gray-500">Total Bookings</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">1,245</p>
        </div>
        <div className="bg-white shadow p-4 rounded-xl hover:shadow-lg transition">
          <h3 className="text-gray-500">Active Customers</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">320</p>
        </div>
        <div className="bg-white shadow p-4 rounded-xl hover:shadow-lg transition">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-3xl font-bold mt-2 text-purple-600">$12,450</p>
        </div>
        <div className="bg-white shadow p-4 rounded-xl hover:shadow-lg transition">
          <h3 className="text-gray-500">Pending</h3>
          <p className="text-3xl font-bold mt-2 text-orange-500">18</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
