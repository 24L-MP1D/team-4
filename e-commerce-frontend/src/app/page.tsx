"use client"

import { ProductDetail } from "@/components/clientProductDetail"
import { UserInfo } from "@/components/userInfo";


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ProductDetail />
      <UserInfo />
    </div>
  );
}
