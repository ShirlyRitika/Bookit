import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exp, setExp] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");

  useEffect(() => {
    fetch(`http://localhost:5000/api/experiences/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setExp(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading experience details...
      </div>
    );
  }

  if (!exp) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Experience not found.
      </div>
    );
  }

  const handleBookNow = () => {
    if (!date) {
      alert("Please select a date before booking!");
      return;
    }

    navigate("/checkout", {
      state: {
        title: exp.title,
        price: exp.price,
        date,
        time,
        qty,
        total: exp.price * qty,
        image: exp.image,
        location: exp.location,
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <img src={exp.image} alt={exp.title} className="w-full h-80 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{exp.title}</h1>
          <p className="text-gray-600 mb-2">{exp.location}</p>
          <p className="text-gray-700 mb-6">{exp.excerpt}</p>

          <div className="flex gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-3 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Time</label>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option>10:00 AM</option>
                <option>1:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                className="border border-gray-300 rounded-lg px-3 py-2 w-20"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
            </div>
          </div>

          <p className="text-lg text-gray-800 font-semibold mb-4">
            Total: ₹{exp.price * qty}
          </p>

          <button
            onClick={handleBookNow}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
