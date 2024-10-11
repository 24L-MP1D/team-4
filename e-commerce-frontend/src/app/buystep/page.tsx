"use client";
import BuyStepOne from "@/components/buyStepOne";
import { BuyStepThree } from "@/components/buyStepThree";
import { BuySteoTwo } from "@/components/buyStepTwo";
import { Header } from "@/components/header";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function BuyStep() {
  const [visible, setVisible] = useState<number>(1);
  return (
    <section>
      <Header />
      <div className=" flex flex-col items-center mt-[92px]">
        <div className=" flex flex-col items-center">
          <div className="flex items-center pl">
            <div className="rounded-full size-10 border-[1px] border-black bg-primaryBlue font-bold text-base text-white flex justify-center items-center">
              {visible === 1 ? "1" : <IoMdCheckmark />}
            </div>
            <div className="border-x-[80px] border-solid border-[1px] border-primary"></div>
            <div
              className={`${
                visible != 1
                  ? "bg-primaryBlue text-bold  text-base text-white"
                  : "bg-[#ffffff] rounded-full size-10 border-[1px] border-black flex justify-center items-center"
              }`}
            >
              {visible != 3 ? "2" : <IoMdCheckmark />}
            </div>
            <div className="border-x-[80px] border-solid border-[1px] border-primary"></div>
            <div
              className={`${
                visible === 3
                  ? "bg-primaryBlue font-bold text-base text-white"
                  : "bg-[#ffffff] rounded-full size-10 border-[1px] border-black flex justify-center items-center"
              }`}
            >
              3
            </div>
          </div>
        </div>
        <div>
          {visible === 1 && <BuyStepOne setVisible={setVisible} />}
          {visible === 2 && <BuySteoTwo setVisible={setVisible} />}
          {visible === 3 && <BuyStepThree setVisible={setVisible} />}
        </div>
      </div>
    </section>
  );
}
