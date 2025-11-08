
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/experiences")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg font-medium">
        Loading experiences...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <section className="relative bg-gray-900 text-center rounded-b-[2rem] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
            Explore Experiences & Book Slots
          </h1>
          <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
            Find curated trips, select available dates and complete your booking — safe and easy.
          </p>

          <div className="flex justify-center">
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search experiences..."
                className="w-full rounded-full py-3 pl-5 pr-10 outline-none shadow-lg text-gray-700"
              />
              <Search className="absolute right-3 top-3.5 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Popular Experiences
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((exp) => (
            <div
              key={exp._id}
              className="bg-white shadow-lg hover:shadow-2xl transition-all rounded-2xl overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <h3 className="absolute bottom-3 left-4 text-white text-lg font-semibold drop-shadow-md">
                  {exp.title}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">{exp.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500 font-bold text-lg">₹{exp.price}</span>
                  <Link
                    to={`/details/${exp._id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
