import React from "react";

export default function About() {
  return (
    <div className="bg-green-100 mb-10 mt-4">
      <div className="container max-w-9xl mx-auto py-14 flex justify-between items-center px-4 flex-wrap md:flex-nowrap">
        <div className="flex flex-col items-center px-3 gap-3">
          <div className="">
            <div className="rounded-full bg-[#FF4081] text-white">
              <i className="fa fa-rocket p-8 text-4xl"></i>
            </div>
          </div>
          <h3 className="text-2xl">Serverdan VM lar ajratish</h3>
          <p className="text-center">
            Bizni serverdan foydalanishdagi afzallik bu hosting emas serverni
            o'zidan VM larga ega bo'lish imkoniyatidir.
          </p>
        </div>
        <div className="flex flex-col items-center px-3 gap-3">
          <div className="">
            <div className="rounded-full bg-[#8F4099] text-white">
              <i class="fa fa-gratipay p-8 text-4xl"></i>
            </div>
          </div>
          <h3 className="text-2xl">Serverdan VM lar ajratish</h3>
          <p className="text-center">
            Bizni serverdan foydalanishdagi afzallik bu hosting emas serverni
            o'zidan VM larga ega bo'lish imkoniyatidir.
          </p>
        </div>
        <div className="flex flex-col items-center px-3 gap-3">
          <div className="">
            <div className="rounded-full bg-[#FE6A2B] text-white">
              <i class="fa fa-gg p-8 text-4xl"></i>
            </div>
          </div>
          <h3 className="text-2xl">Serverdan VM lar ajratish</h3>
          <p className="text-center">
            Bizni serverdan foydalanishdagi afzallik bu hosting emas serverni
            o'zidan VM larga ega bo'lish imkoniyatidir.
          </p>
        </div>
      </div>
    </div>
  );
}
