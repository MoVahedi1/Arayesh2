import React from 'react';
import { Clock, Users } from 'lucide-react';

interface TimeSelectorProps {
  selectedTime: string;
  onTimeChange: (time: string) => void;
  selectedDate: string;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedTime,
  onTimeChange,
  selectedDate
}) => {
  const timeSlots = [
    { time: '09:00', label: '۹:۰۰ صبح', available: true },
    { time: '09:30', label: '۹:۳۰ صبح', available: true },
    { time: '10:00', label: '۱۰:۰۰ صبح', available: true },
    { time: '10:30', label: '۱۰:۳۰ صبح', available: true },
    { time: '11:00', label: '۱۱:۰۰ صبح', available: true },
    { time: '11:30', label: '۱۱:۳۰ صبح', available: true },
    { time: '13:00', label: '۱:۰۰ بعدازظهر', available: true },
    { time: '13:30', label: '۱:۳۰ بعدازظهر', available: true },
    { time: '14:00', label: '۲:۰۰ بعدازظهر', available: true },
    { time: '14:30', label: '۲:۳۰ بعدازظهر', available: true },
    { time: '15:00', label: '۳:۰۰ بعدازظهر', available: true },
    { time: '15:30', label: '۳:۳۰ بعدازظهر', available: true },
    { time: '16:00', label: '۴:۰۰ بعدازظهر', available: true },
    { time: '16:30', label: '۴:۳۰ بعدازظهر', available: true },
    { time: '17:00', label: '۵:۰۰ بعدازظهر', available: true },
    { time: '17:30', label: '۵:۳۰ بعدازظهر', available: true },
    { time: '18:00', label: '۶:۰۰ بعدازظهر', available: true },
    { time: '18:30', label: '۶:۳۰ بعدازظهر', available: true }
  ];

  // Simulate some times being unavailable for demo
  const unavailableTimes = ['12:00', '12:30', '19:00', '19:30'];
  
  const getAvailability = (time: string) => {
    // For demo purposes, make some times unavailable
    if (unavailableTimes.includes(time)) return false;
    
    // Weekend times might be busier
    const date = new Date(selectedDate);
    const isWeekend = date.getDay() === 5 || date.getDay() === 6; // Friday/Saturday
    
    if (isWeekend && time.startsWith('18')) return false;
    
    return true;
  };

  const getAvailabilityColor = (time: string, available: boolean) => {
    if (!available) return 'bg-gray-900 text-gray-600 cursor-not-allowed';
    if (selectedTime === time) return 'bg-yellow-500 text-black font-semibold';
    return 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-yellow-500 border border-gray-700';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-5 h-5 text-yellow-500" />
        <h3 className="text-lg font-semibold text-yellow-500">انتخاب زمان</h3>
      </div>
      
      {/* Time Periods */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">صبح</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots
              .filter(slot => slot.time.startsWith('09') || slot.time.startsWith('10') || slot.time.startsWith('11'))
              .map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => getAvailability(slot.time) && onTimeChange(slot.time)}
                  disabled={!getAvailability(slot.time)}
                  className={`py-2 px-3 rounded-lg text-sm transition-all ${getAvailabilityColor(slot.time, getAvailability(slot.time))}`}
                >
                  {slot.label}
                  {!getAvailability(slot.time) && (
                    <span className="block text-xs">پر</span>
                  )}
                </button>
              ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">بعدازظهر</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots
              .filter(slot => slot.time.startsWith('13') || slot.time.startsWith('14') || slot.time.startsWith('15'))
              .map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => getAvailability(slot.time) && onTimeChange(slot.time)}
                  disabled={!getAvailability(slot.time)}
                  className={`py-2 px-3 rounded-lg text-sm transition-all ${getAvailabilityColor(slot.time, getAvailability(slot.time))}`}
                >
                  {slot.label}
                  {!getAvailability(slot.time) && (
                    <span className="block text-xs">پر</span>
                  )}
                </button>
              ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">عصر</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots
              .filter(slot => slot.time.startsWith('16') || slot.time.startsWith('17') || slot.time.startsWith('18'))
              .map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => getAvailability(slot.time) && onTimeChange(slot.time)}
                  disabled={!getAvailability(slot.time)}
                  className={`py-2 px-3 rounded-lg text-sm transition-all ${getAvailabilityColor(slot.time, getAvailability(slot.time))}`}
                >
                  {slot.label}
                  {!getAvailability(slot.time) && (
                    <span className="block text-xs">پر</span>
                  )}
                </button>
              ))}
          </div>
        </div>
      </div>
      
      {/* Selected Time Display */}
      {selectedTime && (
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-3 text-black">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">زمان انتخاب شده: {selectedTime}</span>
          </div>
        </div>
      )}
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span>انتخاب شده</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-800 border border-gray-700 rounded"></div>
          <span>موجود</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-900 rounded"></div>
          <span>پر</span>
        </div>
      </div>
    </div>
  );
};