import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { ReservationModal } from './components/ReservationModal';
import { MyReservations } from './components/MyReservations';
import { About } from './components/About';
import { BarberBio } from './components/BarberBio';
import { Gallery } from './components/Gallery';
import { useReservation } from './hooks/useReservation';
import { Service } from './types';

const services: Service[] = [
  {
    id: 1,
    name: 'کات موی کلاسیک',
    description: 'کات موی تمیز و حرفه‌ای با تکنیک‌های روز دنیا و با توجه به فرم صورت شما',
    price: 150000,
    duration: 30,
    category: 'hair'
  },
  {
    id: 2,
    name: 'ریش‌تراشی سلطنتی',
    description: 'ریش‌تراشی با تیغ گرم، حوله داغ و ماساژ صورت برای تجربه‌ای لوکس',
    price: 200000,
    duration: 45,
    category: 'beard'
  },
  {
    id: 3,
    name: 'مدل موی مدرن',
    description: 'مدل‌های روز اروپا با تکنیک‌های پیشرفته و محصولات باکیفیت',
    price: 250000,
    duration: 60,
    category: 'hair'
  },
  {
    id: 4,
    name: 'رنگ و لایت مردانه',
    description: 'رنگ‌های طبیعی و لایت‌های مدرن مخصوص آقایان با بهترین مارک‌ها',
    price: 350000,
    duration: 90,
    category: 'color'
  },
  {
    id: 5,
    name: 'اسپا درمانی صورت',
    description: 'ماساژ صورت، ماسک‌های درمانی و پاکسازی پوست برای آقایان',
    price: 300000,
    duration: 60,
    category: 'spa'
  },
  {
    id: 6,
    name: 'شکل‌دهی ریش و سبیل',
    description: 'اصلاح و فرم‌دهی حرفه‌ای ریش و سبیل با تکنیک‌های تخصصی',
    price: 100000,
    duration: 20,
    category: 'beard'
  },
  {
    id: 7,
    name: 'درمان موی سر',
    description: 'درمان ریزش مو و تقویت موها با بهترین محصولات درمانی',
    price: 400000,
    duration: 45,
    category: 'treatment'
  },
  {
    id: 8,
    name: 'پکیج کامل',
    description: 'شامل تمام خدمات با تخفیف ویژه برای تجربه‌ای کامل',
    price: 800000,
    duration: 120,
    category: 'package'
  }
];

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'about' | 'team' | 'gallery' | 'reservations'>('home');
  const { reservations, addReservation, removeReservation } = useReservation();

  const handleReserve = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleReservationSubmit = (data: any) => {
    if (selectedService) {
      addReservation({
        name: data.name,
        phone: data.phone,
        date: data.date,
        time: data.time,
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        price: selectedService.price
      });
      setShowModal(false);
      setSelectedService(null);
      setActiveSection('reservations');
    }
  };

  const handleCancelReservation = (id: string) => {
    removeReservation(id);
  };

  const renderNavigation = () => (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">B</span>
            </div>
            <span className="text-yellow-500 font-bold text-xl">باربرشاپ لوکس</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {[
              { id: 'home', label: 'خانه' },
              { id: 'services', label: 'خدمات' },
              { id: 'about', label: 'درباره ما' },
              { id: 'team', label: 'تیم' },
              { id: 'gallery', label: 'گالری' },
              { id: 'reservations', label: 'نوبت‌های من' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as any)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-yellow-500'
                    : 'text-gray-300 hover:text-yellow-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'services':
        return <ServicesGrid services={services} onReserve={handleReserve} />;
      case 'about':
        return <About />;
      case 'team':
        return <BarberBio />;
      case 'gallery':
        return <Gallery />;
      case 'reservations':
        return <MyReservations reservations={reservations} onCancel={handleCancelReservation} />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {renderNavigation()}
      {renderContent()}
      
      <ReservationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        service={selectedService}
        onSubmit={handleReservationSubmit}
      />
    </div>
  );
}

export default App;