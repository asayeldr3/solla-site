
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#3E2C1C]">
      <section className="max-w-4xl mx-auto px-4 py-12">

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">💛  صولا</h1>
          <p className="text-lg">خيارك الأمثل للتغذية والتمارين</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/tansheef" className="block text-center bg-white p-6 rounded-2xl shadow-md transition-transform hover:scale-105 cursor-pointer">
            <img src="/images/recipes-cover.jpg" alt="تنشيف بلذّة" className="mx-auto mb-4 w-full h-48 object-cover rounded-xl" />
            <h2 className="text-2xl font-semibold mb-2">تنشيف بلذّة</h2>
            <p className="text-sm">وصفات صحية ولذيذة تساعدك في التنشيف بدون تعقيد</p>
          </Link>

          <Link to="/workout" className="block text-center bg-white p-6 rounded-2xl shadow-md transition-transform hover:scale-105 cursor-pointer">
            <img src="/images/workout-cover.jpg" alt="دليلك لتمارين الحديد والبيلاتس" className="mx-auto mb-4 w-full h-48 object-cover rounded-xl" />
            <h2 className="text-2xl font-semibold mb-2">دليلك لتمارين الحديد والبيلاتس</h2>
            <p className="text-sm">ملف متكامل يساعدك تبدأ مشوارك الرياضي بخطوات واثقة</p>
          </Link>
        </div>
        <footer className="mt-20 text-center text-sm text-[#5B4631] py-6">
          <div className="space-y-2">
            <p className="text-base font-medium">📱 تواصل معنا</p>
            <div className="flex justify-center gap-4">
              
              <a
                href="https://www.tiktok.com/@so0olla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-black"
              >
                تيك توك
              </a>
            </div>
            <p className="text-xs mt-4">© All rights reserved for Solla</p>
            <p ClassName="text-xs mt-4">صفحة الدفع تحت التطوير , حاليًا يتم الطلب بالتواصل معنا مباشرة </p>
          </div>
        </footer>
      </section>
    </div>
  ); 
}
