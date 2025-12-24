import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { MyReservations } from './components/MyReservations';
import { ReservationModal } from './components/ReservationModal';
import { useReservation } from './hooks/useReservation';
import { Service } from './types';

const services: Service[] = [
  {
    id: 1,
    name: 'کات موی حرفه‌ای',
    description: 'کات موی مدرن و حرفه‌ای با تکنیک‌های روز دنیا، متناسب با فرم صورت و سلیقه شما',
    price: 150000,
    duration: 45
  },
  {
    id: 2,
    name: 'ریش‌تراشی سنتی',
    description: 'ریش‌تراشی با تیغ و صابون سنتی همراه با ماساژ صورت و حوله گرم',
    price: 120000,
    duration: 30
  },
  {
    id: 3,
    name: 'رنگ مو و لایت',
    description: 'رنگ موی حرفه‌ای با بهترین مارک‌های جهانی و لایت‌های مدرن',
    price: 250000,
    duration: 90
  },
  {
    id: 4,
    name: 'ماساژ صورت',
    description: 'ماساژ صورت با روغن‌های طبیعی برای جوانسازی پوست و رفع خستگی',
    price: 80000,
    duration: 20
  },
  {
    id: 5,
    name: 'شستشو و حالت دادن',
    description: 'شستشوی کامل مو با شامپوهای حرفه‌ای و حالت دادن با محصولات برتر',
    price: 100000,
    duration: 25
  },
  {
    id: 6,
    name: 'اصلاح ابرو و صورت',
    description: 'اصلاح دقیق ابرو با نخ و تمیزکاری کامل صورت با تکنیک‌های مدرن',
    price: 60000,
    duration: 15
  }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { addReservation } = useReservation();

  const handleReserve = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleReservationSubmit = (formData: any) => {
    if (selectedService) {
      addReservation({
        ...formData,
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        price: selectedService.price,
        duration: selectedService.duration
      });
      setIsModalOpen(false);
      setSelectedService(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-black" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">ب</span>
              </div>
              <span className="text-xl font-bold gradient-text">باربرشاپ لوکس</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">رزرو آنلاین</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesGrid services={services} onReserve={handleReserve} />
        <MyReservations />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© ۱۴۰۳ باربرشاپ لوکس - تمام حقوق محفوظ است</p>
          <p className="text-gray-500 text-sm">با ❤️ ساخته شده برای آقایان شیک‌پوش</p>
        </div>
      </footer>

      {/* Reservation Modal */}
      {selectedService && (
        <ReservationModal
          isOpen={isModalOpen}
          service={selectedService}
          onClose={handleCloseModal}
          onSubmit={handleReservationSubmit}
        />
      )}
    </div>
  );
}

export default App;