import React, { useEffect, useRef, useState } from "react";
import video1 from "../../video/video.mp4";
import video2 from "../../video/video.ogv";
import video3 from "../../video/video.webm";
import "../../App.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const textRef = useRef(null);
  const [isMargen, setIsMargen] = useState();
  // Matn qismlari
  const texts = [
    "Korxonalar uchun",
    "Tizim ishlab chiqaruvchilari uchun",
    "Dizaynerlar uchun",
    "Talabalar uchun",
  ];

  useEffect(() => {
    gsap.registerPlugin(TextPlugin); // TextPlugin'ni ro'yxatga olish

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // Cheksiz qaytarish

    // Har bir qism uchun animatsiya qilish
    texts.forEach((text) => {
      timeline
        .to(textRef.current, {
          text: text, // Har bir qismni yozish
          duration: 2, // Yozish vaqti
          ease: "power2.inOut",
        })
        .to(textRef.current, {
          text: "", // O'chirish
          duration: 1, // O'chirish vaqti
          delay: 1, // O'chirishdan oldin 1 soniya kutish
          ease: "power2.inOut",
        });
    });

    return () => {
      timeline.kill(); // Komponent unmount bo'lganda animatsiyani tozalash
    };
  }, [texts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsMargen(true);
      } else {
        setIsMargen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isMargen ? "mt-[69px] " : ""}  w-full mx-auto`}>
      <div className="container max-w-9xl mx-auto py-4 flex justify-between items-center px-4 ">
        <div className="header w-full flex flex-wrap md:flex-nowrap  gap-4">
          <div className="relative flex w-[1100px] md:h-[650px] h-[450px] ">
            {/* Text Container */}
            <div className="z-20 relative w-full bg-[#0000009e] h-full rounded-3xl flex flex-col items-start pl-[30px] justify-center">
              <h1 className="md:text-3xl text-white md:mb-6 mb-2 text-[18px]">
                Server izlash muammolari yechildi.
              </h1>
              <p
                ref={textRef}
                className="text-green-300 md:text-center md:text-6xl md:h-[70px] h-[70px] text-3xl"
                style={{ fontFamily: "Gloock, serif" }}
              ></p>
              <p className="text-white md:text-2xl">
                Bir necha soniya ichida javob beramiz!
              </p>
              <Link
                to="/"
                className="px-10 py-2 bg-green-300 text-black rounded mt-3 hover:bg-green-400 transition-all duration-150 hover:text-white"
              >
                Buyurtma berish
              </Link>
            </div>

            {/* Video Container */}
            <div className="absolute top-0 left-0 z-10 w-full h-full rounded-3xl overflow-hidden">
              <video loop autoPlay muted className="w-full h-full object-cover">
                <source src={video1} type="video/mp4" />
                <source src={video2} type="video/ogv" />
                <source src={video3} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className="card border bg-gray-800 flex-1 text-center w-full  rounded-3xl flex justify-center items-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div
              className="bg-[#000000cb] h-full flex justify-center items-center rounded-3xl"
              // style={{
              //   backgroundImage:
              //     "url(https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              // }}
            >
              <div className="flex flex-col items-center justify-center gap-3 my-[30px] px-[20px]">
                <span className="uppercase px-2 py-1 pt-1.5 bg-[#85FFF8] text-black text-[12px] block rounded font-[500]">
                  Yangilik
                </span>
                <p
                  style={{ fontFamily: "Gloock, serif" }}
                  className="text-white md:text-4xl text-xl md:leading-[48px]"
                >
                  Agar siz talaba bo'lsangiz sizga qaynoq chegirmamiz mavjud!
                </p>
                <div>
                  <Link
                    to="/"
                    className="px-10 py-2 block bg-green-300 text-black rounded mt-3 hover:bg-green-400 transition-all duration-150 hover:text-white"
                  >
                    Ro'yhatdan o'tish
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
