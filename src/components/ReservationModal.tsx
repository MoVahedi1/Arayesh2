import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Check } from 'lucide-react';
import { Service } from '../types';
import { DatePicker } from './DatePicker';
import { TimeSelector } from './TimeSelector';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface ReservationModalProps {
  isOpen: boolean;
  service: Service;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  service,
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'نام خود را وارد کنید';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'شماره تلفن را وارد کنید';
    } else if (!/^09\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'شماره تلفن معتبر نیست';
    }

    if (!formData.date) {
      newErrors.date = 'تاریخ را انتخاب کنید';
    }

    if (!formData.time) {
      newErrors.time = 'زمان را انتخاب کنید';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500">رزرو نوبت</h3>
              <p className="text-gray-400 mt-1">{service.name}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Service Info */}
          <div className="flex items-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              <Clock className="w-4 h-4" />
              <span>{service.duration} دقیقه</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <span className="font-semibold">{service.price.toLocaleString()} تومان</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Input */}
          <div>
            <Label htmlFor="name" className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4" />
              نام و نام خانوادگی
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="نام کامل خود را وارد کنید"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4" />
              شماره تلفن
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Date Picker */}
          <div>
            <Label className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              انتخاب تاریخ
            </Label>
            <DatePicker
              value={formData.date}
              onChange={(date) => handleInputChange('date', date)}
              error={errors.date}
            />
          </div>

          {/* Time Selector */}
          <div>
            <Label className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4" />
              انتخاب زمان
            </Label>
            <TimeSelector
              value={formData.time}
              onChange={(time) => handleInputChange('time', time)}
              error={errors.time}
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 btn-primary"
            >
              <Check className="w-4 h-4 ml-2" />
              تایید رزرو
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              انصراف
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};