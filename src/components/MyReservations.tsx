import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { useReservation } from '../hooks/useReservation';
import { ReservationItem } from './ReservationItem';

export const MyReservations: React.FC = () => {
  const { reservations, loading, removeReservation } = useReservation();

  if (loading) {
    return (
      <div className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="loading-dots mx-auto">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="text-gray-400 mt-4">در حال بارگذاری نوبت‌ها...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">نوبت‌های من</span>
          </h2>
          <p className="text-gray-400 text-lg">
            مدیریت و مشاهده نوبت‌های رزرو شده
          </p>
        </div>

        {/* Reservations List */}
        {reservations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">هیچ نوبتی ثبت نشده</h3>
            <p className="text-gray-500 mb-6">
              هنوز هیچ نوبتی رزرو نکرده‌اید. برای رزرو نوبت، یکی از خدمات را انتخاب کنید.
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-500">
              <CheckCircle className="w-5 h-5" />
              <span>آماده‌اید تا نوبت خود را رزرو کنید؟</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservations.map((reservation) => (
              <ReservationItem
                key={reservation.id}
                reservation={reservation}
                onDelete={removeReservation}
              />
            ))}
          </div>
        )}

        {/* Summary */}
        {reservations.length > 0 && (
          <div className="mt-12 text-center">
            <div className="glass rounded-lg p-6 inline-block">
              <p className="text-gray-300 mb-2">
                تعداد نوبت‌های ثبت شده: <span className="text-yellow-500 font-bold">{reservations.length}</span>
              </p>
              <p className="text-gray-400 text-sm">
                مجموع هزینه: <span className="text-yellow-500 font-semibold">
                  {reservations.reduce((sum, r) => sum + r.price, 0).toLocaleString()} تومان
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};