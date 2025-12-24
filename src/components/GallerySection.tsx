import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '../components/ui/button';

const galleryImages = [
  { id: 1, category: 'haircut', title: 'مدل کلاسیک' },
  { id: 2, category: 'beard', title: 'ریش‌تراشی سنتی' },
  { id: 3, category: 'color', title: 'رنگ موی طبیعی' },
  { id: 4, category: 'haircut', title: 'مدل مدرن' },
  { id: 5, category: 'beard', title: 'اصلاح ریش' },
  { id: 6, category: 'color', title: 'هایلایت مردانه' },
  { id: 7, category: 'haircut', title: 'مدل فشن' },
  { id: 8, category: 'beard', title: 'ریش‌تراشی با صابون' },
  { id: 9, category: 'shop', title: 'محیط آرایشگاه' },
  { id: 10, category: 'shop', title: 'صندلی ویژه' },
  { id: 11, category: 'shop', title: 'محیط انتظار' },
  { id: 12, category: 'color', title: 'رنگ کامل' },
];

const categories = [
  { id: 'all', label: 'همه' },
  { id: 'haircut', label: 'مدل مو' },
  { id: 'beard', label: 'ریش' },
  { id: 'color', label: 'رنگ' },
  { id: 'shop', label: 'محیط' },
];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-yellow-500">
          گالری تصاویر
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          نمونه‌کارهای تیم ما را مشاهده کنید و کیفیت خدمات ما را ارزیابی نمایید
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-black border-yellow-500'
                    : 'border-gray-700 text-gray-300 hover:bg-gray-800'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-yellow-500 transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-500 rounded"></div>
                    </div>
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        
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
                className="absolute -top-12 right-0 text-white hover:bg-gray-800"
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gray-600 rounded"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                      {galleryImages.find(img => img.id === selectedImage)?.title}
                    </h3>
                    <p className="text-gray-400">
                      نمونه کار از تیم متخصص آرایشگاه کلاسیک
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    رزرو نوبت مشابه
                  </Button>
                  <Button variant="outline" className="border-gray-700 text-gray-300">
                    مشاهده نمونه‌های بیشتر
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16 bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-center">
            کیفیت تضمین شده
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-yellow-500">100%</div>
              <p className="text-gray-300">رضایت مشتریان</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-yellow-500">24/7</div>
              <p className="text-gray-300">پشتیبانی مشتریان</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-yellow-500">A+</div>
              <p className="text-gray-300">کیفیت خدمات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};