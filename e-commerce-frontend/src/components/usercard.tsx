"use client"
import * as React from "react"
import {
  Card,
  CardContent,
  CardFooter,

} from "@/components/ui/card"

import Image from "next/image"
import { Heart } from "lucide-react"

export function UserCard ({index}: {index:Number}) {
    return (
        <div className="flex flex-col gap-2">
            <Card className={`${index==2 || index==3 ? "max-w-[508px] h-[752px]": "max-w-[244px]"}`}>
                <CardContent className={`relative overflow-hidden rounded-[16px] ${index==2 || index==3 ? "max-w-[508px] h-[752px]": "max-w-[244px]"}`} >
                    <Image alt="Image of product" width={245} height={331} src="/testimage.jpg" className={`w-full  rounded-[16px] hover:transform hover:scale-125 ${index==2 || index==3 ? "h-[752px]": "h-full"} hover:duration-1000`}/>
                    <Heart strokeWidth={1} className={`absolute top-4 right-4 ${index==2 || index==3 ? "hidden": "block"}`}/>
                </CardContent>
            </Card>
       <div className="flex flex-col gap-1">
            <p className="font-normal text-base text-black">The Prompt Magazine</p>
            <div className="text-base text-black font-bold">120’000₮</div>
       </div>
        </div>
    )
}