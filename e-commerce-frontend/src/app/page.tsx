"use client"

import { BuyStepOne } from "@/components/buyStepOne";
import { BuyStepThree } from "@/components/buyStepThree";
import { BuySteoTwo } from "@/components/buyStepTwo";
import { ProductDetail } from "@/components/clientProductDetail"

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ProductDetail />
      <BuySteoTwo />
    </div>
  );
}
