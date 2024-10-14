"use client"
import { BuyStepThree } from "@/components/buyStepThree";
import { BuySteoTwo } from "@/components/buyStepTwo";
import { ClientHeader } from "@/components/headerClient";
import { ProductDetail } from "@/components/clientProductDetail"

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ClientHeader/>
      <ProductDetail />
    </div>
  );
}
