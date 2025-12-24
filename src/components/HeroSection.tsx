import React from 'react';
import { Scissors, Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Scissors className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
                باربرشاپ لوکس
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
              تجربه‌ای متفاوت از آرایش مردانه
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              با تیمی از بهترین آرایشگران شهر و تجهیزات مدرن، 
              خدمات حرفه‌ای آرایشی مردانه را در محیطی لوکس و آرامش‌بخش تجربه کنید.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">۴.۹ امتیاز</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">بیش از ۱۰ سال سابقه</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">مرکز شهر</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 flex items-center gap-2">
                رزرو آنلاین نوبت
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3">
                مشاهده خدمات
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Scissors className="w-32 h-32 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};