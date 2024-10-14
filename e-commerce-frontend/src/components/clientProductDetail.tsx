"use client";
import { Edit, Ellipsis, Heart, Star, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "./ui/textarea";
<<<<<<< HEAD
import { useFormik, FormikErrors } from "formik";
import { usePathname } from "next/navigation";
interface FormValues {
  value: string;
  title: string;
}

//  function CreatComment(){

// }
// 
export type Products = {
  _id: string,
  name: string,
  information: string,
  barCode: number,
  imageurl: string[],
  price: number,
  leftquantity: number,
  category: string,
  subcategory: string,
  addTag: string,
  color: string[],
  size: string[]
}
export function ProductDetail() {
  type Datatype = [
    title: string
  ];
  const formik = useFormik({
    initialValues: { title: "" },
    onSubmit: (values) => {
      console.log(values);
      alert(`title: ${values.title}`)
    },
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.title) {
        errors.value = "title is required";
      }
      return errors;
    },
  });
  const [visible, SetVisible] = useState(false);
  const [comment, SetComment] = useState("");
  const [data, setData] = useState<Products[]>([]);
  const [selected, SetSelected] = useState("");
  const [selectImagePath, SetSelectImagePath] = useState("");
  const [number, SetNumber] = useState(1);

  const postProduct = () => {
    fetch(`http://localhost:4000/postProducts`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    postProduct();
  }, []);
  const nemeh = () => {
    SetNumber(preNumber => (preNumber < 5 ? number + 1 : preNumber));
  }
  const hasah = () => {
    SetNumber(preNumber => (preNumber > 1 ? number - 1 : preNumber));
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      < div className="max-w-[1040px] mx-auto items-center mt-[52px] flex flex-col gap-5 mb-[100px]">
        <div>
          {data.map((product) => (
            <div className="flex gap-5" key={product._id}>
              <div className="flex gap-5">
                <div className="w-[67px] flex flex-col gap-2 py-[100px]">
                  <div className="hover:border-2 hover:border-primaryBlack hover:scale-125">
                    <Image src={product.imageurl[0]} width={67} height={67} alt="жижиг зураг" onClick={() => SetSelectImagePath(product.imageurl[0])} />
                  </div>
                  {/* {data.map((product) => (
                  <div key={product._id}>
                    <Image src={product.imageurl[0]} width={67} height={67} alt="jijig zurag" onClick={() => SetSelectImagePath(product.imageurl[0])} />
                  </div>
                ))} */}
                </div>
                <div className="w-[422px] h-[521px]">
                  <Image
                    src={selectImagePath} width={422} height={511}
                    alt=""
                    className="rounded-2xl shadow-2xl"
                  />
                </div>

              </div>
              <div className="w-[509px] py-[100px] flex-1 flex flex-col gap-4">
                <div className="w-[418px]">
                  <div className="flex flex-col gap-2">
                    <Button variant={"outline"} className="w-14 py-1 px-3 rounded-full">
                      Шинэ
                    </Button>
                    <div className="flex gap-2 items-center text-2xl font-bold">
                      {product.name}
                      <Heart />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-normal">
                      {product.information}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-normal">Хэмжээний заавар</p>
                    <div className="flex gap-2">
                      {data.map((product) => (
                        <button key={product._id} className={`rounded-full border text-xs w-10 h-10 text-black ${product.size === selected ? "bg-primaryBlack text-white" : ""}`} onClick={() => SetSelected(product.size)}>
                          {product.size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Button variant={"outline"} className="rounded-full text-2xl size-10" type="button" onClick={hasah}>-</Button>
                    <div className="w-8 h-8 items-center flex justify-center">{number}</div>
                    <Button variant={"outline"} className="rounded-full text-2xl size-10" type="button" onClick={nemeh}>+</Button>
                  </div>
                </div>
                <div className="flex flex-col gap-10 w-[509px]">
                  <div className="flex flex-col gap-4 w-[175px]">
                    <div className="text-xl font-bold">
                      {product.price}
                    </div>
                    <Button variant={"destructive"} type="button" className="bg-primaryBlue px-9 py-2 rounded-[20px] text-sm font-medium hover:bg-primaryBlue">
                      Сагсанд нэмэх
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="flex flex-col gap-2 w-[509px] ml-[530px]">
              <div>
                <div className="flex gap-1 items-center">
                  <p className="text-sm font-normal">Үнэлгээ</p>
                  <button
                    className="text-sm font-normal text-primaryBlue border-b-2 border-primaryBlue w-[97px] hover:cursor-pointer"
                    onClick={() => SetVisible(!visible)}
                  >
                    бүгдийг харах
                  </button>
                </div>
              </div>
              <div className="flex">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <p className="w-[54px] text-sm font-normal">4.6 (24)</p>
              </div>
            </div>
          </div>
          <div className={`w-full p-3 flex flex-col ml-[535px] gap-6 max-w-[509px] ${visible === true ? "block" : "hidden"}`}>
            <div className="flex flex-col">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Saraa</p>
                    <div className="flex">
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Ellipsis />
                    </PopoverTrigger>
                    <PopoverContent className="flex gap-3 w-[100px]">
                      <Edit className="text-blue-500" />
                      <Trash2 className="text-red-500" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="text-nowrap">
                  Ваав материал ёстой гоё байна 😍
                </div>
                <Separator className="my-2" />
              </div>
            </div>
            <div className="bg-[#F4F4F5] flex flex-col gap-6 p-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Одоор үнэлэх:</p>
                <div className="flex">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Сэтгэгдэл үлдээх:</p>
                <Textarea placeholder="Энд бичнэ үү..." id="title"
                  value={formik.values.title} onChange={formik.handleChange}
                />{formik.errors.title}
              </div>
              <Button className="bg-primaryBlue rounded-3xl w-32 font-semibold py-2 px-9 hover:bg-blue-800" type="submit" onClick={() => formik.handleSubmit}>
                Үнэлэх
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

