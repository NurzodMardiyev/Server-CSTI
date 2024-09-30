import React from "react";
import logo from "../../images/logo_black.png";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "../../App.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-green-50">
      <div className="border p-10 bg-white">
        <div>
          <img src={logo} alt="Server Csti" />
        </div>
        <div>
          <h2 className="text-[29px]" style={{ fontFamily: "Gloock, serif" }}>
            Accountingizga kirish
          </h2>
          <p className="text-[14px]">
            Agar sizda account mavjud bo'lmasa{" "}
            <Link
              to="/create_account"
              className="text-blue-300 hover:text-blue-500 border-b border-b-blue-500"
            >
              Ro'yhatdan O'tish
            </Link>{" "}
            ga o'ting!
          </p>
        </div>
        <div>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="flex flex-col gap-0"
          >
            <Form.Item
              label="Email pochtangiz"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
              className="mb-[10px]"
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="mb-[10px]"
            >
              <Input.Password className="py-2" />
            </Form.Item>

            <Link
              to="/user"
              type="primary"
              htmlType="submit"
              className="w-full rounded-none bg-gray-800 py-3 mt-2 hover:bg-gray-900 text-white hover:text-green-400 flex justify-center"
            >
              Kirish
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
