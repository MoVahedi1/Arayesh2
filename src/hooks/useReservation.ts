import { useState, useEffect } from 'react';

interface Reservation {
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

export const useReservation = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('reservations');
    if (stored) {
      setReservations(JSON.parse(stored));
    }
  }, []);

  const saveReservations = (newReservations: Reservation[]) => {
    setReservations(newReservations);
    localStorage.setItem('reservations', JSON.stringify(newReservations));
  };

  const addReservation = (reservation: Omit<Reservation, 'id' | 'createdAt'>) => {
    const newReservation: Reservation = {
      ...reservation,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    const updatedReservations = [...reservations, newReservation];
    saveReservations(updatedReservations);
    return newReservation;
  };

  const removeReservation = (id: string) => {
    const updatedReservations = reservations.filter(r => r.id !== id);
    saveReservations(updatedReservations);
  };

  return {
    reservations,
    addReservation,
    removeReservation
  };
};