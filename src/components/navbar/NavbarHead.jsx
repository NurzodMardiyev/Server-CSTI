import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer, Dropdown, Space } from "antd";
import "../../App.css";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const menu = [
  { title: "Bosh sahifa", to: "/" },
  { title: "Tariflar", to: "/tariffs" },
  { title: "Bog'lanish", to: "/contact" },
];

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

export default function NavbarHead() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Agar 50px yoki undan ko'proq scroll qilingan bo'lsa, headerni fixed qiling
      if (window.scrollY > 48) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`bg-gray-800 ${
        isFixed ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""
      } transition-all duration-300 `}
    >
      <div className="container max-w-9xl mx-auto py-4 flex justify-between items-center px-4 ">
        <div className="logo_section h-[30px] md:h-auto">
          <Link to="/">
            <img src={logo} alt="server csti" className="h-full" />
          </Link>
        </div>
        <div className="menu_section hidden md:block">
          <div className="menus flex items-center gap-5 ">
            {menu.map((item) => (
              <Link
                to={item.to}
                key={item.title}
                className="text-white text-[14px]  menu_btns"
                style={{ fontFamily: "inter, sans-serif" }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="block md:hidden text-white">
          <GiHamburgerMenu className="text-[22px]" onClick={showDrawer} />
          <div>
            <Drawer
              title="Server CSTI"
              onClose={onClose}
              open={open}
              className="w-1/2"
            >
              <div className="menus flex flex-col items-center gap-5 ">
                {menu.map((item) => (
                  <Link
                    to={item.to}
                    key={item.title}
                    className="text-black text-[14px]  menu_btns"
                    style={{ fontFamily: "inter, sans-serif" }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                className="w-full flex justify-center mt-5 bg-green-100 py-2 rounded"
              >
                <Link className="cursor-pointer">
                  <Space
                    className="text-[14px] mx-auto"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Tizimga kirish
                    <DownOutlined className="text-[14px]" />
                  </Space>
                </Link>
              </Dropdown>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
