import React from 'react';
import { Scissors, Crown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo and Title */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                <Scissors className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Crown className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">باربرشاپ لوکس</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            تجربه‌ای متفاوت از آرایش مردانه
          </p>
          
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-semibold">حرفه‌ای • مدرن • لوکس</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            در باربرشاپ لوکس، ما با ترکیب هنر سنتی و تکنیک‌های مدرن، 
            بهترین خدمات آرایشی را برای آقایان ارائه می‌دهیم. 
            از کات موی حرفه‌ای گرفته تا ریش‌تراشی دقیق، هر خدمت با دقت و کیفیت بی‌نظیر انجام می‌شود.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass rounded-lg p-6 card-hover">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scissors className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">تخصص حرفه‌ای</h3>
            <p className="text-gray-400">با سال‌ها تجربه در آرایش مردانه</p>
          </div>
          
          <div className="glass rounded-lg p-6 card-hover">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">کیفیت برتر</h3>
            <p className="text-gray-400">استفاده از بهترین محصولات و تجهیزات</p>
          </div>
          
          <div className="glass rounded-lg p-6 card-hover">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">محیط لوکس</h3>
            <p className="text-gray-400">فضایی آرام و شیک برای تجربه‌ای بی‌نظیر</p>
          </div>
        </div>
      </div>
    </div>
  );
};