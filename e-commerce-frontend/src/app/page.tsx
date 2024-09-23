import { ImageSlider } from "@/components/carousel";
import { StoreProfile } from "@/components/storeprofile";
import { UserCard } from "@/components/usercard";
import { UserCards } from "@/components/usercards";


export default function Home() {
  return (
    <div className="max-w-[1000px] m-auto flex flex-col gap-5">
      <UserCard/>
    </div>
  )

}
