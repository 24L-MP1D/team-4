import { Calendar, Download } from "lucide-react";
import { Header } from "./header";
import { SideBAr } from "./sidebar";

export function Income() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBAr />
        <div className="mx-auto">
          <div className="bg-white rounded-xl  w-[724px]">
            <div className="flex p-5 justify-between">
              <div className="text-[#121316] text-xl font-semibold">Орлого</div>
              <button className="w-[130px] bg-gray-100 flex items-center p-3 text-xs  gap-2 text-[#121316] rounded-lg font-semibold">
                <Download size={16} /> Хуулга татах
              </button>
            </div>
            <div className="w-full bg-gray-300 border-[1px]"></div>
            <div className="flex justify-between p-5">
              <div className="text-[#121316] text-3xl font-semibold">
                235,000₮
              </div>
              <div className="flex gap-4">
                <button className="text-base text-[#FFFFFF] bg-[#18BA51] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">
                  Өнөөдөр
                </button>
                <button className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">
                  7 хоног
                </button>
                <button className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center gap-1">
                  <Calendar size={16} strokeWidth={2.5} />
                  Сараар
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl w-[724px] mt-[10px]">
            <div className="flex p-5 justify-between">
              <div className="text-[#3F4145] text-sm">Захиалгын ID дугаар</div>
              <div>Үйлчлүүлэгч</div>
              <div>Огноо</div>
              <div>Төлбөр</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
