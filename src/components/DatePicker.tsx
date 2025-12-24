import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar } from 'lucide-react';
import { format, addDays, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday, isBefore, isAfter } from 'date-fns';
import { faIR } from 'date-fns/locale';

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  error?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, error }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const today = new Date();
  const maxDate = addDays(today, 30); // 30 days from today

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const quickDates = [
    { label: 'امروز', date: today },
    { label: 'فردا', date: addDays(today, 1) },
    { label: '۳ روز دیگر', date: addDays(today, 3) },
    { label: 'یک هفته', date: addDays(today, 7) }
  ];

  const handleDateSelect = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    onChange(dateStr);
    setShowCalendar(false);
  };

  const handleQuickDate = (date: Date) => {
    handleDateSelect(date);
  };

  const isDateSelectable = (date: Date) => {
    return !isBefore(date, today) && !isAfter(date, maxDate);
  };

  const getDayClass = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const isSelected = value === dateStr;
    const isSelectable = isDateSelectable(date);
    const isTodayDate = isToday(date);

    let classes = 'w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all cursor-pointer ';

    if (!isSelectable) {
      classes += 'text-gray-600 cursor-not-allowed ';
    } else if (isSelected) {
      classes += 'bg-yellow-500 text-black ';
    } else if (isTodayDate) {
      classes += 'bg-gray-800 text-yellow-500 border border-yellow-500 ';
    } else {
      classes += 'text-gray-300 hover:bg-gray-800 ';
    }

    return classes;
  };

  const selectedDateDisplay = value ? 
    format(new Date(value), 'EEEE d MMMM yyyy', { locale: faIR }) : 
    'تاریخ را انتخاب کنید';

  return (
    <div className="space-y-3">
      {/* Quick Date Buttons */}
      <div className="grid grid-cols-2 gap-2">
        {quickDates.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => handleQuickDate(item.date)}
            className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Date Input */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowCalendar(!showCalendar)}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-right flex items-center justify-between transition-colors ${
            error ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <span className={value ? 'text-white' : 'text-gray-400'}>
            {selectedDateDisplay}
          </span>
          <Calendar className="w-5 h-5 text-gray-400" />
        </button>

        {/* Calendar */}
        {showCalendar && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-800 rounded-lg p-4 z-10 animate-scale-in">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <h4 className="text-lg font-semibold text-yellow-500">
                {format(currentMonth, 'MMMM yyyy', { locale: faIR })}
              </h4>
              
              <button
                type="button"
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'].map((day) => (
                <div key={day} className="text-center text-xs text-gray-500 font-medium py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1">
              {monthDays.map((date) => (
                <button
                  key={date.toString()}
                  type="button"
                  onClick={() => isDateSelectable(date) && handleDateSelect(date)}
                  disabled={!isDateSelectable(date)}
                  className={getDayClass(date)}
                >
                  {format(date, 'd')}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};