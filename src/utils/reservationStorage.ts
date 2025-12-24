import { Reservation } from '../types';

const STORAGE_KEY = 'barbershop_reservations';

export const reservationStorage = {
  getReservations(): Reservation[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading reservations:', error);
      return [];
    }
  },

  saveReservations(reservations: Reservation[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    } catch (error) {
      console.error('Error saving reservations:', error);
    }
  },

  addReservation(reservation: Omit<Reservation, 'id' | 'createdAt'>): Reservation {
    const reservations = this.getReservations();
    const newReservation: Reservation = {
      ...reservation,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    reservations.push(newReservation);
    this.saveReservations(reservations);
    return newReservation;
  },

  removeReservation(id: string): void {
    const reservations = this.getReservations();
    const filtered = reservations.filter(r => r.id !== id);
    this.saveReservations(filtered);
  }
};