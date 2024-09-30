import { Button, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "antd";
import { Toast } from "primereact/toast";

const ContactPage = () => {
  const toast = useRef(null);
  const [isMargen, setIsMargen] = useState();

  const onFinish = (values) => {
    showSuccess();
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Message Content",
      life: 3000,
    });
  };

  const showError = (data) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: `${data}`,
      life: 3000,
    });
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
          Ilm-fanni raqamlashtirish uchun bizning imkoniyatlarimizdan
          foydalaning
        </h2>
      </div>
      <div className="container max-w-9xl mx-auto py-4 flex flex-col  px-4 ">
        <div className="flex justify-between gap-10 flex-col md:flex-row">
          <div>
            <h3 className="md:text-[22px] text-[18px] font-semibold inline-block">
              SERVER.CSTI bilan bog'lanish
              <span className="block h-[1px] w-full bg-[#333] relative mt-3">
                <span className="h-[4px] bg-red-500 w-[40px] inline-block absolute bottom-0 left-0"></span>
              </span>
            </h3>
            <h4 className="mt-6 text-[18px] font-semibold">
              Savollaringiz bormi?
            </h4>
            <p className="text-[14px]">
              Biz sizning savollaringizga doimiy ravishda <br /> javob berib
              boramiz.
            </p>
          </div>
          <div className="flex-1">
            <div>
              <h3 className="md:text-[22px] text-[18px] font-semibold inline-block">
                Savollaringizni yuboring
              </h3>
              <span className="block h-[1px] w-full bg-[#333] relative mt-3">
                <span className="h-[4px] bg-red-500 w-[140px] inline-block absolute bottom-0 left-0"></span>
              </span>
            </div>
            <div>
              <div className="bg-white p-10 my-6 shadow">
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  className="flex flex-col gap-0"
                >
                  <Form.Item
                    label="Ism Familyangiz"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Fullname!",
                      },
                    ]}
                    className="mb-[10px]"
                  >
                    <Input className="w-full" />
                  </Form.Item>

                  <Form.Item
                    label="Telefon raqamingiz"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone!",
                      },
                    ]}
                    className="mb-[10px]"
                  >
                    <Input className="w-full" />
                  </Form.Item>

                  <Form.Item
                    label="Xabar yuboring"
                    name="text"
                    className="mb-[10px]"
                  >
                    <Input.TextArea rows="5" />
                  </Form.Item>

                  <div>
                    <Toast ref={toast} />
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="px-6 rounded-none bg-gray-800 py-2 hover:bg-gray-900 hover:shadow-md"
                    >
                      Yuborish
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
