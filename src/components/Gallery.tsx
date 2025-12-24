import React, { useState } from 'react';
import { X, ZoomIn, Play, Image as ImageIcon } from 'lucide-react';
import { Button } from '../components/ui/button';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, type: 'image', title: 'کات موی کلاسیک' },
    { id: 2, type: 'image', title: 'ریش‌تراشی سلطنتی' },
    { id: 3, type: 'image', title: 'مدل موی مدرن' },
    { id: 4, type: 'image', title: 'رنگ و لایت' },
    { id: 5, type: 'image', title: 'اسپا درمانی' },
    { id: 6, type: 'image', title: 'شکل‌دهی ریش' },
    { id: 7, type: 'image', title: 'پکیج کامل' },
    { id: 8, type: 'image', title: 'محیط لوکس' },
    { id: 9, type: 'video', title: 'نمایش خدمات' },
    { id: 10, type: 'image', title: 'تیم حرفه‌ای' },
    { id: 11, type: 'image', title: 'تجهیزات مدرن' },
    { id: 12, type: 'image', title: 'رضایت مشتریان' }
  ];

  const categories = [
    { id: 'all', name: 'همه' },
    { id: 'hair', name: 'مو' },
    { id: 'beard', name: 'ریش' },
    { id: 'spa', name: 'اسپا' },
    { id: 'environment', name: 'محیط' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => {
        if (selectedCategory === 'hair') return [1, 3, 4].includes(item.id);
        if (selectedCategory === 'beard') return [2, 6].includes(item.id);
        if (selectedCategory === 'spa') return [5, 7].includes(item.id);
        if (selectedCategory === 'environment') return [8, 10, 11, 12].includes(item.id);
        return false;
      });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-yellow-500">گالری تصاویر</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            نمونه کارهای ما و محیط لوکس باربرشاپ را مشاهده کنید
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-yellow-500 transition-all"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-square flex items-center justify-center">
                {item.type === 'image' ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-600" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <Play className="w-12 h-12 text-gray-600" />
                  </div>
                )}
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-500"
              >
                <X className="w-6 h-6" />
              </Button>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <ImageIcon className="w-24 h-24 text-gray-600" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-yellow-500">
                    {galleryItems.find(item => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    نمونه کار حرفه‌ای از خدمات باربرشاپ لوکس
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            آماده‌اید تجربه‌ای متفاوت داشته باشید؟
          </h2>
          <p className="text-gray-300 mb-6">
            همین حالا نوبت خود را رزرو کنید و از خدمات حرفه‌ای ما بهره‌مند شوید
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            رزرو آنلاین نوبت
          </Button>
        </div>
      </div>
    </div>
  );
};