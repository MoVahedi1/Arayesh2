import React from 'react';
import { Shield, Award, Clock, MapPin, Phone, Mail, Star, Users, Scissors } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'تضمین کیفیت',
      description: 'استفاده از بهترین مواد اولیه و تجهیزات روز دنیا'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'متخصصان حرفه‌ای',
      description: 'آرایشگران با سابقه و دوره‌دیده از بهترین آکادمی‌ها'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'مدیریت زمان',
      description: 'حفظ وقت ارزشمند شما با سیستم رزرو آنلاین'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'تجربه مشتری',
      description: 'بیش از ۱۰ سال سابقه درخشان در خدمت‌رسانی'
    }
  ];

  const stats = [
    { number: '۱۰+', label: 'سال سابقه' },
    { number: '۵۰۰۰+', label: 'مشتری راضی' },
    { number: '۵۰+', label: 'خدمت روزانه' },
    { number: '۹۸٪', label: 'رضایت مشتری' }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-yellow-500">درباره باربرشاپ لوکس</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ما در باربرشاپ لوکس با ترکیب هنر، تخصص و تجهیزات مدرن، تجربه‌ای بی‌نظیر از آرایش مردانه را برای شما فراهم می‌کنیم. 
            افتخار می‌کنیم که به عنوان یکی از معتبرترین مراکز آرایشی مردانه در شهر، خدمات باکیفیتی را به شما عزیزان ارائه دهیم.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg text-yellow-500">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-500 text-center">اطلاعات تماس</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">۰۲۱-۸۸۰۰۰۰۰۰</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">info@luxbarbershop.ir</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-gray-300">شنبه تا چهارشنبه: ۹:۰۰ - ۲۰:۰۰</div>
                    <div className="text-gray-300">پنج‌شنبه و جمعه: ۹:۰۰ - ۲۲:۰۰</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">امکان رزرو آنلاین ۲۴ ساعته</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission */}
        <div className="text-center space-y-6 bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <Scissors className="w-16 h-16 text-yellow-500 mx-auto" />
          <h2 className="text-3xl font-bold text-yellow-500">مأموریت ما</h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            مأموریت ما ایجاد فضایی لوکس و آرامش‌بخش است که در آن هر مشتری احساس خاص بودن کند. 
            ما با تمرکز بر جزئیات، استفاده از تکنیک‌های روز دنیا و ارائه خدمات شخصی‌سازی شده، 
            تلاش می‌کنیم تا هر بار که به ما مراجعه می‌کنید، تجربه‌ای فراموش‌نشدنی داشته باشید.
          </p>
        </div>
      </div>
    </div>
  );
};