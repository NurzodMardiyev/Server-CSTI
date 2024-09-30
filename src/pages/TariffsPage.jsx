import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdSdStorage } from "react-icons/md";
import { Segmented } from "antd";

const prices = [
  { small: "5.99", medium: "6,99", large: "7.99", extraLarge: "8.99" },
  { small: "25.99", medium: "30,99", large: "35.99", extraLarge: "45.99" },
  { small: "45.99", medium: "55,99", large: "65.99", extraLarge: "85.99" },
];

export default function TariffsPage() {
  const [tariff, setTariff] = useState(prices[0]);
  const [isMargen, setIsMargen] = useState();

  const handleChangePrices = (value) => {
    if (value === "1 oylik") {
      setTariff(prices[0]);
    } else if (value === "6 oylik") {
      setTariff(prices[1]);
    } else {
      setTariff(prices[2]);
    }
  };

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
    <div
      className={`${isMargen ? "mt-[69px] " : ""}  w-full mx-auto bg-green-50`}
    >
      <div className="bg-green-100 text-center py-10 mb-8">
        <h2 className="uppercase md:text-[24px] text-[20px] font-[600]">
          TARIFLAR RO'YXATI
        </h2>
        <p>Turli tariflardan o'zingizga mosini tanlang:</p>
      </div>
      <div className="container max-w-9xl mx-auto py-4 grid grid-cols-12 justify-between items-center px-4 gap-6  ">
        <div className="border p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl hover:shadow-2xl transition-all duration-150 md:col-span-3 col-span-6">
          <h3 className="text-2xl font-[500]">Talaba</h3>
          <div>
            <span className="border border-black p-1 uppercase">
              chegirma bilan
            </span>
          </div>
          <p className="md:text-[16px] mb-4">
            Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
          </p>
          <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
            <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
            <span className="line-through">$7.77</span>
          </div>
          <div>
            <p className="md:text-[41px] text-[30px] font-[700]">
              €{tariff.small} <span className="text-[14px]">/mo</span>
            </p>
          </div>
          <p className="text-[12px] md:text-[14px]">
            Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
          </p>

          <div>
            <Link className="w-full py-4 bg-gray-800 text-white block text-center">
              Sotib olish
            </Link>
          </div>

          <div className="icons flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>2GB RAM</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>Connect a custom domain</p>
            </div>
          </div>
        </div>
        <div className="border p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl hover:shadow-2xl transition-all duration-150 md:col-span-3 col-span-6">
          <h3 className="text-2xl font-[500]">Talaba</h3>
          <div>
            <span className="border border-black p-1 uppercase">
              chegirma bilan
            </span>
          </div>
          <p className="md:text-[16px] mb-4">
            Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
          </p>
          <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
            <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
            <span className="line-through">$7.77</span>
          </div>
          <div>
            <p className="md:text-[41px] text-[30px] font-[700]">
              €{tariff.medium} <span className="text-[14px]">/mo</span>
            </p>
          </div>
          <p className="text-[12px] md:text-[14px]">
            Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
          </p>

          <div>
            <Link className="w-full py-4 bg-gray-800 text-white block text-center">
              Sotib olish
            </Link>
          </div>

          <div className="icons flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>2GB RAM</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>Connect a custom domain</p>
            </div>
          </div>
        </div>
        <div className="border-2 relative mt-4  md:mt-auto border-green-300  p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl rounded-t-none hover:shadow-2xl transition-all duration-150 md:col-span-3 col-span-6">
          <span className="mt-[-20px] ps-3 ring-2 ring-green-400 rounded-t-xl top-0 bg-green-400 w-full border-x-4 border-green-400 left-0 absolute py-1 text-[14px] text-white">
            Tavsiya beramiz!
          </span>
          <h3 className="text-2xl font-[500]">Talaba</h3>
          <div>
            <span className="border border-black p-1 uppercase">
              chegirma bilan
            </span>
          </div>
          <p className="md:text-[16px] mb-4">
            Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
          </p>
          <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
            <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
            <span className="line-through">$7.77</span>
          </div>
          <div>
            <p className="md:text-[41px] text-[30px] font-[700]">
              €{tariff.large} <span className="text-[14px]">/mo</span>
            </p>
          </div>
          <p className="text-[12px] md:text-[14px]">
            Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
          </p>

          <div>
            <Link className="w-full py-4 bg-gray-800 text-white block text-center">
              Sotib olish
            </Link>
          </div>

          <div className="icons flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>2GB RAM</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>Connect a custom domain</p>
            </div>
          </div>
        </div>
        <div className="border p-4 mt-4 md:mt-auto flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl hover:shadow-2xl transition-all duration-150 md:col-span-3 col-span-6">
          <h3 className="text-2xl font-[500]">Talaba</h3>
          <div>
            <span className="border border-black p-1 uppercase">
              chegirma bilan
            </span>
          </div>
          <p className="md:text-[16px] mb-4">
            Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
          </p>
          <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
            <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
            <span className="line-through">$7.77</span>
          </div>
          <div>
            <p className="md:text-[41px] text-[30px] font-[700] transition-all duration-150">
              €{tariff.extraLarge} <span className="text-[14px]">/mo</span>
            </p>
          </div>
          <p className="text-[12px] md:text-[14px]">
            Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
          </p>

          <div>
            <Link className="w-full py-4 bg-gray-800 text-white block text-center">
              Sotib olish
            </Link>
          </div>

          <div className="icons flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>2GB RAM</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>Connect a custom domain</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mb-10">
        <Segmented
          className="shadow-xl"
          options={["1 oylik", "6 oylik", "Yillik"]}
          onChange={(value) => {
            handleChangePrices(value);
          }}
        />
      </div>
      <div className="container max-w-9xl mx-auto grid grid-cols-12 justify-between items-center px-4 gap-6">
        <div className="border p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl hover:shadow-2xl transition-all duration-150 md:col-span-4 col-span-6">
          <h3 className="text-2xl font-[500]">Talaba</h3>
          <div>
            <span className="border border-black p-1 uppercase">
              chegirma bilan
            </span>
          </div>
          <p className="md:text-[16px] mb-4">
            Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
          </p>
          <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
            <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
            <span className="line-through">$7.77</span>
          </div>
          <div>
            <p className="md:text-[41px] text-[30px] font-[700]">
              €{tariff.small} <span className="text-[14px]">/mo</span>
            </p>
          </div>
          <p className="text-[12px] md:text-[14px]">
            Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
          </p>

          <div>
            <Link className="w-full py-4 bg-gray-800 text-white block text-center">
              Sotib olish
            </Link>
          </div>

          <div className="icons flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>2GB RAM</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>Connect a custom domain</p>
            </div>
          </div>
        </div>
        <div className="border p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl hover:shadow-2xl transition-all duration-150 md:col-span-4 col-span-6">
          <h3 className="text-2xl font-[500]">Talaba</h3>
          <div>
            <span className="border border-black p-1 uppercase">
              chegirma bilan
            </span>
          </div>
          <p className="md:text-[16px] mb-4">
            Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
          </p>
          <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
            <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
            <span className="line-through">$7.77</span>
          </div>
          <div>
            <p className="md:text-[41px] text-[30px] font-[700]">
              €{tariff.medium} <span className="text-[14px]">/mo</span>
            </p>
          </div>
          <p className="text-[12px] md:text-[14px]">
            Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
          </p>

          <div>
            <Link className="w-full py-4 bg-gray-800 text-white block text-center">
              Sotib olish
            </Link>
          </div>

          <div className="icons flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>2GB RAM</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>Connect a custom domain</p>
            </div>
          </div>
        </div>
        <div className="border-2 relative mt-4  md:mt-auto border-green-300  p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl rounded-t-none hover:shadow-2xl md:col-span-4 col-span-6">
          <span className="mt-[-20px] ps-3 ring-2 ring-green-400 rounded-t-xl top-0 bg-green-400 w-full border-x-4 border-green-400 left-0 absolute py-1 text-[14px] text-white">
            Tavsiya beramiz!
          </span>
          <h3 className="text-2xl font-[500]">Talaba</h3>
          <div>
            <span className="border border-black p-1 uppercase">
              chegirma bilan
            </span>
          </div>
          <p className="md:text-[16px] mb-4">
            Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
          </p>
          <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
            <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
            <span className="line-through">$7.77</span>
          </div>
          <div>
            <p className="md:text-[41px] text-[30px] font-[700]">
              €{tariff.large} <span className="text-[14px]">/mo</span>
            </p>
          </div>
          <p className="text-[12px] md:text-[14px]">
            Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
          </p>

          <div>
            <Link className="w-full py-4 bg-gray-800 text-white block text-center">
              Sotib olish
            </Link>
          </div>

          <div className="icons flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>2GB RAM</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                <MdSdStorage />
              </div>
              <p>Connect a custom domain</p>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-center w-full mb-10 mt-6">
        <Segmented
          className="shadow-xl"
          options={["1 oylik", "6 oylik", "Yillik"]}
          onChange={(value) => {
            handleChangePrices(value);
          }}
        />
      </div>
      <div className="flex justify-center">
        <div>
          <div className="container max-w-9xl mx-auto grid grid-cols-8  px-4 gap-6">
            <div className="border p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl hover:shadow-2xl transition-all duration-150 md:col-span-4 col-span-6">
              <h3 className="text-2xl font-[500]">Talaba</h3>
              <div>
                <span className="border border-black p-1 uppercase">
                  chegirma bilan
                </span>
              </div>
              <p className="md:text-[16px] mb-4">
                Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
              </p>
              <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
                <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
                <span className="line-through">$7.77</span>
              </div>
              <div>
                <p className="md:text-[41px] text-[30px] font-[700]">
                  €{tariff.small} <span className="text-[14px]">/mo</span>
                </p>
              </div>
              <p className="text-[12px] md:text-[14px]">
                Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
              </p>

              <div>
                <Link className="w-full py-4 bg-gray-800 text-white block text-center">
                  Sotib olish
                </Link>
              </div>

              <div className="icons flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                    <MdSdStorage />
                  </div>
                  <p>2GB RAM</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                    <MdSdStorage />
                  </div>
                  <p>Connect a custom domain</p>
                </div>
              </div>
            </div>
            <div className="border p-4 flex gap-4 flex-col text-[14px] font-[500] py-8 rounded-xl hover:shadow-2xl transition-all duration-150 md:col-span-4 col-span-6">
              <h3 className="text-2xl font-[500]">Talaba</h3>
              <div>
                <span className="border border-black p-1 uppercase">
                  chegirma bilan
                </span>
              </div>
              <p className="md:text-[16px] mb-4">
                Agar siz talab bo'lsangiz sizga qaynoq chegirma mavjud
              </p>
              <div className="flex gap-2 items-center text-[12px] md:text-[14px]">
                <span className="p-2 bg-[#FFEEA9] uppercase ">31% saqlang</span>
                <span className="line-through">$7.77</span>
              </div>
              <div>
                <p className="md:text-[41px] text-[30px] font-[700]">
                  €{tariff.medium} <span className="text-[14px]">/mo</span>
                </p>
              </div>
              <p className="text-[12px] md:text-[14px]">
                Agar siz bir yil uchun hozir to'lov qilsangiz 65,23$ to'laysiz.{" "}
              </p>

              <div>
                <Link className="w-full py-4 bg-gray-800 text-white block text-center">
                  Sotib olish
                </Link>
              </div>

              <div className="icons flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                    <MdSdStorage />
                  </div>
                  <p>2GB RAM</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] border rounded flex items-center justify-center">
                    <MdSdStorage />
                  </div>
                  <p>Connect a custom domain</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mb-10 mt-6">
            <Segmented
              className="shadow-xl"
              options={["1 oylik", "6 oylik", "Yillik"]}
              onChange={(value) => {
                handleChangePrices(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
