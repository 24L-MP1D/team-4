"use client";

import { Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function BuyStepOne() {
  const [number, SetNumber] = useState(1);
  const nemeh = () => {
    SetNumber(preNumber => (preNumber < 5 ? number + 1 : preNumber));
  }
  const hasah = () => {
    SetNumber(preNumber => (preNumber > 1 ? number - 1 : preNumber));
  }
  return (
    <div className="flex flex-col justify-center gap-6 mt-10">
      <div className="w-[256px] flex gap-20 items-center pl-[500px]">
        <Button variant={"outline"} className="rounded-full size-10">1</Button>
        <div></div>
        <Button variant={"outline"} className="rounded-full size-10">2</Button>
        <Button variant={"outline"} className="rounded-full size-10">3</Button>
      </div>
      <div className="w-[650px] flex flex-col self-center bg-slate-500 rounded-2xl">
        <div className="w-full p-8 flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <span className="text-xl font-bold">1. Сагс</span>
            <span className="text-gray-400">(4)</span>
          </div>
          <div className="flex gap-6 p-4 bg-[#ECEDF0] rounded-2xl">
            <div className="bg-yellow-300 w-[100px] h-[100px] rounded-xl shadow-2xl"></div>
            <div className="flex flex-col gap-2 w-[354px]">
              <div>
                <span className="text-sm font-normal">Chunky Glyph Tee</span>
              </div>
              <div className="flex gap-1 items-center">
                <Button variant={"outline"} className="rounded-full size-8" type="button" onClick={hasah}>
                  -
                </Button>
                <div className="w-8 h-8 items-center flex justify-center">{number}</div>
                <Button variant={"outline"} className="rounded-full size-8" type="button" onClick={nemeh}>
                  +
                </Button>
              </div>
              <div className="text-base font-bold">120’000₮</div>
            </div>
            <div className="">
              <Trash2Icon className="size-6" />
            </div>
          </div>
          <div className="flex gap-6 p-4 bg-[#ECEDF0] rounded-2xl">
            <div className="bg-yellow-300 w-[100px] h-[100px] rounded-xl shadow-2xl"></div>
            <div className="flex flex-col gap-2 w-[354px]">
              <div>
                <span className="text-sm font-normal">Chunky Glyph Tee</span>
              </div>
              <div className="flex gap-1 items-center">
                <Button variant={"outline"} className="rounded-full size-8" type="button" onClick={hasah}>
                  -
                </Button>
                <div className="w-8 h-8 items-center flex justify-center">{number}</div>
                <Button variant={"outline"} className="rounded-full size-8" type="button" onClick={nemeh}>
                  +
                </Button>
              </div>
              <div className="text-base font-bold">120’000₮</div>
            </div>
            <div className="">
              <Trash2Icon className="size-6" />
            </div>
          </div>
          <div className="flex gap-6 p-4 bg-[#ECEDF0] rounded-2xl">
            <div className="bg-yellow-300 w-[100px] h-[100px] rounded-xl shadow-2xl"></div>
            <div className="flex flex-col gap-2 w-[354px]">
              <div>
                <span className="text-sm font-normal">Chunky Glyph Tee</span>
              </div>
              <div className="flex gap-1 items-center">
                <Button variant={"outline"} className="rounded-full size-8" type="button" onClick={hasah}>
                  -
                </Button>
                <div className="w-8 h-8 items-center flex justify-center">{number}</div>
                <Button variant={"outline"} className="rounded-full size-8" type="button" onClick={nemeh}>
                  +
                </Button>
              </div>
              <div className="text-base font-bold">120’000₮</div>
            </div>
            <div className="">
              <Trash2Icon className="size-6" />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-base font-normal">Нийт төлөх дүн:</span>
            <div className="text-xl font-bold">360’000₮</div>
          </div>
        </div>
        <div className="flex justify-end p-8">
          <Button variant="secondary" className="bg-primaryBlue py-2 px-9 text-sm font-medium rounded-full text-white">Худалдан авах</Button>
        </div>
      </div>
    </div>
  );
}
