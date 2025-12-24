import { Reservation } from '../types';

const STORAGE_KEY = 'barbershop_reservations';

export const reservationStorage = {
  // Get all reservations
  getReservations(): Reservation[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading reservations:', error);
      return [];
    }
  },

  // Save a new reservation
  saveReservation(reservation: Omit<Reservation, 'id' | 'createdAt'>): Reservation {
    try {
      const reservations = this.getReservations();
      const newReservation: Reservation = {
        ...reservation,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      
      reservations.push(newReservation);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
      
      return newReservation;
    } catch (error) {
      console.error('Error saving reservation:', error);
      throw error;
    }
  },

  // Delete a reservation
  deleteReservation(id: string): boolean {
    try {
      const reservations = this.getReservations();
      const filteredReservations = reservations.filter(r => r.id !== id);
      
      if (filteredReservations.length < reservations.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredReservations));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error deleting reservation:', error);
      return false;
    }
  },

  // Clear all reservations
  clearReservations(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing reservations:', error);
    }
  }
};