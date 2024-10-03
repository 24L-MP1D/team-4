"use client"

import { BuyStepOne } from "@/components/buyStepOne";
import { ProductDetail } from "@/components/clientProductDetail"

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ProductDetail />
      <BuyStepOne/>
    </div>
  );
}
