import React from "react";
import logo from "../../images/logo_black.png";
import { Link } from "react-router-dom";
import { Button, Form, Input, message, Upload } from "antd";
import "../../App.css";
import { UploadOutlined } from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function CreateAccount() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-green-50">
      <div className="border p-10 bg-white">
        <div>
          <img src={logo} alt="Server Csti" />
        </div>
        <div>
          <h2 className="text-[29px]" style={{ fontFamily: "Gloock, serif" }}>
            Regirtratsiyadan O'tish
          </h2>
          <p className="text-[14px]">
            Agar sizda account mavjud bo'lsa{" "}
            <Link
              to="/login"
              className="text-blue-300 hover:text-blue-500 border-b border-b-blue-500"
            >
              Kirish
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
              label="Ism familyangiz"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              className="mb-[10px] mt-3"
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              label="Telefon raqamingiz"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              className="mb-[10px]"
            >
              <Input className="w-full" />
            </Form.Item>

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

            <Upload
              // action={`http://${IP}:8080/api/employee/settings/upload-photo`}
              listType="picture"
              // defaultFileList={fileList}
              // headers={{
              //   Authorization: `${token}`, // Agar token yoki boshqa kerakli headerlar bo'lsa qo'shing
              // }}
              enctype="multipart/form-data"
              name="photo"
              className="w-full block"
              onChange={(info) => {
                if (info.file.status === "done") {
                  message.success(`${info.file.name} uploaded successfully.`);
                  console.log("Upload done:", info.file.response);
                } else if (info.file.status === "error") {
                  message.error(`${info.file.name} upload failed.`);
                  console.log("Upload failed:", info.file.response);
                }
              }}
            >
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="" className="flex items-center gap-1">
                  Agar siz talaba bo'lsangiz
                </label>
                <Button
                  type="bg-[#73d13d]"
                  icon={<UploadOutlined />}
                  className="w-full  bg-[#4CA852] h-[41px] text-[#fff] block"
                >
                  Talabalik guvohnomasi rasmini kiriting!
                </Button>
              </div>
            </Upload>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-none bg-gray-800 py-2 hover:bg-gray-900"
            >
              Yuborish
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
