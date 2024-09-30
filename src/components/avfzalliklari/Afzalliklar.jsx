import React from "react";
import "../../App.css";
import icon7 from "../../images/icon7.png";
import icon8 from "../../images/icon8.png";
import icon9 from "../../images/icon9.png";
import icon10 from "../../images/icon10.png";
import icon11 from "../../images/icon11.png";
import icon12 from "../../images/icon12.png";

export default function Afzalliklar() {
  return (
    <div className="shared-table">
      <div className="container max-w-9xl mx-auto py-14 justify-between items-center px-4 ">
        <div className="difference">
          <div className="row spacing-25">
            <div className="col-md-9 col-sm-12 center-block">
              <h3 className="text-center text-[24px] md:text-[29px] px-10 ">
                SERVER.CSTI NING AFZALLIKLARI
              </h3>
              <div className="newplans_box"></div>
            </div>
          </div>

          <div className="row spacing-25">
            <div className="col-md-9 col-sm-12 center-block">
              <div className="grid grid-cols-12 fully-managed">
                <div
                  className="md:col-span-4 wow fadeInLeft flex items-center flex-col gap-6 mb-[100px] col-span-6"
                  data-wow-duration="500ms"
                  data-wow-delay="100ms"
                >
                  <img src={icon7} alt="" />
                  <h5>KAFOLATLANGAN ISHLASH VAQTI</h5>
                </div>

                <div
                  className="md:col-span-4 wow fadeInLeft  flex items-center flex-col gap-6 mb-[100px] col-span-6"
                  data-wow-duration="500ms"
                  data-wow-delay="150ms"
                >
                  <img src={icon8} alt="" />
                  <h5>YUZLAB FOYDALANUVCHI VA MIJOZLAR</h5>
                </div>

                <div
                  className="md:col-span-4 wow fadeInLeft flex items-center flex-col gap-6 mb-[100px] col-span-6"
                  data-wow-duration="500ms"
                  data-wow-delay="200ms"
                >
                  <img src={icon9} alt="" />
                  <h5>BARCHA XIZMATLARDA ONLAYN FOYDALANISH</h5>
                </div>

                <div
                  className="md:col-span-4 wow fadeInLeft flex items-center flex-col gap-6 mb-[40px] col-span-6"
                  data-wow-duration="500ms"
                  data-wow-delay="250ms"
                >
                  <img src={icon10} alt="" />
                  <h5>TEXNIK QO'LLAB-QUVVATLASH</h5>
                </div>

                <div
                  className="md:col-span-4 wow fadeInLeft flex items-center flex-col gap-6 mb-[40px] col-span-6"
                  data-wow-duration="500ms"
                  data-wow-delay="300ms"
                >
                  <img src={icon11} alt="" />
                  <h5>SERVERDAN ERKIN FOYDALANISH IMKONIYATI</h5>
                </div>

                <div
                  className="md:col-span-4 wow fadeInLeft flex items-center flex-col gap-6 mb-[40px] col-span-6"
                  data-wow-duration="500ms"
                  data-wow-delay="350ms"
                >
                  <img src={icon12} alt="" />
                  <h5>PREMIUM TARIFLAR</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
