"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const placeholder = [
    {name: "Нэр"},
    {name: "Имэйл хаяг",
    warning: "Зөв имэйл хаяг оруулна уу"
    },
    {name: "Нууц үг"},
    {name: "Нууц үг давтах ",
    warning:"Нууц үг ижил биш байна"
    }
]

const requirements =[
    {name: "Том үсэг орсон байх"},
    {name: "Жижиг үсэг орсон байх"},
    {name: "Тоо орсон байх"},
    {name: "Тэмдэгт орсон байх"}
]

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })



  return (
   <div className="flex flex-col gap-4 items-center pt-[100px]">
        <div className="flex flex-col gap-6">
            <p className="text-tersiaryBlack font-semibold text-2xl self-center">Бүртгүүлэх</p>
            <div className="flex flex-col gap-4 w-[334px]">
                    <Form {...form}  >
                        {placeholder.map((place) => 
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <Input placeholder={place.name} {...field} className="rounded-[18px]"/>
                            </FormControl>
                            <FormDescription className="text-primaryRed text-xs font-normal"> 
                            {place.warning}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                        ) }
                    </Form>
            </div>
            <ul>
                {requirements.map ((req)=> 
                <li className="text-primaryGray font-normal text-xs list-disc ml-4">{req.name}</li>
                )}
            </ul> 
            </div>
            <div className="flex flex-col gap-12 w-[334px]">
                <Button className="rounded-[18px] bg-primaryBlue text-[#FAFAFA] text-sm font-medium hover:bg-blue-700">Үүсгэх</Button>
                <Button className="bg-white border-primaryBlue border rounded-[18px] text-primaryBlue text-sm font-medium hover:bg-gray-50">Нэвтрэх</Button>
            </div>
   </div>
    
    
  )
}