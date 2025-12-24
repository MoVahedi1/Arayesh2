import React from 'react';
import { Clock, DollarSign, Calendar } from 'lucide-react';
import { Service } from '../types';
import { Button } from '../components/ui/button';

interface ServiceCardProps {
  service: Service;
  onReserve: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onReserve }) => {
  return (
    <div className="glass rounded-xl p-6 card-hover group">
      {/* Service Image Placeholder */}
      <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center border-2 border-dashed border-gray-700 group-hover:border-yellow-500 transition-colors">
        <div className="text-center">
          <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-2" />
          <p className="text-gray-500 text-sm">تصویر خدمت</p>
        </div>
      </div>

      {/* Service Info */}
      <h3 className="text-xl font-bold text-yellow-500 mb-2">{service.name}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{service.description}</p>

      {/* Service Details */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{service.duration} دقیقه</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <DollarSign className="w-4 h-4" />
            <span className="font-semibold">{service.price.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Reserve Button */}
      <Button
        onClick={() => onReserve(service)}
        className="w-full btn-primary glow-hover"
      >
        رزرو نوبت
      </Button>
    </div>
  );
};