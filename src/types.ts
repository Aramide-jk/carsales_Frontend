export interface Car {
  _id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  fuelType: string;
  transmission: string;
  description: string;
  engine: string;
  images: string[];
  condition: string;
  location: string;
  status: "available" | "sold" | "pending";
  createdAt: string;
  updatedAt: string;
  data?: Car;
}

export interface InspectionBooking {
  _id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  carId: string;
  carBrand: string;
  carModel: string;
  carYear: string;
  location: string;
  note: string;
  inspectionDate: string;
  inspectionTime: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

export interface SellRequest {
  _id: string;
  user: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  engine: string;
  description?: string;
  location?: string;
  images: string[];
  features: string[];
  vehicleExteriorColor?: string;
  vehicleInteriorColor?: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  idFront?: string;
  idBack?: string;
  carReg?: string;
  customPaper?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export interface Purchase {
  _id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  carId: string;
  carDetails: string;
  purchaseAmount: number;
  paymentMethod: string;
  transactionId: string;
  status: "pending" | "completed" | "failed";
  purchaseDate: string;
}

export interface CarAPIResponse {
  success: boolean;
  count: number;
  data: Car[];
}

export interface SingleCarAPIResponse {
  success: boolean;
  data: Car;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  role: "admin" | "user";
}
