import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center py-12 text-gray-600">
        No booking data found.
      </div>
    );
  }

  const handleConfirmPayment = () => {
    navigate(`/result`, {
      state: {
        ...state,
        confirmed: true,
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout Summary</h2>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={state.image}
          alt={state.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{state.title}</h3>
          <p className="text-gray-600 mb-1">📍 {state.location}</p>
          <p className="text-gray-600 mb-1">📅 {state.date}</p>
          <p className="text-gray-600 mb-1">🕒 {state.time}</p>
          <p className="text-gray-600 mb-1">👥 {state.qty} People</p>
          <p className="text-lg font-semibold mt-4 mb-6">
            💰 Total: ₹{state.total}
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleConfirmPayment}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Confirm Payment
            </button>

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
