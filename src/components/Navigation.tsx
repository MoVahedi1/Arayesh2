import React from 'react';
import { Scissors, Home, Users, User, Image } from 'lucide-react';
import { Button } from '../components/ui/button';

type PageType = 'home' | 'about' | 'barber' | 'gallery';

interface NavigationProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home' as PageType, label: 'صفحه اصلی', icon: Home },
    { id: 'about' as PageType, label: 'درباره ما', icon: Users },
    { id: 'barber' as PageType, label: 'آرایشگران', icon: User },
    { id: 'gallery' as PageType, label: 'گالری', icon: Image },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-gray-900 border-b border-gray-800 backdrop-blur-lg bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <Scissors className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-yellow-500">کلاسیک</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => onPageChange(item.id)}
                  className={
                    currentPage === item.id
                      ? 'bg-yellow-500 text-black'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }
                >
                  <Icon className="w-4 h-4 ml-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={(e) => onPageChange(e.target.value as PageType)}
              className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};