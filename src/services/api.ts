// services/api.ts
import axios from "axios";
import type {
  Car,
  CarAPIResponse,
  InspectionBooking,
  Purchase,
  User,
} from "../types";

// Environment-based API URL
const base =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_LOCAL_URL || "http://localhost:5000"
    : import.meta.env.VITE_BACKEND_URL ||
      "https://carsalesbackend-production.up.railway.app";



const api = axios.create({
  baseURL: `${base}/api`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  timeout: 30000,
});

// Request interceptor - Add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error cases
    if (error.response) {
      const { status } = error.response;

      // Unauthorized - clear token and redirect to login
      if (status === 401) {
        localStorage.removeItem("token");
        // Optional: Trigger a redirect or state update
        // window.location.href = '/login';
      }

      // Forbidden
      if (status === 403) {
        console.error("Access forbidden:", error.response.data.message);
      }

      // Server error
      if (status >= 500) {
        console.error("Server error:", error.response.data.message);
      }
    } else if (error.request) {
      // Network error
      console.error("Network error: Unable to reach the server");
    }

    return Promise.reject(error);
  }
);

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
// export const getCars = async (): Promise<Car[]> => {
//   const res = await api.get<CarAPIResponse>("/cars");
//   return res.data.data;
// };

export const getCars = async (page = 1, limit = 16): Promise<CarAPIResponse> => {
  const res = await api.get<CarAPIResponse>(`/cars?page=${page}&limit=${limit}`);
  return res.data;
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

// const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
// const api = axios.create({
//   baseURL: `${base}/api`,
//   headers: { "Content-Type": "application/json" },
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export interface AuthResponse {
//   success: boolean;
//   token: string;
//   user: User;
// }

// // ================= AUTH =================
// export const signUp = async (data: {
//   name: string;
//   email: string;
//   password: string;
// }): Promise<AuthResponse> => {
//   const res = await api.post<AuthResponse>("/auth/register", data);
//   return res.data;
// };

// export const signIn = async (data: {
//   email: string;
//   password: string;
// }): Promise<AuthResponse> => {
//   const res = await api.post<AuthResponse>("/auth/login", data);
//   return res.data;
// };

// export const signOut = async (): Promise<{ message: string }> => {
//   const res = await api.post<{ message: string }>("/auth/logout");
//   return res.data;
// };

// export const getProfile = async (): Promise<User> => {
//   const res = await api.get<{ data: User }>("/auth/profile");
//   return res.data.data;
// };

// // ================= CARS =================
// export const getCars = async (): Promise<Car[]> => {
//   const res = await api.get<CarAPIResponse>("/cars");
//   return res.data.data;
// };

// export const getSoldCars = async (): Promise<Car[]> => {
//   const res = await api.get<CarAPIResponse>("/sold");
//   return res.data.data;
// };

// export const getCarById = async (id: string): Promise<Car> => {
//   const res = await api.get<{ data: Car }>(`/cars/${id}`);
//   return res.data.data;
// };

// export const createCar = async (carData: FormData): Promise<Car> => {
//   const res = await api.post<{ data: Car }>("/cars", carData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
//   return res.data.data;
// };

// export const updateCar = async (
//   id: string,
//   carData: FormData
// ): Promise<Car> => {
//   const res = await api.patch<{ data: Car }>(`/cars/${id}`, carData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
//   return res.data.data;
// };

// export const deleteCar = async (id: string): Promise<{ message: string }> => {
//   const res = await api.delete<{ message: string }>(`/cars/${id}`);
//   return res.data;
// };

// // ================= INSPECTIONS =================
// export const getInspections = async (): Promise<InspectionBooking[]> => {
//   const res = await api.get<{ data: InspectionBooking[] }>("/inspections");
//   return res.data.data;
// };

// export const updateInspectionStatus = async (
//   id: string,
//   status: InspectionBooking["status"]
// ): Promise<InspectionBooking> => {
//   const res = await api.patch<{ data: InspectionBooking }>(
//     `/inspections/${id}/status`,
//     { status }
//   );
//   return res.data.data;
// };

// // ================= SELL REQUESTS =================
// export const createSellRequest = async (
//   sellRequestData: FormData
// ): Promise<any> => {
//   const res = await api.post<{ data: any }>("/sell-requests", sellRequestData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
//   return res.data.data;
// };

// export const getSellRequests = async (): Promise<any[]> => {
//   const res = await api.get<{ data: any[] }>("/sell-requests");
//   return res.data.data;
// };

// export const updateSellRequestStatus = async (
//   id: string,
//   status: "pending" | "approved" | "rejected"
// ): Promise<{ message: string }> => {
//   const res = await api.patch<{ message: string }>(`/sell-requests/${id}`, {
//     status,
//   });
//   return res.data;
// };

// // ================= PURCHASES =================
// export const getPurchases = async (): Promise<Purchase[]> => {
//   const res = await api.get<{ data: Purchase[] }>("/purchases");
//   return res.data.data;
// };

// export const updatePurchaseStatus = async (
//   id: string,
//   status: Purchase["status"]
// ): Promise<Purchase> => {
//   const res = await api.patch<{ data: Purchase }>(`/purchases/${id}/status`, {
//     status,
//   });
//   return res.data.data;
// };

// export default api;
