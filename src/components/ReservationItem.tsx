import React from 'react';
import { Calendar, Clock, DollarSign, Trash2, User } from 'lucide-react';
import { Reservation } from '../types';
import { Button } from '../components/ui/button';

interface ReservationItemProps {
  reservation: Reservation;
  onDelete: (id: string) => void;
}

export const ReservationItem: React.FC<ReservationItemProps> = ({ reservation, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('آیا از حذف این نوبت مطمئن هستید؟')) {
      onDelete(reservation.id);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="glass rounded-lg p-4 border border-gray-800 hover:border-yellow-500 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-semibold text-yellow-500">{reservation.serviceName}</h4>
          <div className="flex items-center gap-1 text-gray-400 mt-1">
            <User className="w-4 h-4" />
            <span className="text-sm">{reservation.name}</span>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDelete}
          className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(reservation.date)}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-300">
          <Clock className="w-4 h-4" />
          <span>ساعت {reservation.time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-yellow-500">
          <DollarSign className="w-4 h-4" />
          <span className="font-semibold">{reservation.price.toLocaleString()} تومان</span>
        </div>
      </div>

      {/* Phone Number */}
      <div className="mt-3 pt-3 border-t border-gray-800">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>تلفن:</span>
          <span>{reservation.phone}</span>
        </div>
      </div>
    </div>
  );
};