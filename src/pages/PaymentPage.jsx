import React, { useEffect, useState } from "react";
import logo from "../images/logo_black.png";
import { Button, Input, Modal, Radio, Form } from "antd";
import humo from "../images/cardHumo.png";
import card_chip from "../images/card_chip.png";
import { Link } from "react-router-dom";

export default function PaymentPage() {
  const [value, setValue] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [isMargen, setIsMargen] = useState();
  const [cardNUmberValue, setCardNumberValue] = useState("");
  const [cardNameValue, setCardNameValue] = useState("");
  const [cardMonthValue, setCardMonthValue] = useState("");
  const [cardYearValue, setCardYearValue] = useState("");

  const [data, setData] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    setData(values);
    setIsModalOpen(false);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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

  const handleTakeCardNumber = (e) => {
    let newValue = e.target.value.replace(/\s/g, "");
    newValue = newValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    if (newValue.length > 19) {
      newValue = newValue.slice(0, 19);
    }
    setCardNumberValue(newValue);
  };

  const handletakeCardName = (e) => {
    let nameValue = e.target.value;
    setCardNameValue(nameValue);
  };

  const handletakeCardMonth = (e) => {
    let monthValue = e.target.value;
    setCardMonthValue(monthValue);
  };
  const handletakeCardYear = (e) => {
    let yearValue = e.target.value;
    setCardYearValue(yearValue);
  };
  return (
    <div className={`${isMargen ? "mt-[69px] " : ""} w-full bg-green-50 pb-8`}>
      <div className="bg-green-100 text-center py-10 mb-8">
        <h2 className="uppercase md:text-[24px] text-[20px] font-[600]">
          Server uchun To'lov qiling
        </h2>
        <p>Siz xohlagan usulda, tez va oson:</p>
      </div>
      <div className="max-w-6xl mx-auto bg-white shadow ">
        <div className="w-full flex gap-6 justify-between py-8 px-6 flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <div className="flex items-center">
              <img src={logo} alt="Server Csti" />
              <span className="border-s ps-2">Pay</span>
            </div>
            <div className="py-4">
              <p
                className="text-[32px] text-green-400"
                style={{ fontFamily: "Gloock, serif" }}
              >
                $85.00
              </p>
              <h2 className="text-[22px] font-semibold border-b mb-4 pb-2">
                M Paket Server
              </h2>
              <Modal
                title="Basic Modal"
                open={isModalOpen}
                onCancel={handleCancel}
                footer=""
              >
                <div>
                  <div></div>
                </div>
                <Form
                  name="basic"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onReset={true}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <div className="rounded-xl bg-[#54ffee] flex flex-col px-8 py-10 mx-10 my-6">
                    <div className="mb-10">
                      <img src={card_chip} alt="" className="w-[50px]" />
                    </div>
                    <div>
                      <p className="text-[22px] font-semibold">
                        {cardNUmberValue === ""
                          ? "1234 5678 9101 1121"
                          : cardNUmberValue}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        {cardNameValue === ""
                          ? "YOUR NAME HERE"
                          : cardNameValue}
                      </span>
                      <span>
                        {cardMonthValue === "" ? "12" : cardMonthValue}/
                        {cardYearValue === "" ? "28" : cardYearValue}
                      </span>
                    </div>
                  </div>
                  <Form.Item
                    name="cardName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Card Name"
                      onChange={handletakeCardName}
                    />
                  </Form.Item>
                  <Form.Item
                    name="cardNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your cardnmae!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Card Number"
                      type="number"
                      value={cardNUmberValue}
                      onChange={handleTakeCardNumber}
                      maxLength={16}
                    />
                  </Form.Item>
                  <div className="flex gap-6">
                    <Form.Item
                      name="cardMonth"
                      rules={[
                        {
                          required: true,
                          message: "Please input Card Number!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Card Month"
                        type="number"
                        onChange={handletakeCardMonth}
                        maxLength={2}
                      />
                    </Form.Item>
                    <Form.Item
                      name="cardYeaar"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Card Year"
                        type="number"
                        onChange={handletakeCardYear}
                        maxLength={2}
                      />
                    </Form.Item>
                  </div>

                  <div className="flex justify-end">
                    <Button type="primary" htmlType="submit" className="">
                      Qo'shish
                    </Button>
                  </div>
                </Form>
              </Modal>
              <div className="flex justify-between items-center">
                <h3 className="text-18px font-semibold">
                  Chegirmada <span className="text-green-400">$13.24</span>
                </h3>
                <button
                  className="text-blue-500 text-semibold"
                  onClick={showModal}
                >
                  {" "}
                  <span className="w-[23px] h-[23px] rounded-3xl bg-blue-400 inline-flex justify-center items-center mr-2">
                    <i className="fa fa-add text-white "></i>
                  </span>
                  Add payment card
                </button>
              </div>
              <p className="my-3">
                This is an estimate for the portion of your order (not covered
                by insurance) due today . once insurance finalizes their review
                refunds and/or balances will reconcile automatically.
              </p>
              <div className="cards ">
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  className="inline-flex flex-col"
                >
                  {data ? (
                    <Radio value={1}>
                      <div className="border rounded-md flex justify-between w-full items-center px-6 py-3 gap-6">
                        <div className="flex  items-center">
                          <img
                            src={humo}
                            alt="Humo Card"
                            className="w-[60px] me-2"
                          />
                          <h4 className="text-[16px] font-semibold">
                            {data.cardName}
                          </h4>
                        </div>
                        <p className="text-[16px] font-semibold">
                          {data.cardNumber}
                        </p>
                      </div>
                    </Radio>
                  ) : (
                    ""
                  )}
                </Radio.Group>
              </div>
              <Link
                to="/user"
                className="w-full py-2 uppercase font-semibold bg-gray-800 text-white mt-4 inline-flex justify-center"
              >
                To'lash
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="md:ms-8 px-6 bg-slate-50 border h-full flex flex-col justify-between">
              <div className="">
                <div className="flex w-full justify-center flex-col items-center pt-8">
                  <div className="flex items-center">
                    <img src={logo} alt="Server Csti" />
                    <span className="border-s ps-2">Pay</span>
                  </div>
                  <h4 className="text-[20px] font-semibold mt-2 text-green-400">
                    Xarid cheki
                  </h4>
                </div>
                <p className="flex justify-between items-center mt-3">
                  <span className="inline-block">Umumiy to'lov</span>
                  <span className="inline-block">5.99$</span>
                </p>
                <p className="flex justify-between items-center mt-3">
                  <span className="inline-block">Chegirma</span>
                  <span className="inline-block">31%</span>
                </p>
              </div>
              <div className="mb-6 border-t pt-3">
                <p className="flex justify-between items-center">
                  <span className="inline-block font-semibold text-[20px] ">
                    To'lov
                  </span>
                  <span className="inline-bloc text-[20px] font-semibold text-green-400">
                    40$
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
