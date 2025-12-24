import React from 'react';
import { Award, Clock, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-yellow-500">
          درباره آرایشگاه کلاسیک
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  داستان ما
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 leading-relaxed">
                آرایشگاه کلاسیک با بیش از 15 سال سابقه در ارائه خدمات آرایشی مردانه، 
                به عنوان یکی از معتبرترین مراکز آرایشی در شهر شناخته می‌شود. ما با ترکیب 
                تکنیک‌های سنتی و مدرن، تجربه‌ای بی‌نظیر برای مشتریان خود خلق می‌کنیم.
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">مأموریت ما</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 leading-relaxed">
                مأموریت ما ارائه خدمات با کیفیت بالا در محیطی آرام و حرفه‌ای است. 
                ما به هر مشتری به عنوان یک مهمان ویژه نگاه می‌کنیم و تلاش می‌کنیم 
                تجربه‌ای فراموش‌نشدنی برای او رقم بزنیم.
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  دستاوردها
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>بیش از 5000 مشتری راضی</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>برنده جایزه بهترین آرایشگاه مردانه 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>استفاده از محصولات برتر اروپایی</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>تیم متخصص و مجرب</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">ارتباط با ما</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>خیابان ولیعصر، پلاک 123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span>021-88888888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span>info@classicbarber.ir</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span>شنبه تا چهارشنبه: 9:00 - 20:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-center">
            چرا ما را انتخاب کنید؟
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white">تضمین کیفیت</h3>
              <p className="text-gray-400 text-sm">100% رضایت مشتریان</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white">وقت‌شناسی</h3>
              <p className="text-gray-400 text-sm">احترام به وقت شما</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white">محیط آرام</h3>
              <p className="text-gray-400 text-sm">فضایی دلنشین و حرفه‌ای</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};