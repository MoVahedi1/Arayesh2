export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: 'hair' | 'beard' | 'color' | 'spa' | 'treatment' | 'package';
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  serviceId: number;
  serviceName: string;
  price: number;
  createdAt: string;
}