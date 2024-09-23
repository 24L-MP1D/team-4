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


export function Register() {
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
            <div >
                    <Form {...form}  >
                      
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem className="flex flex-col gap-4 w-[334px]">
                            <FormControl>
                                <Input placeholder="Нэр" {...field} className="rounded-[18px]"/>
                            </FormControl>
                            <FormControl>
                                <div className="flex flex-col gap-2">
                                  <Input placeholder="Имэйл хаяг" {...field} className="rounded-[18px]"/>
                                  <div className="text-primaryRed text-xs font-normal">Зөв имэйл хаяг оруулна уу</div> 
                                </div>                  
                            </FormControl>
                            <FormControl>
                                <div >
                                  <Input placeholder="Нууц үг" {...field} className="rounded-[18px]"/>   
                                </div>            
                            </FormControl>
                            <FormControl>
                                <div className="flex flex-col gap-2">
                                  <Input placeholder="Нууц үг давтах" {...field} className="rounded-[18px]"/>
                                  <div className="text-primaryRed text-xs font-normal">Нууц үг ижил биш байна</div>
                                </div>
                            </FormControl>             
                            <FormMessage />
                        </FormItem>
                        
                        )}
                    />
            
                    </Form>
            </div>
            <ul>
              
                <li className="text-primaryGray font-normal text-xs list-disc ml-4">Том үсэг орсон байх</li>
                <li className="text-primaryGray font-normal text-xs list-disc ml-4">Жижиг үсэг орсон байх</li>
                <li className="text-primaryGray font-normal text-xs list-disc ml-4">Тоо орсон байх</li>
                <li className="text-primaryGray font-normal text-xs list-disc ml-4">Тэмдэгт орсон байх</li>
                
            </ul> 
            </div>
            <div className="flex flex-col gap-12 w-[334px]">
                <Button className="rounded-[18px] bg-primaryBlue text-[#FAFAFA] text-sm font-medium hover:bg-blue-700">Үүсгэх</Button>
                <Button className="bg-white border-primaryBlue border rounded-[18px] text-primaryBlue text-sm font-medium hover:bg-gray-50">Нэвтрэх</Button>
            </div>
   </div>
    
    
  )
}