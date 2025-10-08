// services/api.ts
import axios from "axios";
import type {
  Car,
  CarAPIResponse,
  InspectionBooking,
  Purchase,
  User,
} from "../types";

// --- Setup Axios instance ---
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// --- Attach token automatically if available ---
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// --- Types for Auth response ---
export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

// ================= AUTH =================
export const signUp = async (data: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await api.post<AuthResponse>("/auth/register", data);
  return res.data;
};

export const signIn = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await api.post<AuthResponse>("/auth/login", data);
  return res.data;
};

export const signOut = async (): Promise<{ message: string }> => {
  const res = await api.post<{ message: string }>("/auth/logout");
  return res.data;
};

export const getProfile = async (): Promise<User> => {
  const res = await api.get<{ data: User }>("/auth/profile");
  return res.data.data;
};

// ================= CARS =================
export const getCars = async (): Promise<Car[]> => {
  const res = await api.get<CarAPIResponse>("/cars");
  return res.data.data;
};

export const getSoldCars = async (): Promise<Car[]> => {
  const res = await api.get<CarAPIResponse>("/sold");
  return res.data.data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const res = await api.get<{ data: Car }>(`/cars/${id}`);
  return res.data.data;
};

export const createCar = async (carData: FormData): Promise<Car> => {
  const res = await api.post<{ data: Car }>("/cars", carData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

export const updateCar = async (
  id: string,
  carData: FormData
): Promise<Car> => {
  const res = await api.patch<{ data: Car }>(`/cars/${id}`, carData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

export const deleteCar = async (id: string): Promise<{ message: string }> => {
  const res = await api.delete<{ message: string }>(`/cars/${id}`);
  return res.data;
};

// ================= INSPECTIONS =================
export const getInspections = async (): Promise<InspectionBooking[]> => {
  const res = await api.get<{ data: InspectionBooking[] }>("/inspections");
  return res.data.data;
};

export const updateInspectionStatus = async (
  id: string,
  status: InspectionBooking["status"]
): Promise<InspectionBooking> => {
  const res = await api.patch<{ data: InspectionBooking }>(
    `/inspections/${id}/status`,
    { status }
  );
  return res.data.data;
};

// ================= SELL REQUESTS =================
export const createSellRequest = async (
  sellRequestData: FormData
): Promise<any> => {
  const res = await api.post<{ data: any }>("/sell-requests", sellRequestData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

export const getSellRequests = async (): Promise<any[]> => {
  const res = await api.get<{ data: any[] }>("/sell-requests");
  return res.data.data;
};

export const updateSellRequestStatus = async (
  id: string,
  status: "pending" | "approved" | "rejected"
): Promise<{ message: string }> => {
  const res = await api.patch<{ message: string }>(`/sell-requests/${id}`, {
    status,
  });
  return res.data;
};

// ================= PURCHASES =================
export const getPurchases = async (): Promise<Purchase[]> => {
  const res = await api.get<{ data: Purchase[] }>("/purchases");
  return res.data.data;
};

export const updatePurchaseStatus = async (
  id: string,
  status: Purchase["status"]
): Promise<Purchase> => {
  const res = await api.patch<{ data: Purchase }>(`/purchases/${id}/status`, {
    status,
  });
  return res.data.data;
};

export default api;
