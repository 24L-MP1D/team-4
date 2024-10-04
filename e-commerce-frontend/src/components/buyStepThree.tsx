
import Image from "next/image";
import { Button } from "./ui/button";




export function BuyStepThree() {
    return (
        <div>
            <div className="w-[256px] flex gap-20 items-center pl-[500px]">
                <Button variant={"outline"} className="rounded-full size-10">1</Button>
                <Button variant={"outline"} className="rounded-full size-10">2</Button>
                <Button variant={"outline"} className="rounded-full size-10">3</Button>
            </div>
            <div className="w-[687px] bg-slate-400 rounded-2xl">
                <div className="flex flex-col gap-4 p-8">
                    <div className="text-lg font-semibold"> 3. Төлбөр төлөлт</div>
                    <div className="py-16 px-28">
                        <div>
                            
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Button variant={"outline"} className="rounded-2xl px-9 py-2">Буцах</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}