import { Heart, ShoppingCart, User } from "lucide-react";
import { Logo } from "./logo";
 
export function ClientHeader() {
    return (
        <div>
            <div className="w-full bg-headerBlack h-[50px] flex justify-between">
                <div className="flex p-3 ml-[15px] gap-2 justify-center text-center items-center">
                    <button><Logo /></button>
                    <button className="text-[#FFFFFF] text-sm ">ECOMMERCE</button>
                    <button className="text-slate-400 text-sm font-normal ml-[20px]">Ангилал</button>
                </div>
                <label className="input input-bordered flex items-center gap-2 h-[40px] w-[300px] bg-[#18181B] text-center rounded-full my-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-5 w-5 opacity-70 text-[#FAFAFA]">
                        <path
                            fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                    <input type="text" className="grow text-white" placeholder="Бүтээгдэхүүн хайх" />
                </label>
                <div className="flex gap-5 mr-[25px] text-center justify-center items-center">
                    <button className="text-[#FFFFFF]"><Heart strokeWidth={1.25} /></button>
                    <button className="text-[#FFFFFF]"><ShoppingCart strokeWidth={1.25} /></button>
                    <button className="text-[#FFFFFF]"><User strokeWidth={1.25} /></button>
                </div>
            </div>
        </div>
    )
}