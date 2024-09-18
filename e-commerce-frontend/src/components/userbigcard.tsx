"use client"

import { UserCard } from "./usercard"
const hi = [
    {name: "hi"}, 
    {name: "hello"}, 
    {name: "bye"}, 
    {name: "hey"}, 
    {name: "whatsup"}, 
    {name: "upto"}, 
]
export function UserBigCard () {
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-12">
            {hi.map ((hey, index) =>
                <UserCard index={index}/>
            )}
            
        </div>
    )
}