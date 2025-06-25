import React from "react";

export default function Tansheef() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#3E2C1C] px-4 py-12">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#FF914D] transition-transform active:scale-105 cursor-pointer">
          SOLLA 💛
        </h1>
        <p className="text-lg font-medium mb-6">وصفات بطابعك الخاص</p>
        <p className="text-sm text-[#6B4F3A] mb-10">
          طفشت من البيض؟ والشوفان اللي ما ينوكل؟ 😩
           جرب وصفات لذيذة وسهلة تفتح النفس
        </p>

        <img
          src="/images/recipes-cover.jpg"
          alt="تنشيف بلذة"
          className="mx-auto w-full max-w-sm mb-6 rounded-xl shadow"
        />

        <button className="bg-[#FF914D] hover:bg-[#ff994d] text-white font-semibold py-3 px-6 rounded-xl text-lg shadow-md transition-all active:scale-95 mb-12">
          احصل على الكتيب الآن
        </button>

        <div className="overflow-x-auto">
          <div className="flex gap-4 justify-start w-max mx-auto px-2 pb-6">
            <button className="flex-shrink-0 bg-white border border-[#E2B57D] text-[#3E2C1C] px-5 py-2 rounded-full text-sm shadow transition-transform active:scale-110">
              🥗 أكل متزن
            </button>
            <button className="flex-shrink-0 bg-white border border-[#E2B57D] text-[#3E2C1C] px-5 py-2 rounded-full text-sm shadow transition-transform active:scale-110">
              💰 يوفر فلوسك
            </button>
            <button className="flex-shrink-0 bg-white border border-[#E2B57D] text-[#3E2C1C] px-5 py-2 rounded-full text-sm shadow transition-transform active:scale-110">
              ⏰ يوفر عليك وقتك
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}