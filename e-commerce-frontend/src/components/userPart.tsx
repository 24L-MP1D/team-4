"use client"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FormikErrors, useFormik } from 'formik';

interface FormValues {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    gmail: string;
    address: string;
}
export function Userpart() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            gmail: "",
            address: "",
        },
        onSubmit,
        validate: (values) => {
            const errors: FormikErrors<FormValues> = {};
            if (!values.firstName) {
                errors.firstName = "Овог заавал бичнэ үү";
            }
            if (!values.lastName) {
                errors.lastName = "Нэр заавал бичнэ үү";
            }
            if (!values.phoneNumber) {
                errors.phoneNumber = "Утас аа заавал бичнэ үү";
            }
            if (!values.gmail) {
                errors.gmail = "Майл заавал бичнэ үү";
            }
            if (!values.address) {
                errors.address = "Хаяг заавал бичнэ үү";
            }
            return errors;
        },
    });
    function onSubmit() {
        fetch(`http://localhost:4000/userPart`, {
            method: "POST",
            body: JSON.stringify({
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                phoneNumber: formik.values.phoneNumber,
                gmail: formik.values.gmail,
                address: formik.values.address,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.ok) {
                // Success
            } else {
                // error
            }
        });
    }
    console.log(formik.values);
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-[49px]">
                <div className="text-tersiaryBlack text-lg font-bold">Хэрэглэгчийн хэсэг</div>
                <div className="flex flex-col gap-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="овог" className="font-medium text-sm">Овог:</Label>
                        <Input type="text" className="rounded-[18px] max-w-[620px]" id="firstName" value={formik.values.firstName} onChange={formik.handleChange} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="нэр" className="font-medium text-sm">Нэр:</Label>
                        <Input type="text" className="rounded-[18px] max-w-[620px]" id="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label htmlFor="утасны дугаар" className="font-medium text-sm">Утасны дугаар:</Label>
                        <Input type="text" className="rounded-[18px] max-w-[620px]" id="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label htmlFor="email" className="font-medium text-sm">Имэйл хаяг:</Label>
                        <Input type="email" className="rounded-[18px] max-w-[620px]" id="gmail" value={formik.values.gmail} onChange={formik.handleChange} />
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="хаяг" className="font-medium text-sm">Хаяг</Label>
                        <Textarea className="rounded-[18px] max-w-[620px]" id="address" value={formik.values.address} onChange={formik.handleChange} />
                    </div>
                </div>
                <button className="bg-[#2563EB] rounded-full px-9 py-2 w-[212px] text-base font-medium text-nowrap text-white" type="submit">Мэдээлэл шинэчлэх</button>
            </div>
        </form>
    )
}