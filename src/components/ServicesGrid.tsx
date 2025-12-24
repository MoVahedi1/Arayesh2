import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Service } from '../types';

interface ServicesGridProps {
  services: Service[];
  onReserve: (service: Service) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onReserve }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            خدمات حرفه‌ای ما
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            با استفاده از بهترین تکنیک‌ها و تجهیزات روز دنیا، خدماتی بی‌نظیر به شما ارائه می‌دهیم
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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