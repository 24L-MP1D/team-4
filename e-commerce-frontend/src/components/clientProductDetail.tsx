"use client";
import { BluetoothConnectedIcon, Edit, Ellipsis, Heart, Key, Star, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { TableBody, TableCell } from "./ui/table";
import { useState } from "react";
import Image from "next/image";
import image1174 from "/public/clientProductImage/image1174.png";
import image1175 from "/public/clientProductImage/image1175.png";
import image1176 from "/public/clientProductImage/image1176.png";
import image1177 from "/public/clientProductImage/image1177.png";
import image1178 from "/public/clientProductImage/image1178.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "./ui/textarea";
import { title } from "process";
import { useFormik, FormikErrors } from "formik";
import { Header } from "./header";
import { tree } from "next/dist/build/templates/app-page";

interface FormValues {
  title: string;
}

const buttons = [
  {
    name: "S",
  },
  {
    name: "M"
  },
  {
    name: "L"
  },
  {
    name: "XL"
  },
  {
    name: "2XL"
  }
]
function Submit() {
  fetch(`http://localhost:4000/productDetail`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
  }).then((res) => {
    if (res.ok) {
      // Success
    } else {
      // error
    }
  });
}



export function ProductDetail({ open }: { open: boolean }) {
  const [visible, SetVisible] = useState(false);
  const [selected, SetSelected] = useState("");
  const formik = useFormik({
    initialValues: { title: "" },
    onSubmit: (values) => {
      console.log(values);
      alert(`title: ${values.title}`)
    },
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.title) {
        errors.title = "title is required";
      }
      return errors;
    },
  });
  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      < div className="max-w-[1040px] mx-auto items-center mt-[52px] flex gap-5" >
        <div className="flex gap-5">
          <div className="w-[67px] flex flex-col gap-2 py-[100px]">
            <div className="w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125">
              <Image
                src={image1175}
                alt=""
                className="rounded-sm shadow-xl w-full"
              />
            </div>
            <div className="w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125">
              <Image src={image1176} alt="" className="rounded-sm shadow-xl" />
            </div>
            <div className="w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125">
              <Image src={image1177} alt="" className="rounded-sm shadow-xl" />
            </div>
            <div className="w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125">
              <Image src={image1178} alt="" className="rounded-sm shadow-xl" />
            </div>
          </div>
          <Image
            src={image1174}
            alt=""
            className="rounded-2xl shadow-2xl w-[509px] h-[521px]"
          />
        </div>
        <div className="w-[509px] py-[100px] flex-1 flex-col gap-4">
          <div className="w-[418px]">
            <div className="flex flex-col gap-2">
              <Button
                variant={"outline"}
                className="w-14 py-1 px-3 rounded-full"
              >
                Шинэ
              </Button>
              <div className="text-2xl font-bold flex gap-2 items-center">
                Wildflower Hoodie
                <Heart />
              </div>
              <p className="text-base font-normal">
                Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-normal">Хэмжээний заавар</p>
              <div className="flex gap-1">
                {buttons.map((button) => (
                  <Button variant={"outline"} className={`rounded-full text-xs w-8 h-8 text-black ${button.name === selected ? "bg-primaryBlack text-white" : ""}`} onClick={() => SetSelected(button.name)}>
                    {button.name}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <Button variant={"outline"} className="rounded-full text-2xl" type="button">
                -
              </Button>
              <div className="w-8 h-8 items-center flex justify-center">1</div>
              <Button variant={"outline"} className="rounded-full text-2xl" type="button">
                +
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-[509px]">
            <div className="flex flex-col gap-2 w-[175px]">
              <p className="text-xl font-bold">120’000₮</p>
              <Button
                variant={"destructive"} type="button"
                className="bg-primaryBlue px-9 py-2 rounded-[20px] text-sm font-medium hover:bg-primaryBlue"
              >
                Сагсанд нэмэх
              </Button>
            </div>
            <Popover open={open}>
              <div className="flex flex-col gap-2">
                <PopoverTrigger asChild>
                  <div className="flex gap-1">
                    <p className="text-sm font-normal">Үнэлгээ</p>
                    <div
                      className="text-sm font-normal text-primaryBlue border-b-2 border-primaryBlue w-[97px] hover:cursor-pointer"
                      onClick={() => SetVisible(true)}
                    >
                      бүгдийг харах
                    </div>
                  </div>
                </PopoverTrigger>
                <div className="flex">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <p className="w-[54px] text-sm font-normal">4.6 (24)</p>
                </div>
              </div>
              <PopoverContent className="w-full p-3">
                <TableBody className="flex flex-col gap-6">
                  <ScrollArea className="w-[300px] rounded-md border">
                    <div className="flex flex-col">
                      <TableCell>
                        <div className="flex justify-between">
                          <div className="flex gap-2">
                            <p className="text-sm font-medium">Saraa</p>
                            <Star className="size-5 fill-yellow-400 text-yellow-400" />
                            <Star className="size-5 fill-yellow-400 text-yellow-400" />
                            <Star className="size-5 fill-yellow-400 text-yellow-400" />
                            <Star className="size-5 fill-yellow-400 text-yellow-400" />
                            <Star className="size-5 fill-yellow-400 text-yellow-400" />
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
                      </TableCell>
                    </div>
                  </ScrollArea>
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
                </TableBody>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </form>

  );
}
