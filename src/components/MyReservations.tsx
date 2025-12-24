import React from 'react';
import { ReservationItem } from './ReservationItem';
import { Reservation } from '../types';

interface MyReservationsProps {
  reservations: Reservation[];
  onCancel: (id: string) => void;
}

export const MyReservations: React.FC<MyReservationsProps> = ({ reservations, onCancel }) => {
  if (reservations.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">نوبت‌های من</h2>
          <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
            <p className="text-gray-400 text-lg">هنوز نوبتی رزرو نکرده‌اید</p>
            <p className="text-gray-500 mt-2">برای رزرو نوبت، از لیست خدمات انتخاب کنید</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-yellow-500">نوبت‌های من</h2>
          <p className="text-gray-300 mt-2">شما {reservations.length} نوبت رزرو کرده‌اید</p>
        </div>
        
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <ReservationItem
              key={reservation.id}
              reservation={reservation}
              onCancel={onCancel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};