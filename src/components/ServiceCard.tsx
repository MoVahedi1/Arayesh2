import React from 'react';
import { Clock, Star, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onReserve: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onReserve }) => {
  const getEmoji = (category: Service['category']) => {
    switch (category) {
      case 'hair': return '✂️';
      case 'beard': return '🧔';
      case 'color': return '🎨';
      case 'spa': return '💆';
      case 'treatment': return '🌿';
      case 'package': return '🎁';
      default: return '✂️';
    }
  };

  const getCategoryColor = (category: Service['category']) => {
    switch (category) {
      case 'hair': return 'from-blue-600 to-blue-700';
      case 'beard': return 'from-green-600 to-green-700';
      case 'color': return 'from-purple-600 to-purple-700';
      case 'spa': return 'from-cyan-600 to-cyan-700';
      case 'treatment': return 'from-emerald-600 to-emerald-700';
      case 'package': return 'from-yellow-600 to-yellow-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 group">
      <CardHeader className="relative">
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-bl-2xl flex items-center justify-center text-2xl`}>
          {getEmoji(service.category)}
        </div>
        <CardTitle className="text-xl text-yellow-500 pr-20">{service.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-500" />
            <span className="text-gray-300">{service.duration} دقیقه</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-gray-300">۴.۹</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="text-2xl font-bold text-yellow-500">
            {service.price.toLocaleString()}
            <span className="text-sm text-gray-400 mr-1">تومان</span>
          </div>
          
          <Button
            onClick={() => onReserve(service)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold group-hover:scale-105 transition-transform"
          >
            رزرو نوبت
            <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};