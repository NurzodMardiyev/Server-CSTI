import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import "../../App.css";

const items = [
  {
    label: (
      <div className="pb-5 border-b border-green-200">
        <p className="text-[14px] mb-2">Ro'yxatdan o'tgan foydalanuvchilar.</p>
        <p className="text-[14px] mb-4">Hisobingiz bormi? Hozir kiring.</p>
        <Link
          to="/login"
          className="text-black px-4 py-2 rounded bg-green-100 mt-3 hover:bg-green-400 hover:text-white transition-all duration-150 "
        >
          Kirish
        </Link>
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="pb-4 ">
        <p className="text-[14px] mb-2">Server CSTI uchun yangimisiz?</p>
        <p className="text-[14px] mb-4">Bugun boshlash uchun hisob yarating.</p>
        <Link
          to="/create_account"
          className="text-black px-4 py-2 rounded bg-green-100 mt-3 hover:bg-green-400 hover:text-white transition-all duration-150 "
        >
          Hisob ochish
        </Link>
      </div>
    ),
    key: "0",
  },
];

export default function NavbarTop() {
  return (
    <div className="hidden md:block">
      <div className="container max-w-9xl mx-auto flex justify-between items-center py-3  px-4">
        <div className="flex gap-4">
          <div className="contacts flex gap-2 items-center">
            <FaPhoneAlt className="text-[14px]" />
            <span
              className="text-[14px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              +998883921383
            </span>
          </div>
          <div className="contacts flex gap-2 items-center">
            <MdEmail className="text-[17px]" />
            <span
              className="text-[14px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              server CSTI
            </span>
          </div>
        </div>
        <div>
          <Dropdown menu={{ items }} trigger={["click"]} className="">
            <Link className="cursor-pointer">
              <Space
                className="text-[14px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Tizimga kirish
                <DownOutlined className="text-[14px]" />
              </Space>
            </Link>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
