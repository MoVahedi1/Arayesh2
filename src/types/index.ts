export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  image?: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  serviceId: number;
  serviceName: string;
  date: string;
  time: string;
  price: number;
  duration: number;
  createdAt: string;
}

export interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
}