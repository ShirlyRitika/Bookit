import axios from "axios";

// Use .env value if present, otherwise fallback to localhost:5000
const API_BASE = "https://bookit-backend-clmg.onrender.com/"

export const api = axios.create({
  baseURL: API_BASE,
});

// Experience Endpoints
export const getExperiences = () => api.get("/experiences");
export const getExperience = (id: string) => api.get(`/experiences/${id}`);

// Bookings
export const createBooking = (payload: any) => api.post("/bookings", payload);

// Promo
export const validatePromo = (code: string) =>
  api.post("/promo/validate", { code });
