"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function UserInfo() {
  return (
    <div className="flex gap-5 max-w-[884px]">
      <div className="w-[244px] flex flex-col gap-2">
        <Button
          variant="link"
          className="rounded-2xl w-full py-2 px-4 hover:bg-white text-sm font-medium"
        >
          Хэрэглэгчийн хэсэг
        </Button>
        <Button
          variant="link"
          className="rounded-2xl w-full py-2 px-4 hover:bg-white text-sm font-medium"
        >
          Захиалгын түүх
        </Button>
      </div>
      <div className="bg-slate-600 flex-1">
        <div>
          <span className="text-lg font-bold">Хэрэглэгчийн хэсэг</span>
          <Separator className="py-6"/>
        </div>
        <div>
          <div>
            <span className="text-sm font-medium">Овог:</span>
            <Input type="text" className="rounded-[18px] px-3 py-1"/>
          </div>
          <div>
            <span className="text-sm font-medium">Нэр:</span>
            <Input type="text" className="rounded-[18px] px-3 py-1"/>
          </div>
          <div>
            <span className="text-sm font-medium">Утасны дугаар:</span>
            <Input type="text" className="rounded-[18px] px-3 py-1"/>
          </div>
          <div>
            <span className="text-sm font-medium">Имэйл хаяг:</span>
            <Input type="text" className="rounded-[18px] px-3 py-1"/>
          </div>
          <div>
            <span className="text-sm font-medium">Хаяг</span>
            <Input type="text" className="rounded-[18px] px-3 py-1 h-[94px]"/>
          </div>
        </div>
        <Button variant="secondary" className="bg-primaryBlue text-sm font-medium">Мэдээлэл шинэчлэх</Button>
      </div>
    </div>
  );
}
