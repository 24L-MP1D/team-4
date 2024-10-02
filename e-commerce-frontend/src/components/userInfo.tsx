"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function UserInfo() {
  return (
    <div className="flex gap-5 max-w-[884px] ">
      <div className="w-[244px] flex flex-col gap-1">
        <Button
          variant="link"
          className="rounded-2xl w-full py-2 pl-4 hover:bg-white text-sm font-medium"
        >
          Хэрэглэгчийн хэсэг
        </Button>
        <Button
          variant="link"
          className="rounded-2xl w-full py-2 pl-4 hover:bg-white text-sm font-medium"
        >
          Захиалгын түүх
        </Button>
      </div>
      <div className="flex-1 flex flex-col">
        <div>
          <span className="text-lg font-bold">Хэрэглэгчийн хэсэг</span>
          <div className="py-6">
            <Separator />
          </div>
        </div>
        <div>
          <div>
            <span className="text-sm font-medium">Овог:</span>
            <Input type="text" className="rounded-full px-3 py-1" />
          </div>
          <div>
            <span className="text-sm font-medium">Нэр:</span>
            <Input type="text" className="rounded-full px-3 py-1" />
          </div>
          <div>
            <span className="text-sm font-medium">Утасны дугаар:</span>
            <Input type="text" className="rounded-full px-3 py-1" />
          </div>
          <div>
            <span className="text-sm font-medium">Имэйл хаяг:</span>
            <Input type="text" className="rounded-full px-3 py-1" />
          </div>
          <div>
            <span className="text-sm font-medium">Хаяг</span>
            <Input type="text" className="rounded-3xl px-3 py-1 h-[94px]" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="secondary" className="bg-primaryBlue text-sm font-medium rounded-full text-white">Мэдээлэл шинэчлэх</Button>
        </div>
      </div>
    </div>
  );
}
