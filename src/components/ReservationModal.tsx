import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { DatePicker } from './DatePicker';
import { TimeSelector } from './TimeSelector';
import { Service } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  onSubmit: (data: any) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  service,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  if (!isOpen || !service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date && formData.time) {
      onSubmit(formData);
      setFormData({ name: '', phone: '', date: '', time: '' });
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-yellow-500">رزرو نوبت</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Service Info */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-yellow-500 mb-2">{service.name}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{service.duration} دقیقه</span>
              </div>
              <div className="text-yellow-500 font-semibold">
                {service.price.toLocaleString()} تومان
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">نام و نام خانوادگی</Label>
              <div className="relative">
                <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pr-10 bg-gray-800 border-gray-700 text-white"
                  placeholder="نام کامل خود را وارد کنید"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-300">شماره تلفن</Label>
              <div className="relative">
                <Phone className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pr-10 bg-gray-800 border-gray-700 text-white"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  required
                />
              </div>
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-300 mb-3 block">تاریخ نوبت</Label>
              <DatePicker
                selectedDate={formData.date}
                onDateChange={(date) => setFormData({ ...formData, date })}
                minDate={today}
                maxDate={maxDateStr}
              />
            </div>

            <div>
              <Label className="text-gray-300 mb-3 block">ساعت نوبت</Label>
              <TimeSelector
                selectedTime={formData.time}
                onTimeChange={(time) => setFormData({ ...formData, time })}
                selectedDate={formData.date}
              />
            </div>
          </div>

          {/* Summary */}
          {(formData.name && formData.phone && formData.date && formData.time) && (
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-black">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5" />
                <span className="font-semibold">خلاصه رزرو:</span>
              </div>
              <div className="text-sm space-y-1">
                <p>مشتری: {formData.name}</p>
                <p>تلفن: {formData.phone}</p>
                <p>خدمت: {service.name}</p>
                <p>تاریخ: {new Date(formData.date).toLocaleDateString('fa-IR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
                <p>ساعت: {formData.time}</p>
                <p>هزینه: {service.price.toLocaleString()} تومان</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              لغو
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              disabled={!formData.name || !formData.phone || !formData.date || !formData.time}
            >
              تأیید رزرو
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};