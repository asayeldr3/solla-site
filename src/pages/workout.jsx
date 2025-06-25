import React from "react";

export default function Workout() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#3E2C1C] px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-[#FF914D] mb-2">SOLLA 💛</h1>
      <h2 className="text-xl font-semibold mb-1">دليلك لتمارين الحديد - البيلاتس</h2>
      <p className="text-sm text-[#5B4631] mb-6">الكتيب المُنقذ لك والبديل الأنسب للكوتش!</p>

      <div className="text-center mb-6">
        <img
          src="/images/workout-cover.jpg"
          alt="غلاف كتيب التمارين"
          className="mx-auto w-full max-w-sm h-64 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="mt-4 flex justify-center">
        <button className="bg-[#FF914D] hover:brightness-110 active:scale-95 text-white text-sm font-medium px-6 py-2 rounded-full shadow-md transition-all duration-150">
          احصل على الكتيب الآن
        </button>
      </div>

      <div className="mt-10">
  <div className="flex flex-wrap justify-center gap-4">
    <button className="flex-shrink-0 bg-white border border-[#E2B57D] text-[#3E2C1C] px-4 py-2 rounded-full text-sm shadow transition-transform active:scale-95">
      🧘‍♀️ تنظيم حياتك
    </button>
    <button className="flex-shrink-0 bg-white border border-[#E2B57D] text-[#3E2C1C] px-4 py-2 rounded-full text-sm shadow transition-transform active:scale-95">
      🏋️‍♀️ تنظيم تمارينك
    </button>
    <button className="flex-shrink-0 bg-white border border-[#E2B57D] text-[#3E2C1C] px-4 py-2 rounded-full text-sm shadow transition-transform active:scale-95">
      📅 تنظيم جدولك
    </button>
  </div>
</div>
    </div>
  );
}