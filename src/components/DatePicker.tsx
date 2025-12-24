import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  minDate: string;
  maxDate: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  minDate,
  maxDate
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const today = new Date();
  const maxDateObj = new Date(maxDate);
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };
  
  const isDateSelectable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date >= today && date <= maxDateObj;
  };
  
  const isDateSelected = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return formatDateForInput(date) === selectedDate;
  };
  
  const isToday = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return formatDateForInput(date) === formatDateForInput(today);
  };
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  const handleDateClick = (day: number) => {
    if (isDateSelectable(day)) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      onDateChange(formatDateForInput(date));
    }
  };
  
  const handleQuickSelect = (days: number) => {
    const date = new Date(today);
    date.setDate(date.getDate() + days);
    onDateChange(formatDateForInput(date));
    setCurrentMonth(new Date(date));
  };
  
  const getDayName = (dayIndex: number) => {
    const days = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
    return days[dayIndex];
  };
  
  const getMonthName = (date: Date) => {
    const months = [
      'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
      'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];
    return months[date.getMonth()];
  };
  
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
  const days = [];
  
  // Add empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  return (
    <div className="space-y-4">
      {/* Quick Select Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuickSelect(0)}
          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
        >
          امروز
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuickSelect(1)}
          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
        >
          فردا
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuickSelect(3)}
          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
        >
          ۳ روز دیگر
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuickSelect(7)}
          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
        >
          هفته بعد
        </Button>
      </div>
      
      {/* Calendar */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevMonth}
            className="text-gray-400 hover:text-yellow-500"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-500">
              {getMonthName(currentMonth)} {currentMonth.getFullYear()}
            </h3>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextMonth}
            className="text-gray-400 hover:text-yellow-500"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {[0, 1, 2, 3, 4, 5, 6].map((day) => (
            <div key={day} className="text-center text-xs text-gray-400 font-semibold">
              {getDayName(day)}
            </div>
          ))}
        </div>
        
        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div key={index} className="aspect-square">
              {day ? (
                <button
                  onClick={() => handleDateClick(day)}
                  disabled={!isDateSelectable(day)}
                  className={`w-full h-full rounded-lg flex items-center justify-center text-sm transition-all ${
                    isDateSelected(day)
                      ? 'bg-yellow-500 text-black font-bold'
                      : isToday(day)
                      ? 'bg-gray-700 text-yellow-500 font-semibold border border-yellow-500'
                      : isDateSelectable(day)
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-yellow-500'
                      : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  {day}
                  {isDateSelected(day) && (
                    <Check className="w-3 h-3 mr-1" />
                  )}
                </button>
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Selected Date Display */}
      {selectedDate && (
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-3 text-black">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">
              {new Date(selectedDate).toLocaleDateString('fa-IR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
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
          <div className="w-3 h-3 bg-gray-700 border border-yellow-500 rounded"></div>
          <span>امروز</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-700 rounded"></div>
          <span>قابل انتخاب</span>
        </div>
      </div>
    </div>
  );
};