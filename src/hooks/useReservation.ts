import { useState, useEffect } from 'react';
import { Reservation } from '../types';
import { reservationStorage } from '../utils/reservationStorage';

export const useReservation = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  // Load reservations from localStorage
  useEffect(() => {
    const loadReservations = () => {
      try {
        const data = reservationStorage.getReservations();
        setReservations(data);
      } catch (error) {
        console.error('Failed to load reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadReservations();
  }, []);

  // Add new reservation
  const addReservation = (reservationData: Omit<Reservation, 'id' | 'createdAt'>) => {
    try {
      const newReservation = reservationStorage.saveReservation(reservationData);
      setReservations(prev => [...prev, newReservation]);
      return newReservation;
    } catch (error) {
      console.error('Failed to add reservation:', error);
      throw error;
    }
  };

  // Remove reservation
  const removeReservation = (id: string) => {
    try {
      const success = reservationStorage.deleteReservation(id);
      if (success) {
        setReservations(prev => prev.filter(r => r.id !== id));
      }
      return success;
    } catch (error) {
      console.error('Failed to remove reservation:', error);
      return false;
    }
  };

  // Clear all reservations
  const clearAllReservations = () => {
    try {
      reservationStorage.clearReservations();
      setReservations([]);
    } catch (error) {
      console.error('Failed to clear reservations:', error);
    }
  };

  return {
    reservations,
    loading,
    addReservation,
    removeReservation,
    clearAllReservations
  };
};