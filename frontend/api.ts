import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE
});

// Experience Endpoints
export const getExperiences = () => api.get("/api/experiences");
export const getExperience = (id: string) => api.get(`/api/experiences/${id}`);

// Bookings
export const createBooking = (payload: any) => api.post("/api/bookings", payload);
