import React from 'react';
import { Award, Star, Calendar, MapPin, Heart, Scissors, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const BarberBio: React.FC = () => {
  const barbers = [
    {
      id: 1,
      name: 'علی رضایی',
      title: 'مدیر ارشد و آرایشگر اصلی',
      experience: '۱۵ سال',
      specialty: 'کات موی کلاسیک و ریش‌تراشی',
      rating: 4.9,
      reviews: 324,
      achievements: ['گواهی بین‌المللی باربرینگ', 'مدرس آکادمی لوکس', 'برنده جایزه بهترین آرایشگر سال']
    },
    {
      id: 2,
      name: 'محمد حسینی',
      title: 'متخصص رنگ و لایت',
      experience: '۱۰ سال',
      specialty: 'رنگ‌های طبیعی و لایت مدرن',
      rating: 4.8,
      reviews: 256,
      achievements: ['مدرک از آکادمی L\'Oréal', 'متخصص رنگ‌های مردانه', 'نویسنده مقالات تخصصی']
    },
    {
      id: 3,
      name: 'امیر اکبری',
      title: 'کارشناس اسپا و درمانی',
      experience: '۸ سال',
      specialty: 'اسپا درمانی و ماساژ صورت',
      rating: 4.9,
      reviews: 189,
      achievements: ['مدرک بین‌المللی اسپا', 'متخصص پوست مردانه', 'تکنسین پیشرفته ماساژ']
    },
    {
      id: 4,
      name: 'رضا محمدی',
      title: 'آرایشگر مدل موی مدرن',
      experience: '۶ سال',
      specialty: 'مدل‌های روز اروپا',
      rating: 4.7,
      reviews: 142,
      achievements: ['دوره تخصصی لندن', 'متخصص فیدینگ', 'طراح مدل مو']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-yellow-500">تیم حرفه‌ای ما</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            با تیمی از بهترین آرایشگران شهر که هر کدام در تخصص خود پیشرو هستند، 
            تجربه‌ای بی‌نظیر از خدمات آرایشی مردانه را برای شما فراهم می‌کنیم
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {barbers.map((barber) => (
            <Card key={barber.id} className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <Scissors className="w-10 h-10 text-black" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-yellow-500">{barber.name}</CardTitle>
                    <p className="text-gray-400 text-sm mt-1">{barber.title}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-300">{barber.experience} سابقه</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-300">{barber.rating}</span>
                        <span className="text-gray-500">({barber.reviews} نظر)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-yellow-500 font-semibold mb-2">تخصص اصلی</h4>
                  <p className="text-gray-300">{barber.specialty}</p>
                </div>
                
                <div>
                  <h4 className="text-yellow-500 font-semibold mb-2">موفقیت‌ها</h4>
                  <ul className="space-y-1">
                    {barber.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition-all">
                    رزرو با {barber.name}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-500">۴+</div>
              <div className="text-gray-400">آرایشگر متخصص</div>
            </div>
            <div>
              <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-500">۵۰+</div>
              <div className="text-gray-400">گواهی بین‌المللی</div>
            </div>
            <div>
              <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-500">۹۹٪</div>
              <div className="text-gray-400">رضایت مشتریان</div>
            </div>
            <div>
              <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-500">۱</div>
              <div className="text-gray-400">شعبه اصلی</div>
            </div>
          </div>
        </div>

        {/* Join Team */}
        <div className="text-center bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            به تیم ما بپیوندید
          </h2>
          <p className="text-gray-300 mb-6">
            اگر شما هم یک آرایشگر حرفه‌ای هستید و به دنبال محیطی پویا برای رشد هستید، 
            با ما تماس بگیرید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition-all">
              ارسال رزومه
            </button>
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-2 px-6 rounded-lg transition-all">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};