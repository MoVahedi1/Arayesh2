import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSelectorProps {
  value: string;
  onChange: (time: string) => void;
  error?: string;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({ value, onChange, error }) => {
  const timeSlots = {
    morning: [
      { time: '09:00', label: '۹:۰۰ صبح', available: true },
      { time: '10:00', label: '۱۰:۰۰ صبح', available: true },
      { time: '11:00', label: '۱۱:۰۰ صبح', available: true },
      { time: '12:00', label: '۱۲:۰۰ ظهر', available: false }
    ],
    afternoon: [
      { time: '13:00', label: '۱:۰۰ بعدازظهر', available: true },
      { time: '14:00', label: '۲:۰۰ بعدازظهر', available: true },
      { time: '15:00', label: '۳:۰۰ بعدازظهر', available: true },
      { time: '16:00', label: '۴:۰۰ بعدازظهر', available: true }
    ],
    evening: [
      { time: '17:00', label: '۵:۰۰ عصر', available: true },
      { time: '18:00', label: '۶:۰۰ عصر', available: true },
      { time: '19:00', label: '۷:۰۰ عصر', available: false },
      { time: '20:00', label: '۸:۰۰ عصر', available: false }
    ]
  };

  const handleTimeSelect = (time: string) => {
    onChange(time);
  };

  return (
    <div className="space-y-4">
      {Object.entries(timeSlots).map(([period, slots]) => (
        <div key={period}>
          <h4 className="text-sm font-medium text-gray-400 mb-2">
            {period === 'morning' ? 'صبح' : period === 'afternoon' ? 'بعدازظهر' : 'عصر'}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => (
              <button
                key={slot.time}
                type="button"
                onClick={() => slot.available && handleTimeSelect(slot.time)}
                disabled={!slot.available}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  !slot.available
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : value === slot.time
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{slot.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-800">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-800 rounded"></div>
          <span>موجود</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span>انتخاب شده</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-800 rounded opacity-50"></div>
          <span>پر</span>
        </div>
      </div>
    </div>
  );
};