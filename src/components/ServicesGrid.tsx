import React from 'react';
import { Service } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  services: Service[];
  onReserve: (service: Service) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onReserve }) => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">خدمات ما</span>
          </h2>
          <p className="text-gray-400 text-lg">
            با بهترین کیفیت و توسط متخصصان حرفه‌ای
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onReserve={onReserve}
            />
          ))}
        </div>
      </div>
    </div>
  );
};