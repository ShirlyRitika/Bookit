
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const confirmed = state?.confirmed;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      {confirmed ? (
        <>
          <CheckCircle className="text-green-600" size={100} />
          <h1 className="text-3xl font-bold mt-4 text-green-700">
            Payment Confirmed!
          </h1>
          <p className="text-gray-600 mt-2">
            Your booking for <b>{state.title}</b> is successfully confirmed.
          </p>
        </>
      ) : (
        <>
          <XCircle className="text-red-500" size={100} />
          <h1 className="text-3xl font-bold mt-4 text-red-600">
            Payment Pending
          </h1>
          <p className="text-gray-600 mt-2">
            You haven’t confirmed your payment yet.
          </p>
        </>
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
}
