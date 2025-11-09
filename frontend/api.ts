import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const api = axios.create({
  baseURL: API_BASE
});

// Experience Endpoints
export const getExperiences = () => api.get("/api/experiences");
export const getExperience = (id: string) => api.get(`/api/experiences/${id}`);

// Bookings
export const createBooking = (payload: any) => api.post("/api/bookings", payload);

// Promo
export const validatePromo = (code: string) => api.post("/api/promo/validate", { code });
