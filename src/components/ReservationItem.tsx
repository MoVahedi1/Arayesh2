import React from 'react';
import { Calendar, Clock, User, Trash2, Scissors } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Reservation } from '../types';

interface ReservationItemProps {
  reservation: Reservation;
  onCancel: (id: string) => void;
}

export const ReservationItem: React.FC<ReservationItemProps> = ({ reservation, onCancel }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('fa-IR', options);
  };

  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <Scissors className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-yellow-500">{reservation.serviceName}</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">{reservation.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">{formatDate(reservation.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">ساعت {reservation.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">تلفن:</span>
                <span className="text-gray-300">{reservation.phone}</span>
              </div>
            </div>
            
            <div className="pt-3 border-t border-gray-800">
              <span className="text-yellow-500 font-semibold">
                {reservation.price.toLocaleString()} تومان
              </span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onCancel(reservation.id)}
            className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};