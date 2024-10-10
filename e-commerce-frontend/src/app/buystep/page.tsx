import BuyStepOne from "@/components/buyStepOne";
import { BuyStepThree } from "@/components/buyStepThree";
import { BuySteoTwo } from "@/components/buyStepTwo";
import { Header } from "@/components/header";


export default function BuyStep() {
  return (
    <section>
      <Header />
      <div className=" flex flex-col items-center mt-[92px]">
        <div className=" flex flex-col items-center">
          <div className="flex items-center pl">
            <button className="rounded-full size-10 border-[1px] border-black">
              1
            </button>
            <div className="border-x-[80px] border-solid border-[1px] border-primary"></div>
            <button  className="rounded-full size-10 border-[1px] border-black">
              2
            </button>
            <div className="border-x-[80px] border-solid border-[1px] border-primary"></div>
            <button  className="rounded-full size-10 border-[1px] border-black">
              3
            </button>
          </div>
        </div>
        <BuyStepOne />
      </div>
    </section>
  );
}
